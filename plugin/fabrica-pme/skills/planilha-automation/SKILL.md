---
name: planilha-automation
description: Transforma arquivos CSV ou Excel em relatórios e cálculos automáticos. Use quando o usuário tiver uma planilha de vendas/financeiro/leads e quiser "automatizar", "gerar relatório", "calcular totais/ticket médio", "limpar dados" ou "transformar planilha em ferramenta".
---

# Planilha Automation — da planilha ao relatório

Transforma uma planilha (CSV/Excel) em **cálculos e relatórios automáticos**. Esse é um dos
projetos mais vendáveis: quase todo pequeno negócio vive de planilha manual.

## Quando usar
- O usuário tem um CSV/Excel e faz contas na mão toda vez.
- Pedidos: "relatório de vendas", "ticket médio", "produtos mais vendidos", "limpar base".

## Procedimento

### 1. Entenda os dados primeiro
- Peça o arquivo (ou uma amostra) e **leia o cabeçalho**. Confirme o que cada coluna
  significa antes de calcular qualquer coisa.
- Identifique a "pergunta de negócio" que o relatório deve responder.

### 2. Defina as métricas com o usuário
Exemplos comuns: faturamento total, ticket médio, nº de pedidos, produtos mais vendidos,
clientes recorrentes, faturamento por mês/vendedor, % de crescimento.

### 3. Construa o script
- **Stack:** Python com `pandas` (robusto para planilhas). Se o usuário não tiver Python,
  ofereça a alternativa de uma página HTML que lê o CSV no navegador.
- Estrutura: ler o arquivo → limpar (datas, números, vazios) → calcular → **gerar saída**.
- **Saída amigável:** um relatório em HTML (com tabelas e, se ajudar, um gráfico simples)
  ou um novo Excel formatado. Nada de jogar números crus no terminal.
- Trate erros comuns: separador `;` vs `,`, vírgula decimal brasileira, encoding.

### 4. Valide os números
**Confira pelo menos um total manualmente** contra a planilha original antes de entregar.
Mostre ao usuário como o número foi calculado.

### 5. Torne repetível
Deixe claro como rodar de novo com um arquivo novo (ex.: "troque o arquivo `vendas.csv` e
rode de novo"). Esse é o valor: virar uma ferramenta, não um cálculo único.

## Cuidados
- **Não invente colunas** que não existem na planilha.
- Dados financeiros: confira moeda e casas decimais.
- Se a base tiver dados pessoais, lembre o usuário sobre cuidado/LGPD.
