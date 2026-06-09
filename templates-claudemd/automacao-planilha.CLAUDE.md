# Automação de Planilha — [Nome do Relatório]

## Objetivo
Transformar a planilha [vendas/financeiro/leads] em um relatório automático, para parar de
fazer as contas na mão.

## Público
Pessoa não técnica que hoje calcula manualmente. Quer rodar e receber o resultado pronto.

## Stack
Python + pandas. Entrada: arquivo `[nome].csv` (ou `.xlsx`). Saída: relatório em HTML
formatado (tabelas + gráfico simples). (Alternativa sem Python: página HTML que lê o CSV.)

## Colunas da planilha de entrada
[Liste o cabeçalho real e o que cada coluna significa. NÃO inventar colunas.]

## Métricas a calcular
- [Ex.: Faturamento total]
- [Ex.: Ticket médio]
- [Ex.: Produtos mais vendidos]
- [Ex.: Faturamento por mês]

## Regras
- Tratar formato BR: separador `;`, vírgula decimal, encoding.
- Tratar valores vazios e datas inválidas sem quebrar.
- **Validar pelo menos um total manualmente** contra a planilha antes de confiar.
- Deixar claro como rodar de novo com um arquivo novo (virar ferramenta, não cálculo único).

## Critério de sucesso
A pessoa troca o arquivo de entrada, roda um comando e recebe o relatório correto.

## Segurança / LGPD
Se houver dados pessoais, não versionar a planilha; coletar/guardar só o necessário.
