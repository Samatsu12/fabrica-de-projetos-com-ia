# Projeto 10 — Página de Captura para Infoproduto

## Para quem serve
Quem vai lançar ou divulgar um infoproduto, ebook, aula gratuita, webinar, lista de espera,
isca digital. (Inclusive você, para vender o próprio guia Fábrica de Projetos.)

## A dor
Tráfego chega, mas não há onde capturar o contato. Sem lista, não há para quem vender depois.

## Primeira versão útil
- Dobra com promessa forte da isca (o que a pessoa ganha ao se inscrever)
- Formulário simples (nome + e-mail e/ou WhatsApp)
- Bloco de benefícios e prova
- Página de obrigado com próximo passo (entrar no grupo, baixar, agendar)
- Integração simples para guardar os leads

## Fora do escopo agora
Área de membros, checkout completo, automação de e-mail avançada (isso é fase 2).

## Passo a passo
1. Copie o [`CLAUDE.md`](CLAUDE.md), defina a isca e a promessa.
2. Rode `/landing` (a skill cobre captura também). Aprove a estrutura.
3. Decida onde guardar os leads (ver opções no prompt). Copy com **copywriter**.
4. `/qa` (envio do formulário e página de obrigado) → `/seguranca` → `/deploy-check`.

## Prompt principal
```
Quero criar uma página de captura para um infoproduto/isca digital.

Isca oferecida: [ex.: ebook grátis, aula gratuita, lista de espera]
Promessa principal: [o que a pessoa ganha]
Público e dor: [...]

A primeira versão precisa ter: dobra com promessa forte e formulário (nome + e-mail e/ou
WhatsApp); bloco de benefícios; prova/credibilidade; e uma página de obrigado com o próximo
passo. Para guardar os leads, me explique de forma simples 2 opções: (1) enviar para uma
planilha do Google via formulário, ou (2) salvar com um serviço gratuito de formulários — e
recomende a mais fácil para iniciante.

Stack simples: HTML + CSS + JavaScript puro, mobile-first. Copy persuasiva mas honesta, sem
promessa exagerada.

Antes de criar, me mostre a estrutura da página e como os leads serão capturados.
```

## Como vender
"Cada real de anúncio vira contato na sua lista, em vez de sumir." **Preço de referência:**
R$ 497–1.200; combine com a skill `/ads` para vender o pacote página + criativos.
