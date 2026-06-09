# Cardápio Digital — [Nome do Estabelecimento]

## Objetivo
Cliente monta o pedido sozinho e envia certinho pelo WhatsApp; menos erro, mais pedido.

## Público
Cliente com fome, no celular, querendo pedir rápido.

## Stack
`index.html` + `app.js` + `cardapio.json` (categoria, nome, descrição, preço, foto).
Mobile-first, visual apetitoso.

## Funcionalidades (v1)
- Cardápio por categorias com foto/descrição/preço
- Carrinho (itens + quantidades)
- Observação por item ("sem cebola")
- Cálculo do total
- Botão "Pedir no WhatsApp" (itens + qtd + obs + total)
- Opcional: endereço, pagamento, troco

## Fora do escopo
Pagamento online, PDV/impressora, mesas, cadastro de cliente.

## Regras
- Fotos otimizadas e apetitosas.
- Preços/itens fáceis de atualizar (editar `cardapio.json`).
- WhatsApp: `https://wa.me/55DDDNUMERO?text=...` (mensagem montada pelo carrinho).

## Dados a preencher
- WhatsApp do estabelecimento: [___]
- Cardápio em `cardapio.json`.

## Critério de sucesso
Cliente monta o pedido e o estabelecimento recebe a mensagem completa e correta.
