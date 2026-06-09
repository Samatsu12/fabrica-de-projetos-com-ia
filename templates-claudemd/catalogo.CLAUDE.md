# Catálogo Online — [Nome do Negócio]

## Objetivo
Mostrar os produtos de forma organizada e facilitar o pedido pelo WhatsApp, sem precisar de
loja virtual completa.

## Público
Clientes que hoje pedem foto de produto no WhatsApp. Querem ver tudo e pedir rápido.

## Stack
`index.html` + `app.js`. Produtos em um arquivo `produtos.json` fácil de editar (nome, preço,
foto, descrição, categoria). Pedido via link de WhatsApp com itens escolhidos.

## Funcionalidades (primeira versão)
- Lista/grade de produtos com foto, nome, preço.
- Filtro por categoria e busca.
- Botão "Pedir no WhatsApp" que monta a mensagem com o item.
- (Opcional) Carrinho simples que junta vários itens na mensagem.

## O que NÃO entra agora
Pagamento online, login, controle de estoque integrado, frete calculado. Depois.

## Regras
- Mobile-first (cliente vê no celular).
- Fotos otimizadas (não pesar a página).
- Preços e itens fáceis de atualizar pelo dono (editar `produtos.json`).
- Visual caprichado (skill `frontend-pme`).

## Critério de sucesso
O cliente acha o produto, entende o preço e pede no WhatsApp em poucos toques.

## Dados a preencher
- Número de WhatsApp: [___]
- Lista de produtos em `produtos.json`.
