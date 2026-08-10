import { useEffect, useState } from 'react';
import { Footer, Gate, Hero, Modal, Navbar, ProductSection, LockedSection } from '@/components/Netflix';
import { MATERIAIS, PRODUTOS, type Material, type ProdutoId } from '@/data/materiais';
import { getProdutos, liberarPelaUrl, temAlgumProduto, type Produtos } from '@/lib/acesso';

export default function App() {
  const [produtos, setProdutos] = useState<Produtos>({ celuliteZero: false, sequeGanhando: false });
  const [liberado, setLiberado] = useState(false);
  const [aberto, setAberto] = useState<Material | null>(null);

  useEffect(() => {
    const p = liberarPelaUrl();
    setProdutos(p);
    setLiberado(p.celuliteZero || p.sequeGanhando);
    if (!p.celuliteZero && !p.sequeGanhando) {
      setLiberado(temAlgumProduto());
      setProdutos(getProdutos());
    }
  }, []);

  if (!liberado) return <Gate onUnlock={(p) => { setProdutos(p); setLiberado(true); }} />;

  const produtoAtivo: ProdutoId = produtos.sequeGanhando ? 'sequeGanhando' : 'celuliteZero';
  const outroProduto: ProdutoId = produtoAtivo === 'celuliteZero' ? 'sequeGanhando' : 'celuliteZero';

  const meusMateriais = MATERIAIS.filter((m) => m.produto === produtoAtivo);
  const outrosMateriais = MATERIAIS.filter((m) => m.produto === outroProduto);
  const outroLiberado = produtos[outroProduto];

  const essenciais = meusMateriais.filter((m) => m.etiqueta !== 'Bônus');
  const bonus = meusMateriais.filter((m) => m.etiqueta === 'Bônus');

  // se tem os dois liberados, mostra segundo produto como seção normal
  const essenciais2 = outrosMateriais.filter((m) => m.etiqueta !== 'Bônus');
  const bonus2 = outrosMateriais.filter((m) => m.etiqueta === 'Bônus');

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero produto={PRODUTOS[produtoAtivo]} onStart={() => setAberto(meusMateriais[0])} />

      <main id="materiais" className="mx-auto max-w-7xl pb-4">
        <ProductSection
          titulo="Siga nesta ordem"
          legenda={`Do 1 ao ${essenciais.length}, um de cada vez.`}
          itens={essenciais}
          onOpen={setAberto}
        />
        <ProductSection
          titulo="Seus bônus"
          legenda="Abra quando quiser, depois que estiver com o protocolo rodando."
          itens={bonus}
          onOpen={setAberto}
        />

        {outroLiberado ? (
          <>
            <div className="mx-auto mt-6 max-w-7xl px-4 md:px-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-2/30 to-transparent" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[.2em] text-gold-2/60">{PRODUTOS[outroProduto].nome}</p>
            </div>
            <ProductSection titulo="Siga nesta ordem" legenda={`Do 1 ao ${essenciais2.length}.`} itens={essenciais2} onOpen={setAberto} />
            <ProductSection titulo="Bônus" itens={bonus2} onOpen={setAberto} />
          </>
        ) : (
          <LockedSection produto={PRODUTOS[outroProduto]} materiais={outrosMateriais} />
        )}
      </main>

      <Footer />
      <Modal material={aberto} onClose={() => setAberto(null)} liberado={true} />
    </div>
  );
}
