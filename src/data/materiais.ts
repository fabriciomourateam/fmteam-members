import type { LucideIcon } from 'lucide-react';
import {
  BookOpen, CheckSquare, Dumbbell, UtensilsCrossed, Droplets,
  Waves, Headphones, Moon, ChefHat, Calculator, Target, Beef,
} from 'lucide-react';

export type ProdutoId = 'celuliteZero' | 'sequeGanhando';

export interface Material {
  id: string;
  produto: ProdutoId;
  ordem: number;
  titulo: string;
  linha: string;
  descricao: string;
  etiqueta: string;
  duracao: string;
  arquivo: string;
  capa: string;
  icone: LucideIcon;
}

export interface ProdutoInfo {
  id: ProdutoId;
  nome: string;
  subtitulo: string;
  linkCompra: string;
  preco: string;
  heroCapa: string;
}

export const PRODUTOS: Record<ProdutoId, ProdutoInfo> = {
  celuliteZero: {
    id: 'celuliteZero',
    nome: 'Celulite Zero',
    subtitulo: 'Protocolo de 21 dias para pele mais lisa e firme',
    linkCompra: 'https://pay.kiwify.com.br/ou2TZUQ',
    preco: 'R$ 37,90',
    heroCapa: '/img/hero-cz.jpg',
  },
  sequeGanhando: {
    id: 'sequeGanhando',
    nome: 'Seque Ganhando Massa',
    subtitulo: 'Protocolo de 8 semanas para perder gordura e ganhar músculo',
    linkCompra: 'https://pay.kiwify.com.br/Qrmv2iy',
    preco: 'R$ 47',
    heroCapa: '/img/hero-sgm.jpg',
  },
};

