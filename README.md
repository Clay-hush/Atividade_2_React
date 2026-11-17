# Atividade 2 â€” Biblioteca UI com React e Tailwind CSS

Mini biblioteca de componentes reutilizÃ¡veis feita com React, Vite e Tailwind CSS. O projeto demonstra como encapsular estilos em componentes e controlar variaÃ§Ãµes por props.

## RepositÃ³rio

> Link do GitHub: serÃ¡ preenchido apÃ³s a publicaÃ§Ã£o do repositÃ³rio.

## O que foi desenvolvido

- **Parte 1 â€” ConfiguraÃ§Ã£o:** Tailwind CSS 3 instalado com Vite e PostCSS. O `tailwind.config.js` monitora `./src/**/*.{js,ts,jsx,tsx}`; as diretivas Tailwind estÃ£o em `src/index.css`, importado por `src/main.jsx`.
- **Parte 2 â€” Biblioteca UI:** `Button` (`primary`, `secondary`, `danger`, `ghost`), `Badge` (`neutral`, `success`, `warning`, `error`, `info`), `Input` (rÃ³tulo, dica e estado de erro) e `Card` com subcomponentes `CardHeader`, `CardContent` e `CardFooter`.
- **Parte 3 â€” Desafio:** `Alert` aceita `success`, `error` e `warning`, com fundo, texto, Ã­cone e papel acessÃ­vel adequados Ã  variante. TambÃ©m pode receber tÃ­tulo e callback `onClose`.
- **Parte 4 â€” ReflexÃ£o:** vantagens e desvantagens do Tailwind CSS estÃ£o respondidas na seÃ§Ã£o abaixo e demonstradas na aplicaÃ§Ã£o.

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

## ReflexÃ£o

**Quais as vantagens e desvantagens de usar Tailwind CSS em vez de arquivos CSS tradicionais na componentizaÃ§Ã£o do React?**

O Tailwind mantÃ©m as decisÃµes de estilo prÃ³ximas ao JSX, acelera a criaÃ§Ã£o de interfaces e facilita a consistÃªncia visual com tokens e utilitÃ¡rios compartilhados. Em componentes React, isso torna as variaÃ§Ãµes mais explÃ­citas e reduz a necessidade de criar e nomear regras CSS para cada elemento. Os estados responsivos e interativos tambÃ©m ficam visÃ­veis no prÃ³prio componente.

Por outro lado, listas extensas de classes podem deixar o JSX mais difÃ­cil de ler, e Ã© necessÃ¡rio aprender a convenÃ§Ã£o do Tailwind e ajustar o tema do projeto. Regras muito especÃ­ficas, animaÃ§Ãµes ou estilos com muitos seletores podem ser mais claros em CSS tradicional. TambÃ©m Ã© preciso evitar classes geradas dinamicamente, como `bg-${color}-500`, pois o Tailwind pode nÃ£o encontrÃ¡-las durante a geraÃ§Ã£o do CSS; mapas de classes completas (como os usados nesta biblioteca) sÃ£o mais confiÃ¡veis.

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


