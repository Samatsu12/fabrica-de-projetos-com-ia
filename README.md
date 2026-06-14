# Fábrica de Projetos com IA — Pacote de Execução

Este é o **kit técnico** que acompanha o guia *Fábrica de Projetos com IA*.

Enquanto o PDF ensina o **método** (como pensar, fazer briefing e conduzir a IA),
este pacote entrega as **ferramentas prontas** para você executar de verdade dentro
do **Claude Code** — mesmo sem saber programar.

> A regra continua a mesma do guia: **primeiro a versão mínima que resolve a dor. Depois melhora.**

---

## 📦 O que tem dentro

| Pasta | O que é | Para que serve |
|-------|---------|----------------|
| [`plugin/fabrica-pme/`](plugin/fabrica-pme/) | O **plugin** principal | Instala de uma vez 12 skills, 6 subagents, 8 hooks de segurança e os MCPs recomendados |
| [`prompts/`](prompts/) | Biblioteca de **prompts prontos** | Copiar, adaptar e colar no Claude Code |
| [`templates-claudemd/`](templates-claudemd/) | Modelos de **CLAUDE.md** | O "manual interno" de cada tipo de projeto |
| [`projetos/`](projetos/) | **12 projetos** para pequenos negócios | Briefing + prompts + CLAUDE.md de cada um, pronto para gerar |
| [`projetos/01-landing-page-prestador/referencia/`](projetos/01-landing-page-prestador/referencia/) | **Código de referência** (Projeto 01) | Landing completa e funcional do eletricista — exemplo de qualidade para mostrar ao cliente |
| [`marketing/`](marketing/) | **Landing page + criativos + funil** | Para você vender o infoproduto (ou seus serviços) |
| [`marketing/lead-magnet/10-prompts.html`](marketing/lead-magnet/10-prompts.html) | **Lead magnet** (isca digital) | "10 Prompts Prontos" para capturar e-mail no topo do funil |
| [`projetos/10-pagina-captura-infoproduto/referencia/`](projetos/10-pagina-captura-infoproduto/referencia/) | **Código de referência** (Projeto 10) | Página de captura do lead magnet — formulário + mockup CSS do documento + estado de sucesso |
| [`GUIA-DE-INSTALACAO.md`](GUIA-DE-INSTALACAO.md) | Passo a passo **para leigos** | Do zero: instalar, ativar o plugin e fazer o primeiro projeto |

---

## 🚀 Por onde começar

1. **Nunca usou o Claude Code?** Abra o [Guia de Instalação](GUIA-DE-INSTALACAO.md). Ele assume que você não sabe nada de programação.
2. **Já instalou?** Ative o plugin (veja a seção "Instalar o plugin" no guia) e digite `/brief-pme` no Claude Code para transformar sua primeira ideia em projeto.
3. **Quer ver um exemplo completo?** Vá em [`projetos/01-landing-page-prestador/referencia/`](projetos/01-landing-page-prestador/referencia/) — é uma landing page funcional e estilizada, pronta para adaptar.
4. **Montar o funil de vendas?** Comece pelo [`marketing/lead-magnet/10-prompts.html`](marketing/lead-magnet/10-prompts.html) — abra no navegador, salve como PDF e use como isca digital.

---

## 🧭 O fluxo de trabalho que o pacote automatiza

```
   IDEIA
     │  (skill: product-brief-pme  →  /brief-pme)
     ▼
  BRIEFING  ──────────► CLAUDE.md  (skill: claudemd-generator → /gerar-claudemd)
     │
     ▼
  PRIMEIRA VERSÃO  (subagent: fullstack-builder + skills do projeto)
     │
     ▼
  REVISÃO  ──► copy (copywriter)  ·  visual (ux-ui-designer)  ·  testes (qa-tester)
     │
     ▼
  SEGURANÇA  (skill: security-review  +  hooks automáticos)
     │
     ▼
  PUBLICAR  (skill: deploy-checker → /deploy-check)
     │
     ▼
  VENDER  (skills: meta-ads-copy, case-study-generator + subagent growth-marketer)
```

Cada caixa desse fluxo tem uma ferramenta pronta neste pacote. Você não precisa decorar nada:
o Claude Code sugere a skill certa na hora certa.

---

## ⚠️ Importante (leia uma vez)

- Este material **não substitui sua visão de negócio**. Ele acelera quem sabe explicar o problema.
- Os hooks de segurança ajudam, mas **sempre revise** antes de publicar algo com dados de clientes.
- Os preços sugeridos no marketing são referência de mercado; ajuste à sua realidade.

Bom projeto. O próximo começa com um bom briefing. 🛠️
