import { ArrowDownRight, ArrowRight, ArrowUpRight, Blocks, Code2, Layers3, Sparkles, Zap } from 'lucide-react'
import { useState } from 'react'
import { Alert } from './components/Alert.jsx'
import { Badge } from './components/Badge.jsx'
import { Button } from './components/Button.jsx'
import { Card, CardContent, CardFooter, CardHeader } from './components/Card.jsx'
import { Input } from './components/Input.jsx'

const sectionItems = ['Visão geral', 'Componentes', 'Reflexão']

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="mb-6 flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 font-mono text-xs font-medium text-emerald-800">{number}</span>
      <div>
        <p className="section-label">{eyebrow}</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h2>
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-500">{description}</p>
      </div>
    </div>
  )
}

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showAlert, setShowAlert] = useState(true)

  function handleSubmit(event) {
    event.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-2.5" aria-label="React UI Kit, início">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-white"><Blocks size={17} /></span>
            <span className="text-sm font-bold tracking-tight">folha<span className="text-emerald-700">/ui</span></span>
            <span className="ml-1 hidden rounded-full bg-slate-100 px-2 py-1 font-mono text-[10px] text-slate-500 sm:inline">v1.0</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {sectionItems.map((item, index) => <a key={item} href={['#inicio', '#componentes', '#reflexao'][index]} className="text-xs font-medium text-slate-500 transition hover:text-emerald-800">{item}</a>)}
          </nav>
          <a href="#componentes" className="inline-flex items-center gap-2 rounded-lg bg-ink px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-900">Explorar kit <ArrowRight size={14} /></a>
        </div>
      </header>

      <main>
        <section id="inicio" className="grid-paper relative overflow-hidden border-b border-slate-200/80">
          <div className="pointer-events-none absolute -right-32 -top-44 h-[34rem] w-[34rem] rounded-full bg-emerald-100/70 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-emerald-800 shadow-sm"><Sparkles size={13} /> Exercício guiado · React + Tailwind</div>
              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-.045em] text-ink sm:text-6xl">Peças pequenas.<br /><span className="text-emerald-700">Interfaces melhores.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">Uma biblioteca compacta de componentes React, construída com classes utilitárias e variações que vêm de props.</p>
              <div className="mt-8 flex flex-wrap gap-3"><a href="#componentes"><Button>Ver componentes <ArrowDownRight size={15} /></Button></a><a href="#reflexao"><Button variant="secondary">Ler reflexão</Button></a></div>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500"><span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> React 18</span><span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> Tailwind CSS 3</span><span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-violet-500" /> Vite</span></div>
            </div>
            <Card className="relative mx-auto w-full max-w-lg rotate-[1deg] overflow-hidden">
              <CardHeader className="flex items-center justify-between"><div><p className="section-label">Prévia interativa</p><h2 className="mt-1 text-sm font-semibold">Resumo do projeto</h2></div><Badge variant="success">Tudo pronto</Badge></CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800"><Layers3 size={18} /></div><div className="flex-1"><p className="text-sm font-semibold">Componentes reutilizáveis</p><p className="mt-0.5 text-xs text-slate-500">Estilo consistente, API simples</p></div><ArrowUpRight size={16} className="text-slate-400" /></div>
                <div className="h-px bg-slate-100" />
                <div className="grid grid-cols-3 gap-2"><div className="rounded-xl bg-slate-50 p-3"><p className="font-mono text-[10px] text-slate-400">01 / ação</p><div className="mt-3"><Button size="sm">Button</Button></div></div><div className="rounded-xl bg-slate-50 p-3"><p className="font-mono text-[10px] text-slate-400">02 / estado</p><div className="mt-3"><Badge variant="warning">Badge</Badge></div></div><div className="rounded-xl bg-slate-50 p-3"><p className="font-mono text-[10px] text-slate-400">03 / entrada</p><div className="mt-3"><Code2 size={18} className="text-emerald-700" /></div></div></div>
              </CardContent>
              <CardFooter className="flex items-center justify-between"><span className="text-xs text-slate-500">Composição com Tailwind</span><span className="font-mono text-[10px] text-slate-400">{`<Card />`}</span></CardFooter>
            </Card>
          </div>
          <div className="relative mx-auto flex max-w-7xl items-center justify-between border-t border-slate-200/70 px-5 py-4 text-[10px] font-medium uppercase tracking-[.15em] text-slate-400 sm:px-8"><span>Construído para aprender fazendo</span><span>01 — 04 · biblioteca UI</span></div>
        </section>

        <section id="componentes" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <SectionHeading number="01" eyebrow="Mini projeto · Biblioteca UI" title="Um kit para compor" description="Cada componente recebe props para ajustar aparência e comportamento. Experimente as variações e veja os estados em contexto." />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="demo-panel"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Button</p><p className="mt-1 text-xs text-slate-500">Ações com intenção clara</p></div><span className="code-pill">variant</span></div><div className="flex min-h-28 flex-wrap items-center gap-3 rounded-xl bg-slate-50 p-4"><Button>Primary <ArrowRight size={14} /></Button><Button variant="secondary">Secondary</Button><Button variant="danger">Danger</Button><Button variant="ghost">Ghost</Button></div><p className="mt-4 font-mono text-[11px] text-slate-400">{`<Button variant="danger">Excluir</Button>`}</p></div>
            <div className="demo-panel"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Badge</p><p className="mt-1 text-xs text-slate-500">Rótulos para status e categorias</p></div><span className="code-pill">variant</span></div><div className="flex min-h-28 flex-wrap items-center gap-2 rounded-xl bg-slate-50 p-4"><Badge>Rascunho</Badge><Badge variant="success">Publicado</Badge><Badge variant="warning">Pendente</Badge><Badge variant="error">Falhou</Badge><Badge variant="info">Novo</Badge></div><p className="mt-4 font-mono text-[11px] text-slate-400">{`<Badge variant="success">Publicado</Badge>`}</p></div>

            <div className="demo-panel"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Input</p><p className="mt-1 text-xs text-slate-500">Entrada com rótulo, dica e erro</p></div><span className="code-pill">label · error</span></div><form onSubmit={handleSubmit} className="rounded-xl bg-slate-50 p-4 sm:p-5"><div className="flex flex-col gap-4 sm:flex-row sm:items-end"><Input label="Seu e-mail" name="email" type="email" placeholder="voce@exemplo.com" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false) }} hint="Vamos usar apenas para a demonstração." required /><Button type="submit">Continuar <ArrowRight size={14} /></Button></div>{submitted && <p className="mt-3 text-xs font-medium text-emerald-700">Entrada recebida para {email}.</p>}</form><p className="mt-4 font-mono text-[11px] text-slate-400">{`<Input label="Seu e-mail" hint="..." />`}</p></div>

            <div className="demo-panel"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Card</p><p className="mt-1 text-xs text-slate-500">Superfície composta em subcomponentes</p></div><span className="code-pill">CardHeader · Content · Footer</span></div><Card className="shadow-sm hover:shadow-sm"><CardHeader className="flex items-center justify-between"><div><p className="text-sm font-semibold">Plano essencial</p><p className="mt-1 text-xs text-slate-500">Para projetos que estão começando</p></div><Badge variant="info">Popular</Badge></CardHeader><CardContent><div className="flex items-baseline gap-1"><span className="text-3xl font-semibold tracking-tight">R$ 0</span><span className="text-xs text-slate-500">/ sempre</span></div><p className="mt-2 text-xs text-slate-500">Uma hierarquia visual clara e fácil de adaptar.</p></CardContent><CardFooter className="flex items-center justify-between"><span className="text-xs text-slate-500">Sem cartão de crédito</span><Button size="sm" variant="secondary">Detalhes <ArrowUpRight size={13} /></Button></CardFooter></Card></div>

            <div className="demo-panel lg:col-span-2"><div className="mb-5 flex items-center justify-between"><div><p className="text-sm font-semibold">Alert</p><p className="mt-1 text-xs text-slate-500">O desafio de casa: três variantes, uma API</p></div><span className="code-pill">success · error · warning</span></div><div className="grid gap-3 md:grid-cols-3"><Alert variant="success">Suas alterações foram salvas com sucesso.</Alert><Alert variant="error">Não foi possível concluir a operação. Tente novamente.</Alert><Alert variant="warning" title="Revise os dados">Há campos que precisam da sua atenção.</Alert></div><div className="mt-3">{showAlert && <Alert variant="success" onClose={() => setShowAlert(false)}>Este aviso também pode ser fechado. A interação é controlada pela prop <code className="font-mono text-xs">onClose</code>.</Alert>}{!showAlert && <Button variant="secondary" size="sm" onClick={() => setShowAlert(true)}>Mostrar aviso novamente</Button>}</div><p className="mt-4 font-mono text-[11px] text-slate-400">{`<Alert variant="warning">Revise os dados.</Alert>`}</p></div>
          </div>
        </section>

        <section id="reflexao" className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.75fr_1.25fr]">
            <div><SectionHeading number="02" eyebrow="Reflexão · Para pensar" title="Utilidades ou CSS tradicional?" description="A escolha muda o fluxo de trabalho, a manutenção e a forma como estilos se relacionam com componentes." /></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5"><div className="flex items-center gap-2 text-emerald-800"><Zap size={16} /><h3 className="text-sm font-semibold">Vantagens</h3></div><ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600"><li className="flex gap-2"><span className="text-emerald-700">↗</span><span>Estilos ficam perto do JSX: é mais fácil entender o visual de cada componente.</span></li><li className="flex gap-2"><span className="text-emerald-700">↗</span><span>Utilitários prontos aceleram prototipação e ajudam a manter espaçamento e cores consistentes.</span></li><li className="flex gap-2"><span className="text-emerald-700">↗</span><span>Menos nomes de classes e menos CSS global para manter; estados responsivos ficam explícitos.</span></li></ul></article>
              <article className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5"><div className="flex items-center gap-2 text-amber-900"><ArrowDownRight size={16} /><h3 className="text-sm font-semibold">Desvantagens</h3></div><ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600"><li className="flex gap-2"><span className="text-amber-800">↘</span><span>O JSX pode ficar carregado com listas longas de classes, prejudicando a leitura.</span></li><li className="flex gap-2"><span className="text-amber-800">↘</span><span>É preciso aprender a nomenclatura e configurar o tema para projetos específicos.</span></li><li className="flex gap-2"><span className="text-amber-800">↘</span><span>Estilos muito dinâmicos exigem cuidado: classes montadas em tempo de execução podem não ser detectadas pelo build.</span></li></ul></article>
              <blockquote className="rounded-2xl bg-ink p-5 text-sm leading-relaxed text-white sm:col-span-2">“Tailwind funciona muito bem quando os componentes encapsulam padrões visuais. CSS tradicional ainda pode ser mais legível para regras complexas, animações ou estilos compartilhados que não cabem bem em utilitários.”<footer className="mt-3 font-mono text-[10px] uppercase tracking-wider text-emerald-300">Minha reflexão</footer></blockquote>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8"><div className="flex flex-col justify-between gap-6 rounded-2xl bg-emerald-800 p-6 text-white sm:flex-row sm:items-center sm:p-8"><div><p className="font-mono text-[10px] uppercase tracking-[.16em] text-emerald-200">Próximo passo</p><h2 className="mt-2 text-xl font-semibold tracking-tight">A base está pronta para crescer.</h2><p className="mt-1 text-sm text-emerald-100/80">Componentes pequenos, composição simples e variantes explícitas.</p></div><a href="#inicio" className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-emerald-900 transition hover:bg-emerald-50 sm:self-auto">Voltar ao topo <ArrowUpRight size={14} /></a></div></section>
      </main>
      <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8"><span>Atividade 2 · Biblioteca UI em React</span><span className="font-mono">Feito com React + Tailwind CSS</span></div></footer>
    </div>
  )
}

export default App
