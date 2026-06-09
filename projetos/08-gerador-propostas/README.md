# Projeto 08 — Gerador de Propostas Comerciais

## Para quem serve
Quem vende serviço ou projeto e precisa mandar proposta: agências, freelancers, consultores,
fornecedores B2B, prestadores que fecham por proposta.

## A dor
Montar proposta no Word demora, fica feia e sai inconsistente. A demora esfria o cliente.

## Primeira versão útil
- Formulário: dados do cliente, escopo, itens/valores, prazo, condições
- Geração de uma **proposta formatada** (página/HTML pronta para apresentar ou imprimir/PDF)
- Cálculo automático do total
- Visual profissional com a sua identidade
- Botão para enviar/compartilhar

## Fora do escopo agora
Assinatura digital, gateway de pagamento, CRM integrado, histórico em nuvem.

## Passo a passo
1. Copie o [`CLAUDE.md`](CLAUDE.md) e descreva seus serviços e modelo de proposta.
2. Cole o prompt principal. Aprove o layout da proposta.
3. `/frontend` para deixar com sua cara → `/qa` (conta e impressão/PDF) → `/deploy-check`.

## Prompt principal
```
Quero criar um gerador de propostas comerciais para [tipo de serviço].

A primeira versão precisa ter: um formulário com dados do cliente, escopo do serviço, itens
com valores, prazo e condições de pagamento; geração de uma proposta formatada e profissional
(em HTML, pronta para apresentar e para imprimir/salvar como PDF); cálculo automático do total;
e a minha identidade visual (logo, cores). Inclua um botão para imprimir/salvar como PDF.

Stack simples: HTML + CSS + JavaScript puro. Sem assinatura digital, pagamento ou cadastro
nesta versão.

Antes de criar, me mostre o layout da proposta e os blocos que ela vai ter.
```

## Como vender
"Você manda uma proposta profissional em minutos, enquanto o concorrente ainda está
formatando no Word." **Preço de referência:** R$ 597–1.500.
