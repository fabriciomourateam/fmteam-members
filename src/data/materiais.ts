import type { LucideIcon } from 'lucide-react';
import {
  BookOpen, CheckSquare, Dumbbell, UtensilsCrossed, Droplets,
  Waves, Headphones, Moon, ChefHat,
} from 'lucide-react';

export interface Material {
  id: string;
  ordem: number;
  titulo: string;
  linha: string;
  descricao: string;
  etiqueta: 'Comece aqui' | 'Essencial' | 'Bônus';
  duracao: string;
  arquivo: string;   // caminho do PDF em /public/materiais
  capa: string;      // caminho da capa em /public/img
  icone: LucideIcon;
}

export const MATERIAIS: Material[] = [
  {
    id: 'protocolo',
    ordem: 1,
    titulo: 'Protocolo Celulite Zero',
    linha: 'O protocolo de 21 dias, semana a semana',
    descricao:
      'O material principal. Explica por que creme e drenagem não resolvem, apresenta os 4 pilares e divide os 21 dias em três blocos: destravar, construir e refinar. Comece por aqui, antes de qualquer outro arquivo.',
    etiqueta: 'Comece aqui',
    duracao: '9 páginas',
    arquivo: '/materiais/01-protocolo-celulite-zero-21d.pdf',
    capa: '/img/capa-01.jpg',
    icone: BookOpen,
  },
  {
    id: 'checklist',
    ordem: 2,
    titulo: 'Checklist Diário',
    linha: '21 dias de execução, um dia por vez',
    descricao:
      'A grade imprimível com as 7 ações de cada dia. É a ferramenta que faz você terminar em vez de parar no dia 10. Imprima e deixe na geladeira ou no espelho.',
    etiqueta: 'Essencial',
    duracao: '6 páginas',
    arquivo: '/materiais/02-checklist-diario-21d.pdf',
    capa: '/img/capa-02.jpg',
    icone: CheckSquare,
  },
  {
    id: 'treinos',
    ordem: 3,
    titulo: 'Combo de Treinos',
    linha: 'Casa e academia, glúteo e posterior',
    descricao:
      'Treino A e Treino B nas duas versões, com execução explicada exercício por exercício e controle de carga. É o pilar 2, o que preenche por baixo e muda mais o aspecto da pele.',
    etiqueta: 'Essencial',
    duracao: '7 páginas',
    arquivo: '/materiais/03-combo-treinos.pdf',
    capa: '/img/capa-03.jpg',
    icone: Dumbbell,
  },
  {
    id: 'cardapio',
    ordem: 4,
    titulo: 'Cardápio Base',
    linha: 'Estrutura alimentar sem contar caloria',
    descricao:
      'Listas de troca, estrutura de prato e três dias-modelo para copiar. Serve para montar seus próprios dias com o que você já come, sem comida cara e sem planilha.',
    etiqueta: 'Essencial',
    duracao: '7 páginas',
    arquivo: '/materiais/04-cardapio-base.pdf',
    capa: '/img/capa-04.jpg',
    icone: UtensilsCrossed,
  },
  {
    id: 'retencao',
    ordem: 5,
    titulo: 'Protocolo Zero Retenção',
    linha: '7 dias para desinchar',
    descricao:
      'As 6 alavancas do desinchaço na ordem certa. É o pilar mais rápido do protocolo e o que entrega o primeiro resultado visível, entre o quinto e o sétimo dia.',
    etiqueta: 'Essencial',
    duracao: '6 páginas',
    arquivo: '/materiais/05-protocolo-zero-retencao.pdf',
    capa: '/img/capa-05.jpg',
    icone: Droplets,
  },
  {
    id: 'cintura',
    ordem: 6,
    titulo: 'Manual Cintura e Core',
    linha: 'A cinta natural que você não usa',
    descricao:
      'A respiração 360, o circuito de core de 12 minutos e o mapa dos gatilhos de inchaço abdominal, com o teste de 7 dias para descobrir o seu.',
    etiqueta: 'Bônus',
    duracao: '6 páginas',
    arquivo: '/materiais/06-manual-cintura-core.pdf',
    capa: '/img/capa-06.jpg',
    icone: Waves,
  },
  {
    id: 'antissabotagem',
    ordem: 7,
    titulo: 'Pack Antissabotagem',
    linha: '10 conversas para os dias difíceis',
    descricao:
      'Uma conversa curta para cada situação: sem vontade de treinar, achando que não adianta, depois de sair da linha, no dia 10. Indexado por situação, abra o que corresponde ao seu dia.',
    etiqueta: 'Bônus',
    duracao: '6 páginas',
    arquivo: '/materiais/07-pack-antissabotagem.pdf',
    capa: '/img/capa-07.jpg',
    icone: Headphones,
  },
  {
    id: 'sono',
    ordem: 8,
    titulo: 'Guia Disposição e Sono',
    linha: 'O pilar invisível do resultado',
    descricao:
      'Sono ruim retém água, corta a recuperação do treino e aumenta a fome de doce à noite. Aqui está o protocolo para consertar isso sem depender de nada além de rotina.',
    etiqueta: 'Bônus',
    duracao: '6 páginas',
    arquivo: '/materiais/08-guia-disposicao-sono.pdf',
    capa: '/img/capa-08.jpg',
    icone: Moon,
  },
  {
    id: 'receitas',
    ordem: 9,
    titulo: 'Receitas Práticas',
    linha: 'Comida de verdade, tempo de dia útil',
    descricao:
      'Receitas com proteína de verdade e ingrediente de mercado normal, para resolver a objeção mais comum de toda dieta: não saber o que fazer para comer.',
    etiqueta: 'Bônus',
    duracao: '7 páginas',
    arquivo: '/materiais/09-receitas-praticas.pdf',
    capa: '/img/capa-09.jpg',
    icone: ChefHat,
  },
];

export const FILEIRAS: { titulo: string; itens: Material[] }[] = [
  { titulo: 'Comece por aqui', itens: MATERIAIS.filter((m) => m.ordem <= 2) },
  { titulo: 'O protocolo completo', itens: MATERIAIS.filter((m) => m.etiqueta === 'Essencial') },
  { titulo: 'Seus bônus', itens: MATERIAIS.filter((m) => m.etiqueta === 'Bônus') },
];

export const WHATSAPP =
  'https://wa.me/+5511914849797?text=Oi%20Fabricio!%20Fiz%20o%20Celulite%20Zero%20e%20quero%20um%20acompanhamento%20individual.';
