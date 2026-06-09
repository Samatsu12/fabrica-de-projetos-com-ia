# Cobrança Recorrente — [Nome do Negócio]

## Objetivo
Não esquecer nenhuma cobrança e enxergar atrasados na hora.

## Público
Dono/financeiro não técnico, controlando mensalidades.

## Stack
`index.html` + `app.js`, dados em `localStorage`. Para cobrança automática real, integrar
Stripe/Mercado Pago via MCP no futuro.

## Modelo de dados (cliente)
Nome · Valor mensal · Dia de vencimento · WhatsApp · Status do mês (Em dia/A vencer/Atrasado).

## Funcionalidades (v1)
- Cadastrar/editar cliente
- Visão do mês: em dia / a vencer / atrasado
- Marcar pagamento recebido
- Botão "Cobrar no WhatsApp" (mensagem educada pronta)
- Totais: a receber e recebido no mês

## Fora do escopo
Gateway, boleto/Pix automático, conciliação bancária.

## Regras
- Datas e valores em padrão BR.
- Mensagem de cobrança educada (sem constranger o cliente).
- **Dados financeiros e pessoais são sensíveis** — rodar `/seguranca`.

## Critério de sucesso
Ver quem está atrasado, marcar pagos e cobrar pelo WhatsApp sem esforço.
