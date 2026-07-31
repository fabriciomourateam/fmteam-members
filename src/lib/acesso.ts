/**
 * Controle de acesso da área.
 *
 * Duas portas de entrada:
 *  1. a pessoa digita o código na tela de acesso
 *  2. o link já traz o código, ex: /?c=CODIGO  (usado na página de obrigado da Kiwify)
 *
 * Nos dois casos o acesso fica gravado no navegador, então ela não digita de novo
 * nas próximas visitas.
 */

const CHAVE = 'cz_access';

export const CODIGO = String(import.meta.env.VITE_ACCESS_CODE ?? 'CELULITEZERO21');

export const confere = (valor: string) =>
  valor.trim().toUpperCase() === CODIGO.trim().toUpperCase();

export const jaLiberado = () => {
  try {
    return localStorage.getItem(CHAVE) === '1';
  } catch {
    return false;
  }
};

export const liberar = () => {
  try {
    localStorage.setItem(CHAVE, '1');
  } catch {
    /* navegador em modo privado, segue sem gravar */
  }
};

/**
 * Lê o código da URL, libera se bater e limpa o parâmetro da barra de endereço,
 * para o código não ficar exposto nem ser copiado junto num compartilhamento.
 */
export const liberarPelaUrl = (): boolean => {
  if (typeof window === 'undefined') return false;

  const params = new URLSearchParams(window.location.search);
  const codigo = params.get('c');
  if (!codigo) return false;

  const valido = confere(codigo);
  if (valido) liberar();

  params.delete('c');
  const resto = params.toString();
  window.history.replaceState({}, '', window.location.pathname + (resto ? `?${resto}` : ''));

  return valido;
};
