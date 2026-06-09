# Projeto 03 — Gerador de Orçamento pelo WhatsApp

## Para quem serve
Quem faz orçamento o tempo todo: marceneiro, pintor, montador, frete/mudança, festas,
gráfica, serviços de manutenção, estética, fotografia.

## A dor
Cada orçamento é feito na mão, demora, sai diferente e às vezes com erro de conta. O cliente
espera e esfria.

## Primeira versão útil
- Formulário com os itens/serviços e quantidades
- Cálculo automático do total (com opcionais: desconto, deslocamento)
- Geração de um **resumo do orçamento** pronto para enviar
- Botão que abre o WhatsApp com o orçamento já escrito

## Fora do escopo agora
Emissão de nota fiscal, pagamento, cadastro de clientes, PDF assinado.

## Passo a passo
1. Copie o [`CLAUDE.md`](CLAUDE.md) e preencha sua tabela de preços/serviços.
2. Cole o prompt principal. Aprove a estrutura.
3. `/qa` (testar contas e o link de WhatsApp) → `/seguranca` → `/deploy-check`.

## Prompt principal
```
Quero criar um gerador de orçamento simples para [tipo de serviço].

Como funciona: um formulário onde eu (ou o cliente) escolhe itens/serviços e quantidades; o
sistema calcula o total automaticamente; permite aplicar desconto e taxa de deslocamento;
e gera um resumo do orçamento pronto, com um botão que abre o WhatsApp com esse texto.

Minha tabela de itens e preços é: [liste itens e valores]

Stack simples: HTML + CSS + JavaScript puro, mobile-first. Sem nota fiscal, pagamento ou
cadastro nesta versão. Mostre o cálculo de forma clara e confira a matemática.

Antes de criar os arquivos, me mostre a estrutura da tela e como vou editar os preços depois.
```

## Como vender
"Você manda o orçamento na hora, certinho e com a sua cara, enquanto o concorrente ainda
está fazendo conta." **Preço de referência:** R$ 497–1.200 conforme a complexidade da tabela.
