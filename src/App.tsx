import { useEffect, useMemo, useState } from 'react';
import { Footer, Gate, Hero, Modal, Navbar, Row } from '@/components/Netflix';
import { FILEIRAS, MATERIAIS, type Material } from '@/data/materiais';

export default function App() {
  const [liberado, setLiberado] = useState(false);
  const [aberto, setAberto] = useState<Material | null>(null);

  useEffect(() => {
    setLiberado(localStorage.getItem('cz_access') === '1');
  }, []);

  const principal = useMemo(() => MATERIAIS[0], []);

  if (!liberado) return <Gate onUnlock={() => setLiberado(true)} />;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onStart={() => setAberto(principal)} />

      <main id="materiais" className="mx-auto max-w-7xl pb-4">
        {FILEIRAS.map((f) => (
          <Row key={f.titulo} titulo={f.titulo} itens={f.itens} onOpen={setAberto} />
        ))}
      </main>

      <Footer />
      <Modal material={aberto} onClose={() => setAberto(null)} />
    </div>
  );
}
