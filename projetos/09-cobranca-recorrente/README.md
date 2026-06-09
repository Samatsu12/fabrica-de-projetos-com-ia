# Projeto 09 — Controle de Cobrança Recorrente

## Para quem serve
Quem recebe mensalidade ou pagamento repetido: academias, escolas, assinaturas, prestadores
com contrato mensal, condomínios, planos.

## A dor
Esquece de cobrar, perde o controle de quem pagou e quem está atrasado, e a inadimplência
cresce sem ninguém perceber.

## Primeira versão útil
- Cadastro de cliente (nome, valor, dia do vencimento, WhatsApp)
- Visão do mês: quem está em dia, a vencer e atrasado
- Marcar pagamento como recebido
- Botão "Cobrar no WhatsApp" com mensagem pronta e educada
- Total a receber e total recebido no mês

## Fora do escopo agora
Cobrança automática via gateway, boleto/Pix automático, conciliação bancária. (Quando quiser
cobrança automática de verdade, integre Stripe/Mercado Pago via MCP — veja `MCP-RECOMENDADOS.md`.)

## Passo a passo
1. Copie o [`CLAUDE.md`](CLAUDE.md) para a pasta do projeto.
2. Cole o prompt principal. Aprove o modelo de cliente e a visão do mês.
3. `/qa`: cadastrar, marcar pago, ver status (em dia/atrasado), botão de WhatsApp.
4. `/seguranca` (dados financeiros/pessoais) → `/deploy-check`.

## Prompt principal
```
Quero criar um controle de cobrança recorrente (mensalidades).

A primeira versão precisa ter: cadastro de cliente (nome, valor mensal, dia de vencimento,
WhatsApp); uma visão do mês mostrando quem está em dia, a vencer e atrasado; marcar pagamento
como recebido; botão "Cobrar no WhatsApp" com uma mensagem educada já pronta; e os totais a
receber e recebido no mês. Dados salvos no navegador (localStorage).

Stack simples: HTML + CSS + JavaScript puro. Sem gateway de pagamento, boleto ou conciliação
nesta versão. Datas e valores em padrão brasileiro.

Antes de criar, me mostre o modelo do cliente e como vou enxergar os atrasados.
```

## Como vender
"Você para de esquecer cobrança e enxerga na hora quem está atrasado — a inadimplência cai."
**Preço de referência:** R$ 597–1.500; ótimo para recorrência de manutenção.
