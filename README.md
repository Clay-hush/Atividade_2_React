# Atividade 2 Biblioteca UI com React e Tailwind CSS

Mini biblioteca de componentes reutilizáveis feita com React, Vite e Tailwind CSS. O projeto demonstra como encapsular estilos em componentes e controlar variáveis por props.

## Repositório

## O que foi desenvolvido

- **Parte 1 Configuracão:** Tailwind CSS 3 instalado com Vite e PostCSS. O `tailwind.config.js` monitora `./src/**/*.{js,ts,jsx,tsx}`; as diretivas Tailwind estão em `src/index.css`, importado por `src/main.jsx`.
- **Parte 2 Biblioteca UI:** `Button` (`primary`, `secondary`, `danger`, `ghost`), `Badge` (`neutral`, `success`, `warning`, `error`, `info`), `Input` (título, dica e estado de erro) e `Card` com subcomponentes `CardHeader`, `CardContent` e `CardFooter`.
- **Parte 3 Desafio:** `Alert` aceita `success`, `error` e `warning`, com fundo, texto, ícone e papel acessí­vel adequados a variante. Também pode receber título e callback `onClose`.
- **Parte 4 Reflexão:** vantagens e desvantagens do Tailwind CSS estÃ£o respondidas na seÃ§Ã£o abaixo e demonstradas na aplicação.

## Como executar

Requisitos: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Para gerar a versÃ£o de produÃ§Ã£o:

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
  <CardHeader>TÃ­tulo</CardHeader>
  <CardContent>ConteÃºdo do cartÃ£o</CardContent>
  <CardFooter>AÃ§Ãµes</CardFooter>
</Card>
```

## Reflexão

**Quais as vantagens e desvantagens de usar Tailwind CSS em vez de arquivos CSS tradicionais na componentizacão do React?**

O Tailwind mantém as decisões de estilo próximas ao JSX, acelera a criação de interfaces e facilita a consistência visual com tokens e utilitários compartilhados. Em componentes React, isso torna as variações mais explícitas e reduz a necessidade de criar e nomear regras CSS para cada elemento. Os estados responsivos e interativos também ficam visíveis no próprio componente.

Por outro lado, listas extensas de classes podem deixar o JSX mais difí­cil de ler, é necessário aprender a conversão do Tailwind e ajustar o tema do projeto. Regras muito específicas, animações ou estilos com muitos seletores podem ser mais claros em CSS tradicional. Também é preciso evitar classes geradas dinamicamente, como `bg-${color}-500`, pois o Tailwind pode não encontrá-las durante a geração do CSS; mapas de classes completas (como os usados nesta biblioteca) são mais confiáveis.

## Estrutura

```text
src/
â”œâ”€â”€ components/
â”‚   â”œâ”€â”€ Alert.jsx
â”‚   â”œâ”€â”€ Badge.jsx
â”‚   â”œâ”€â”€ Button.jsx
â”‚   â”œâ”€â”€ Card.jsx
â”‚   â””â”€â”€ Input.jsx
â”œâ”€â”€ App.jsx
â”œâ”€â”€ index.css
â””â”€â”€ main.jsx
```


