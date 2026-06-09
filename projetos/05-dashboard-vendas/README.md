# Projeto 05 — Dashboard de Vendas (a partir de CSV)

## Para quem serve
Donos e gestores que exportam um relatório de vendas (do sistema, do PDV, de uma planilha) e
querem **enxergar os números** sem montar gráfico na mão toda semana.

## A dor
Os dados existem, mas ficam presos numa planilha enorme. Ninguém olha porque dá trabalho
entender. Decisão fica no "achismo".

## Primeira versão útil
- Importar um CSV de vendas
- Cards de KPI: faturamento, nº de vendas, ticket médio, comparação com período anterior
- Gráfico de evolução (linha) e ranking de produtos (barras)
- Filtro por período

## Fora do escopo agora
Integração automática com o sistema de vendas, login, multiusuário, metas avançadas.

## Passo a passo
1. Tenha um CSV de exemplo. Copie o [`CLAUDE.md`](CLAUDE.md) e descreva as colunas reais.
2. Rode `/dashboard` (ou cole o prompt). Defina os 4–6 KPIs. Aprove o layout.
3. **Confira se os números batem** com a planilha (some um total manualmente).
4. `/qa` (gráficos renderizam, responsivo) → `/deploy-check`.

## Prompt principal
```
Quero criar um dashboard simples de vendas a partir de um arquivo CSV.

As colunas do meu CSV são: [liste: data, produto, valor, vendedor, etc.]

A primeira versão precisa ter: cards com faturamento total, número de vendas, ticket médio e
comparação com o período anterior; um gráfico de linha (evolução no tempo) e um de barras
(produtos mais vendidos); filtro por período.

Stack simples: HTML + CSS + JavaScript puro + Chart.js via CDN. Números em padrão brasileiro
(R$, vírgula decimal). Trate o caso de período sem dados.

Antes de criar, me mostre o layout e confirme comigo de quais colunas vem cada número.
```

## Como vender
"Você passa a olhar 5 números que importam por dia, em vez de uma planilha que ninguém abre."
**Preço de referência:** R$ 597–1.500; vira recorrência se você atualizar/evoluir o painel.
