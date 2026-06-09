---
name: dashboard-bi
description: Cria um dashboard simples com indicadores (KPIs) e gráficos a partir de dados de vendas/atendimento/financeiro. Use quando o usuário pedir "dashboard", "painel de vendas", "indicadores", "acompanhar números do negócio" ou "gráfico de desempenho".
---

# Dashboard BI — painel de indicadores simples

Cria um **painel visual** que mostra o que está acontecendo no negócio. Simples: poucos
indicadores que importam, bem apresentados.

## Quando usar
- O usuário quer "ver os números" do negócio num lugar só.
- Tem dados (planilha, CSV ou banco) e quer acompanhamento visual.

## Princípio
**Menos é mais.** 4 a 6 indicadores certos valem mais que 20 gráficos confusos. Escolha as
métricas que mudam decisão.

## Procedimento

### 1. Defina os KPIs com o usuário
Pergunte: "se você só pudesse olhar 4 números por dia, quais seriam?" Exemplos:
faturamento do mês, nº de vendas, ticket médio, leads novos, taxa de conversão,
comparação com o mês anterior.

### 2. Identifique a fonte de dados
- CSV/Excel exportado → use também a skill `planilha-automation` para preparar os dados.
- Banco (Supabase/Postgres) → leitura via MCP de Postgres.

### 3. Apresente o layout ANTES de codar
- Linha de **cards de KPI** no topo (número grande + comparação com período anterior).
- 1 a 3 **gráficos** abaixo (linha para evolução no tempo, barras para ranking).
- Filtro por período, se fizer sentido.
- Peça aprovação.

### 4. Construa
- **Stack simples:** `index.html` + `app.js` + uma lib de gráfico leve (ex.: Chart.js via
  CDN). Visual com a skill `frontend-pme`.
- Números formatados em padrão BR (R$, milhar com ponto, decimal com vírgula).
- Estados vazios tratados ("sem dados no período").

### 5. Verifique
Use `playwright-qa`: os gráficos renderizam, os números batem com a fonte, responsivo no
celular. Capture screenshot para o usuário.

## Cuidados
- **Confira se os números batem** com a fonte original (some um total manualmente).
- Não polua: corte gráfico que ninguém vai olhar.
- Rótulos claros — quem vê o painel não é técnico.
