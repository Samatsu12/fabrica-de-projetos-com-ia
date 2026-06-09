# Dashboard de [Vendas/Atendimento] — [Nome do Negócio]

## Objetivo
Mostrar, em um lugar só, os poucos números que importam para [negócio] tomar decisão.

## Público
Dono/gestor não técnico. Precisa bater o olho e entender.

## Stack
`index.html` + `app.js` + Chart.js (via CDN) para gráficos. Dados a partir de um CSV
exportado [de onde]. Sem build, sem servidor.

## KPIs (4 a 6 que importam)
1. [Ex.: Faturamento do mês]
2. [Ex.: Nº de vendas]
3. [Ex.: Ticket médio]
4. [Ex.: Comparação com mês anterior]

## Gráficos
- 1 gráfico de linha: evolução no tempo.
- 1 gráfico de barras: ranking (ex.: produtos mais vendidos).

## Regras
- Números em padrão BR (R$, milhar com ponto, decimal com vírgula).
- Tratar estado vazio ("sem dados no período").
- **Conferir se os números batem** com a planilha de origem.
- Não poluir: cortar gráfico que ninguém vai olhar.

## Critério de sucesso
Em 10 segundos, a pessoa entende como o negócio está indo neste período.

## Fonte de dados
[Como o CSV é gerado/exportado e com que frequência será atualizado.]
