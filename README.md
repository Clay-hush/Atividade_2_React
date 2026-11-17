# Atividade 2 — Biblioteca UI com React e Tailwind CSS

Mini biblioteca de componentes reutilizáveis feita com React, Vite e Tailwind CSS. O projeto demonstra como encapsular estilos em componentes e controlar variações por props.

## Repositório

[Clay-hush/Atividade_2_React](https://github.com/Clay-hush/Atividade_2_React)

## O que foi desenvolvido

- **Parte 1 — Configuração:** Tailwind CSS 3 configurado com Vite e PostCSS. O `tailwind.config.js` monitora os arquivos da pasta `src`; as diretivas do Tailwind estão em `src/index.css`, importado por `src/main.jsx`.
- **Parte 2 — Biblioteca UI:** `Button` (`primary`, `secondary`, `danger`, `ghost`), `Badge` (`neutral`, `success`, `warning`, `error`, `info`), `Input` (rótulo, dica e estado de erro) e `Card` com os subcomponentes `CardHeader`, `CardContent` e `CardFooter`.
- **Parte 3 — Desafio:** `Alert` aceita as variantes `success`, `error` e `warning`, com cores e ícones correspondentes. Também aceita título e callback `onClose`.
- **Parte 4 — Reflexão:** vantagens e desvantagens do Tailwind CSS estão respondidas abaixo e ilustradas na aplicação.

## Como executar

Requisitos: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Para gerar e visualizar a versão de produção:

```bash
npm run build
npm run preview
```

## Exemplos de uso

```jsx
<Button variant="danger">Excluir</Button>
<Badge variant="success">Publicado</Badge>
<Input label="E-mail" type="email" hint="Usaremos para contato." />
<Alert variant="warning">Revise os dados antes de continuar.</Alert>

<Card>
  <CardHeader>Título</CardHeader>
  <CardContent>Conteúdo do cartão</CardContent>
  <CardFooter>Ações</CardFooter>
</Card>
```

## Reflexão

**Quais as vantagens e desvantagens de usar Tailwind CSS em vez de arquivos CSS tradicionais na componentização do React?**

O Tailwind mantém as decisões de estilo próximas ao JSX, acelera a criação de interfaces e facilita a consistência visual com tokens e utilitários compartilhados. Em componentes React, isso torna as variações mais explícitas e reduz a necessidade de criar e nomear regras CSS para cada elemento. Os estados responsivos e interativos também ficam visíveis no próprio componente.

Por outro lado, listas extensas de classes podem deixar o JSX mais difícil de ler. Também é necessário aprender a nomenclatura do Tailwind e ajustar o tema do projeto. Regras muito específicas, animações ou estilos com muitos seletores podem ser mais claros em CSS tradicional. Além disso, classes montadas dinamicamente, como `bg-${color}-500`, podem não ser encontradas durante a geração do CSS. Mapas com nomes de classes completos, como os usados nesta biblioteca, evitam esse problema.

## Estrutura

```text
src/
├── components/
│   ├── Alert.jsx
│   ├── Badge.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Input.jsx
├── App.jsx
├── index.css
└── main.jsx
```