export const MATERIAIS: Material[] = [
  // ===== CELULITE ZERO =====
  { id: 'cz-protocolo', produto: 'celuliteZero', ordem: 1, titulo: 'Protocolo Celulite Zero', linha: 'O protocolo de 21 dias, semana a semana', descricao: 'O material principal. Explica por que creme e drenagem não resolvem, apresenta os 4 pilares e divide os 21 dias em três blocos: destravar, construir e refinar. Comece por aqui.', etiqueta: 'Comece aqui', duracao: '9 páginas', arquivo: '/materiais/01-protocolo-celulite-zero-21d.pdf', capa: '/img/capa-cz-01.jpg', icone: BookOpen },
  { id: 'cz-checklist', produto: 'celuliteZero', ordem: 2, titulo: 'Checklist Diário', linha: '21 dias de execução, um dia por vez', descricao: 'A grade imprimível com as 7 ações de cada dia. É a ferramenta que faz você terminar em vez de parar no dia 10.', etiqueta: 'Essencial', duracao: '6 páginas', arquivo: '/materiais/02-checklist-diario-21d.pdf', capa: '/img/capa-cz-02.jpg', icone: CheckSquare },
  { id: 'cz-treinos', produto: 'celuliteZero', ordem: 3, titulo: 'Combo de Treinos', linha: 'Casa e academia, glúteo e posterior', descricao: 'Treino A e B nas duas versões, com execução explicada e controle de carga.', etiqueta: 'Essencial', duracao: '7 páginas', arquivo: '/materiais/03-combo-treinos.pdf', capa: '/img/capa-cz-03.jpg', icone: Dumbbell },
  { id: 'cz-cardapio', produto: 'celuliteZero', ordem: 4, titulo: 'Cardápio Base', linha: 'Estrutura alimentar sem contar caloria', descricao: 'Listas de troca, estrutura de prato e 3 dias-modelo para copiar.', etiqueta: 'Essencial', duracao: '7 páginas', arquivo: '/materiais/04-cardapio-base.pdf', capa: '/img/capa-cz-04.jpg', icone: UtensilsCrossed },
  { id: 'cz-retencao', produto: 'celuliteZero', ordem: 5, titulo: 'Protocolo Zero Retenção', linha: '7 dias para desinchar', descricao: 'As 6 alavancas do desinchaço, na ordem. É o primeiro resultado visível.', etiqueta: 'Essencial', duracao: '6 páginas', arquivo: '/materiais/05-protocolo-zero-retencao.pdf', capa: '/img/capa-cz-05.jpg', icone: Droplets },
  { id: 'cz-cintura', produto: 'celuliteZero', ordem: 6, titulo: 'Manual Cintura e Core', linha: 'A cinta natural que você não usa', descricao: 'Respiração 360, circuito de core de 12 minutos e mapa dos gatilhos de inchaço.', etiqueta: 'Bônus', duracao: '6 páginas', arquivo: '/materiais/06-manual-cintura-core.pdf', capa: '/img/capa-cz-06.jpg', icone: Waves },
  { id: 'cz-sabotagem', produto: 'celuliteZero', ordem: 7, titulo: 'Pack Antissabotagem', linha: '10 conversas para os dias difíceis', descricao: 'Uma conversa curta para cada situação, indexada por dia e por gatilho.', etiqueta: 'Bônus', duracao: '6 páginas', arquivo: '/materiais/07-pack-antissabotagem.pdf', capa: '/img/capa-cz-07.jpg', icone: Headphones },
  { id: 'cz-sono', produto: 'celuliteZero', ordem: 8, titulo: 'Guia Disposição e Sono', linha: 'O pilar invisível do resultado', descricao: 'Sono ruim retém água, corta a recuperação e aumenta a fome de doce.', etiqueta: 'Bônus', duracao: '6 páginas', arquivo: '/materiais/08-guia-disposicao-sono.pdf', capa: '/img/capa-cz-08.jpg', icone: Moon },
  { id: 'cz-receitas', produto: 'celuliteZero', ordem: 9, titulo: 'Receitas Práticas', linha: 'Comida de verdade, tempo de dia útil', descricao: 'Receitas com proteína de verdade e ingrediente de mercado normal.', etiqueta: 'Bônus', duracao: '7 páginas', arquivo: '/materiais/09-receitas-praticas.pdf', capa: '/img/capa-cz-09.jpg', icone: ChefHat },

  // ===== SEQUE GANHANDO MASSA =====
  { id: 'sgm-protocolo', produto: 'sequeGanhando', ordem: 1, titulo: 'Protocolo Seque Ganhando Massa', linha: 'As 3 condições da recomposição', descricao: 'O material principal. As 3 condições, os blocos de 8 semanas e o ajuste da semana 3. Comece por aqui.', etiqueta: 'Comece aqui', duracao: '12 páginas', arquivo: '/materiais/SGM-01-protocolo-seque-ganhando-massa.pdf', capa: '/img/capa-sgm-01.jpg', icone: BookOpen },
  { id: 'sgm-treino', produto: 'sequeGanhando', ordem: 2, titulo: 'Treino ABCD', linha: 'Programa com planilha de progressão', descricao: 'Quatro treinos, versão academia e casa, com o método de dupla progressão explicado com números.', etiqueta: 'Essencial', duracao: '11 páginas', arquivo: '/materiais/SGM-02-treino-abcd.pdf', capa: '/img/capa-sgm-02.jpg', icone: Dumbbell },
  { id: 'sgm-numeros', produto: 'sequeGanhando', ordem: 3, titulo: 'Seus Números', linha: 'Calorias e proteína já calculados', descricao: 'Tabelas de 50 a 100 kg, leia a linha e anote.', etiqueta: 'Essencial', duracao: '11 páginas', arquivo: '/materiais/SGM-03-seus-numeros.pdf', capa: '/img/capa-sgm-03.jpg', icone: Calculator },
  { id: 'sgm-cardapio', produto: 'sequeGanhando', ordem: 4, titulo: 'Cardápio em 3 Níveis', linha: 'Em gramas e em medida caseira', descricao: 'Com listas de troca para caber na sua rotina e no seu bolso.', etiqueta: 'Essencial', duracao: '11 páginas', arquivo: '/materiais/SGM-04-cardapio-3-niveis.pdf', capa: '/img/capa-sgm-04.jpg', icone: UtensilsCrossed },
  { id: 'sgm-proteina', produto: 'sequeGanhando', ordem: 5, titulo: 'Guia da Proteína', linha: 'Como bater a meta todo dia', descricao: 'Tabela de custo por grama, rotação semanal e preparo de domingo.', etiqueta: 'Essencial', duracao: '9 páginas', arquivo: '/materiais/SGM-05-guia-da-proteina.pdf', capa: '/img/capa-sgm-05.jpg', icone: Beef },
  { id: 'sgm-plato', produto: 'sequeGanhando', ordem: 6, titulo: 'Manual do Platô', linha: 'O que ajustar, quando e em que ordem', descricao: 'Evita o corte agressivo que destrói a recomposição.', etiqueta: 'Bônus', duracao: '7 páginas', arquivo: '/materiais/SGM-06-manual-do-plato.pdf', capa: '/img/capa-sgm-06.jpg', icone: Target },
  { id: 'sgm-sabotagem', produto: 'sequeGanhando', ordem: 7, titulo: 'Pack Antissabotagem', linha: '10 conversas para as 8 semanas', descricao: 'Para os dias em que a balança trava e a cabeça vira contra você.', etiqueta: 'Bônus', duracao: '8 páginas', arquivo: '/materiais/SGM-07-pack-antissabotagem.pdf', capa: '/img/capa-sgm-07.jpg', icone: Headphones },
  { id: 'sgm-sono', produto: 'sequeGanhando', ordem: 8, titulo: 'Recuperação e Sono', linha: 'O fator que decide o resultado', descricao: 'Sono ruim trava construção de músculo e aumenta perda de massa.', etiqueta: 'Bônus', duracao: '7 páginas', arquivo: '/materiais/SGM-08-recuperacao-e-sono.pdf', capa: '/img/capa-sgm-08.jpg', icone: Moon },
  { id: 'sgm-receitas', produto: 'sequeGanhando', ordem: 9, titulo: 'Receitas Proteicas', linha: '15 receitas com macros calculados', descricao: 'Ingrediente de mercado normal e tempo de dia útil.', etiqueta: 'Bônus', duracao: '7 páginas', arquivo: '/materiais/SGM-09-receitas-proteicas.pdf', capa: '/img/capa-sgm-09.jpg', icone: ChefHat },
];

export const WHATSAPP =
  'https://wa.me/+5511914849797?text=Oi%20Fabricio!%20Tenho%20uma%20d%C3%BAvida%20sobre%20os%20materiais.';
