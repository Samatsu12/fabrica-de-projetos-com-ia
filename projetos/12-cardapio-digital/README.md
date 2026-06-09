# Projeto 12 — Cardápio Digital com Pedido Rápido

## Para quem serve
Restaurantes, lanchonetes, pizzarias, hamburguerias, açaí, docerias, food trucks, marmitaria.

## A dor
Cardápio em PDF que trava no celular, foto antiga no Instagram, e pedido confuso no WhatsApp
("quero 2 daquele... não, o outro"). Erro de pedido e demora.

## Primeira versão útil
- Cardápio por categorias (entradas, pratos, bebidas, sobremesas) com foto, nome, descrição, preço
- Carrinho: cliente escolhe itens e quantidades
- Observações por item (ex.: "sem cebola")
- Botão "Fazer pedido no WhatsApp" que monta a mensagem com itens, quantidades e total
- (Opcional) campos de entrega: endereço, forma de pagamento, troco

## Fora do escopo agora
Pagamento online, integração com impressora/PDV, gestão de mesas, cadastro de cliente.

## Passo a passo
1. Copie o [`CLAUDE.md`](CLAUDE.md) e monte o cardápio em `cardapio.json`.
2. Cole o prompt principal. Aprove a estrutura e o fluxo do carrinho.
3. `/frontend` (precisa dar água na boca) → `/qa` (carrinho, total, WhatsApp) → `/deploy-check`.
4. Gere um QR Code para colocar na mesa/vitrine.

## Prompt principal
```
Quero criar um cardápio digital com pedido pelo WhatsApp para [tipo de estabelecimento].

A primeira versão precisa ter: cardápio por categorias com foto, nome, descrição e preço;
carrinho onde o cliente escolhe itens e quantidades; campo de observação por item; cálculo do
total; e um botão "Fazer pedido no WhatsApp" que monte a mensagem com itens, quantidades,
observações e total. Inclua campos opcionais de entrega (endereço, pagamento, troco). Os itens
ficam em um arquivo cardapio.json fácil de editar.

Stack simples: HTML + CSS + JavaScript puro, mobile-first, visual apetitoso. Sem pagamento
online ou integração com PDV nesta versão.

Antes de criar, me mostre a estrutura do cardápio e como o pedido chega no WhatsApp.
```

## Como vender
"Seu cliente vê as fotos, monta o pedido sozinho e te manda tudo certinho no WhatsApp — menos
erro, mais pedido." **Preço de referência:** R$ 497–1.200; recorrência para atualizar cardápio/preços.
