import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ChevronLeft, ChevronRight, Play, Download, X, MessageCircle, Lock,
} from 'lucide-react';
import type { Material } from '@/data/materiais';
import { WHATSAPP } from '@/data/materiais';

const LOGO = '/img/logo.png';

/* ------------------------------------------------------------------ NAVBAR */
export function Navbar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-ink/95 backdrop-blur border-b border-white/10' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <img src={LOGO} alt="Fabricio Moura Team" className="h-9 w-auto rounded" />
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="gold-btn inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs md:text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Falar com o Fabricio</span>
          <span className="sm:hidden">Falar</span>
        </a>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------- HERO */
export function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/img/hero.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
      <div className="absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold-2/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 md:px-8 md:pb-20">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-2/40 bg-gold-2/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-gold-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-2" />
          Protocolo de 21 dias
        </span>

        <h1 className="max-w-3xl font-anton text-4xl uppercase leading-[1.02] text-white md:text-6xl">
          Celulite <span className="gold-text">Zero</span>
        </h1>

        <p className="mt-4 max-w-xl text-base text-zinc-300 md:text-lg">
          Seus 9 materiais estão liberados. Comece pelo protocolo principal, imprima o checklist e
          siga um dia por vez. Tudo é seu para sempre.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            onClick={onStart}
            className="gold-btn inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm shadow-lg shadow-gold-3/25 transition hover:-translate-y-0.5"
          >
            <Play className="h-5 w-5 fill-current" />
            Começar agora
          </button>
          <a
            href="#materiais"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/20"
          >
            Ver todos os materiais
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- CARD ROW */
export function Row({
  titulo,
  legenda,
  itens,
  onOpen,
}: {
  titulo: string;
  legenda?: string;
  itens: Material[];
  onOpen: (m: Material) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: 'smooth' });
  }, []);

  return (
    <section className="group/row relative py-5">
      <div className="mb-3 px-4 md:px-8">
        <h2 className="text-lg font-extrabold text-white md:text-xl">{titulo}</h2>
        {legenda && <p className="mt-0.5 text-xs text-zinc-500 md:text-sm">{legenda}</p>}
      </div>

      <button
        aria-label="Voltar"
        onClick={() => scrollBy(-1)}
        className="absolute bottom-5 left-0 top-20 z-10 hidden w-12 items-center justify-center bg-gradient-to-r from-black/80 to-transparent text-white opacity-0 transition-opacity hover:from-black md:flex group-hover/row:opacity-100"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        aria-label="Avançar"
        onClick={() => scrollBy(1)}
        className="absolute bottom-5 right-0 top-20 z-10 hidden w-12 items-center justify-center bg-gradient-to-l from-black/80 to-transparent text-white opacity-0 transition-opacity hover:from-black md:flex group-hover/row:opacity-100"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div
        ref={ref}
        className="no-bar flex snap-x gap-3 overflow-x-auto scroll-smooth px-4 pb-2 md:gap-4 md:px-8"
      >
        {itens.map((m) => (
          <Card key={m.id} material={m} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- CARD */
function Card({ material, onOpen }: { material: Material; onOpen: (m: Material) => void }) {
  const Icone = material.icone;
  return (
    <button
      onClick={() => onOpen(material)}
      className="group relative w-[164px] flex-none snap-start overflow-hidden rounded-xl border border-white/10 bg-ink-card text-left transition duration-300 hover:-translate-y-1 hover:border-gold-2/50 md:w-[210px]"
    >
      <div className="relative aspect-[210/297] overflow-hidden bg-black">
        <img
          src={material.capa}
          alt={material.titulo}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        <span className="absolute left-2 top-2 rounded-md bg-black/70 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gold-2 backdrop-blur">
          {material.etiqueta}
        </span>

        <span className="gold-btn absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full font-anton text-sm leading-none">
          {material.ordem}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-3">
          <div className="flex items-center gap-2">
            <Icone className="h-4 w-4 flex-none text-gold-2" />
            <span className="truncate text-xs font-bold text-white">{material.titulo}</span>
          </div>
          <span className="mt-1 block text-[10px] text-zinc-400">{material.duracao}</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
          <span className="gold-btn flex h-12 w-12 items-center justify-center rounded-full">
            <Play className="h-5 w-5 fill-current" />
          </span>
        </div>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------ MODAL */
export function Modal({ material, onClose }: { material: Material | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (material) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [material, onClose]);

  if (!material) return null;
  const Icone = material.icone;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm md:items-center md:p-6"
      onClick={onClose}
    >
      <div
        className="animate-fade-up max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-white/10 bg-ink-soft md:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={material.capa} alt="" className="h-44 w-full object-cover object-top md:h-56" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-ink-soft/50 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-3 top-3 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative z-10 -mt-10 px-5 pb-7 md:px-8">
          <div className="mb-2 flex items-center gap-2">
            <Icone className="h-5 w-5 text-gold-2" />
            <span className="text-[10px] font-bold uppercase tracking-[.15em] text-gold-2">
              Passo {material.ordem} de 9 · {material.duracao}
            </span>
          </div>

          <h3 className="font-anton text-2xl uppercase leading-[1.15] text-white [text-shadow:0_2px_12px_rgba(0,0,0,.9)] md:text-3xl">
            {material.titulo}
          </h3>
          <p className="mt-1 text-sm font-semibold text-zinc-400">{material.linha}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-300">{material.descricao}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={material.arquivo}
              target="_blank"
              rel="noopener"
              className="gold-btn inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm"
            >
              <Play className="h-4 w-4 fill-current" />
              Abrir material
            </a>
            <a
              href={material.arquivo}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/20"
            >
              <Download className="h-4 w-4" />
              Baixar PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- GATE */
export function Gate({ onUnlock }: { onUnlock: () => void }) {
  const [valor, setValor] = useState('');
  const [erro, setErro] = useState(false);
  const senha = import.meta.env.VITE_ACCESS_CODE ?? 'CELULITEZERO21';

  const tentar = () => {
    if (valor.trim().toUpperCase() === String(senha).toUpperCase()) {
      localStorage.setItem('cz_access', '1');
      onUnlock();
    } else {
      setErro(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-ink-soft p-7 text-center">
        <img src={LOGO} alt="" className="mx-auto mb-5 h-14 w-auto rounded" />
        <Lock className="mx-auto mb-3 h-6 w-6 text-gold-2" />
        <h1 className="font-anton text-2xl uppercase text-white">Área de Membros</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Digite o código de acesso que você recebeu por e-mail depois da compra.
        </p>

        <input
          value={valor}
          onChange={(e) => {
            setValor(e.target.value);
            setErro(false);
          }}
          onKeyDown={(e) => e.key === 'Enter' && tentar()}
          placeholder="Código de acesso"
          className="mt-5 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-center text-sm uppercase tracking-widest text-white outline-none focus:border-gold-2"
        />
        {erro && <p className="mt-2 text-xs font-semibold text-red-400">Código inválido.</p>}

        <button onClick={tentar} className="gold-btn mt-4 w-full rounded-xl px-6 py-3 text-sm">
          Entrar
        </button>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="mt-4 block text-xs text-zinc-500 underline underline-offset-4 hover:text-gold-2"
        >
          Não recebeu o código? Fale comigo
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ RODAPÉ */
export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 px-4 py-10 text-center md:px-8">
      <img src={LOGO} alt="" className="mx-auto mb-4 h-10 w-auto rounded opacity-80" />
      <p className="mx-auto max-w-2xl text-[11px] leading-relaxed text-zinc-500">
        Conteúdo educativo e de orientação geral. Não constitui prescrição dietética
        individualizada, prescrição de treinamento personalizado, diagnóstico ou tratamento, e não
        substitui a avaliação de nutricionista, médico ou profissional de educação física que
        acompanhe o seu caso. Resultados variam de pessoa para pessoa. Material protegido, proibida
        a reprodução ou revenda.
      </p>
      <p className="mt-4 text-[11px] font-semibold text-zinc-400">
        Fabricio Moura Nutrição e Treinamento · @fabriciomourateam
      </p>
    </footer>
  );
}
