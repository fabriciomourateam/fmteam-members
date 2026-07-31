# Área de Membros: Celulite Zero

Projeto novo e independente, no formato Netflix, para entregar os 9 materiais do
Celulite Zero para quem compra na Kiwify. Não tem nenhuma ligação com o repositório
`areademembros` da consultoria: outro projeto, outro deploy, outro acesso.

## Stack

Mesmo padrão do seu outro projeto, sem o que não é necessário aqui:

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- lucide-react (ícones)

Sem Supabase, sem shadcn, sem router. São 9 PDFs estáticos: banco de dados e rotas
seriam peso morto. Se um dia precisar de login real, o Supabase entra sem refatorar
o resto.

## Rodar local

```bash
npm install
npm run dev
```

Abre em `http://localhost:8080`.

## Publicar

```bash
npm run build
```

Sobe a pasta `dist` em qualquer host estático. Na Vercel, o projeto é detectado
automaticamente (framework Vite, build `npm run build`, saída `dist`).

## Código de acesso

A tela de entrada pede um código. O padrão é `CELULITEZERO21`.

Para trocar, crie um arquivo `.env` na raiz:

```
VITE_ACCESS_CODE=SEUCODIGOAQUI
```

**Sobre a segurança disso, sendo honesto:** é uma tranca de porta, não um cofre.
O código fica no JavaScript do navegador, então alguém com conhecimento técnico
consegue lê-lo, e os PDFs ficam em `/materiais`, acessíveis por link direto para
quem descobrir o caminho. Isso segura o compartilhamento casual, que é 95% do
problema real em produto de R$ 37,90, e não segura quem quer piratear de verdade.

Se o produto crescer e isso passar a incomodar, o caminho é Supabase Auth com
e-mail do comprador (webhook da Kiwify criando o usuário) e os PDFs em bucket
privado com URL assinada. Aí sim é cofre.

## Estrutura

```
public/
  materiais/     os 9 PDFs
  img/           capas, hero e logo
src/
  data/materiais.ts     conteúdo, textos e ordem dos cards
  components/Netflix.tsx  navbar, hero, fileiras, cards, modal, gate, rodapé
  App.tsx
```

## Editar o conteúdo

Quase tudo está em `src/data/materiais.ts`. Para trocar um texto, mudar a ordem
dos cards ou adicionar um material novo, mexe só nesse arquivo:

```ts
{
  id: 'novo',
  ordem: 10,
  titulo: 'Nome do material',
  linha: 'Subtítulo curto',
  descricao: 'Texto que aparece no modal.',
  etiqueta: 'Bônus',
  duracao: '5 páginas',
  arquivo: '/materiais/10-novo.pdf',
  capa: '/img/capa-10.jpg',
  icone: BookOpen,
}
```

Depois é só colocar o PDF em `public/materiais` e a capa em `public/img`.

As fileiras da home são montadas em `FILEIRAS`, no fim do mesmo arquivo.

## Próximos passos possíveis

- Trocar o Pack Antissabotagem por áudio real (grava os 10 blocos e coloca um
  `<audio>` no modal, o layout já comporta)
- Marcar material como concluído, com barra de progresso na home
- Página de upsell da consultoria depois do último material
