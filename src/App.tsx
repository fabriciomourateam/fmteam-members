import { useEffect, useMemo, useState } from 'react';
import { Footer, Gate, Hero, Modal, Navbar, Row } from '@/components/Netflix';
import { FILEIRAS, MATERIAIS, type Material } from '@/data/materiais';
import { jaLiberado, liberarPelaUrl } from '@/lib/acesso';

export default function App() {
  const [liberado, setLiberado] = useState(false);
  const [aberto, setAberto] = useState<Material | null>(null);

  useEffect(() => {
    // o link da página de obrigado já traz o código: /?c=CODIGO
    const pelaUrl = liberarPelaUrl();
    setLiberado(pelaUrl || jaLiberado());
  }, []);

  const principal = useMemo(() => MATERIAIS[0], []);

  if (!liberado) return <Gate onUnlock={() => setLiberado(true)} />;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onStart={() => setAberto(principal)} />

      <main id="materiais" className="mx-auto max-w-7xl pb-4">
        {FILEIRAS.map((f) => (
          <Row key={f.titulo} titulo={f.titulo} legenda={f.legenda} itens={f.itens} onOpen={setAberto} />
        ))}
      </main>

      <Footer />
      <Modal material={aberto} onClose={() => setAberto(null)} />
    </div>
  );
}
