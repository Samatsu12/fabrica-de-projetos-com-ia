# Pós-venda e NPS — [Nome do Negócio]

## Objetivo
Medir satisfação (NPS), gerar avaliações dos satisfeitos e interceptar insatisfeitos.

## Público
Cliente respondendo no celular, logo após o atendimento/compra.

## Stack
`index.html` + `app.js`, respostas em `localStorage`. Mobile-first. Gerar QR/link de acesso.

## Funcionalidades (v1)
- Pergunta NPS (0 a 10) + comentário
- Roteamento por faixa:
  - 9-10 → convite para avaliar no Google [link]
  - 7-8 → agradecimento
  - 0-6 → mensagem de cuidado + botão de WhatsApp para resolver
- Painel com respostas e cálculo do NPS/média

## Fora do escopo
Disparo automático, integração com vendas, relatórios avançados.

## Regras
- Tom acolhedor; nunca culpar o cliente.
- LGPD: deixar claro o uso do comentário.

## Dados a preencher
- Link de avaliação no Google: [___]
- WhatsApp de atendimento: [___]

## Critério de sucesso
Coletar notas, direcionar satisfeitos ao Google e insatisfeitos ao atendimento direto.
