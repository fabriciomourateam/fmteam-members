/**
 * Sistema de acesso com bloqueio cruzado.
 *
 * Dois produtos, dois códigos. Cada código libera um produto.
 * A URL pode trazer um ou mais: ?c=CODIGO1 ou ?c=CODIGO1&c=CODIGO2
 * O acesso acumula: comprar o segundo não perde o primeiro.
 */

const CHAVE = 'cz_products';

export interface Produtos {
  celuliteZero: boolean;
  sequeGanhando: boolean;
}

// Códigos configuráveis via env
const CODIGO_CZ = String(import.meta.env.VITE_CODE_CZ ?? 'CELULITEZERO21');
const CODIGO_SGM = String(import.meta.env.VITE_CODE_SGM ?? 'SEQUEMASSA8S');

function normalize(v: string): string {
  return v.trim().toUpperCase();
}

function identificar(codigo: string): Partial<Produtos> {
  const c = normalize(codigo);
  if (c === normalize(CODIGO_CZ)) return { celuliteZero: true };
  if (c === normalize(CODIGO_SGM)) return { sequeGanhando: true };
  return {};
}

function ler(): Produtos {
  try {
    const raw = localStorage.getItem(CHAVE);
    if (!raw) return { celuliteZero: false, sequeGanhando: false };
    const parsed = JSON.parse(raw);
    return {
      celuliteZero: parsed.celuliteZero === true,
      sequeGanhando: parsed.sequeGanhando === true,
    };
  } catch {
    return { celuliteZero: false, sequeGanhando: false };
  }
}

function gravar(p: Produtos) {
  try { localStorage.setItem(CHAVE, JSON.stringify(p)); } catch {}
}

export function getProdutos(): Produtos {
  return ler();
}

export function temAlgumProduto(): boolean {
  const p = ler();
  return p.celuliteZero || p.sequeGanhando;
}

export function liberarCodigo(valor: string): { valido: boolean; produtos: Produtos } {
  const match = identificar(valor);
  if (!match.celuliteZero && !match.sequeGanhando) {
    return { valido: false, produtos: ler() };
  }
  const atual = ler();
  const novo: Produtos = {
    celuliteZero: atual.celuliteZero || (match.celuliteZero ?? false),
    sequeGanhando: atual.sequeGanhando || (match.sequeGanhando ?? false),
  };
  gravar(novo);
  return { valido: true, produtos: novo };
}

export function liberarPelaUrl(): Produtos {
  if (typeof window === 'undefined') return ler();

  const params = new URLSearchParams(window.location.search);
  const codigos = params.getAll('c');
  if (codigos.length === 0) return ler();

  for (const c of codigos) {
    liberarCodigo(c);
  }

  // limpa os parametros de codigo da URL
  codigos.forEach(() => params.delete('c'));
  const resto = params.toString();
  window.history.replaceState({}, '', window.location.pathname + (resto ? `?${resto}` : ''));

  return ler();
}

export function logout() {
  try { localStorage.removeItem(CHAVE); } catch {}
}
