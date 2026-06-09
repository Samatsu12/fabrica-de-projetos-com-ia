# Catálogo Online — [Nome da Loja]

## Objetivo
Mostrar produtos organizados e facilitar pedido pelo WhatsApp, sem loja virtual completa.

## Público
Clientes que hoje pedem foto no WhatsApp; veem no celular e querem pedir rápido.

## Stack
`index.html` + `app.js` + `produtos.json` (nome, preço, foto, descrição, categoria).
Mobile-first.

## Funcionalidades (v1)
- Grade de produtos (foto, nome, preço)
- Filtro por categoria + busca
- Botão "Pedir no WhatsApp" que monta a mensagem com o item
- (Opcional) carrinho simples juntando itens

## Fora do escopo
Pagamento online, login, estoque integrado, frete.

## Regras
- Fotos otimizadas (não pesar a página).
- Preços/itens fáceis de atualizar (editar `produtos.json`).
- Visual caprichado (`/frontend`). WhatsApp: `https://wa.me/55DDDNUMERO?text=...`.

## Dados a preencher
- WhatsApp: [___]
- Lista de produtos em `produtos.json`.

## Critério de sucesso
Cliente acha o produto, vê o preço e pede no WhatsApp em poucos toques.
