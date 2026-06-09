# Projeto 02 — Catálogo Online de Produtos

## Para quem serve
Lojas e revendedores que hoje mandam foto de produto solta no WhatsApp: roupas, cosméticos,
acessórios, semijoias, produtos naturais, peças, papelaria.

## A dor
O cliente pede "manda as fotos?" e recebe um monte de imagens sem preço e sem organização.
Dá trabalho, gera confusão e perde venda.

## Primeira versão útil
- Grade de produtos com foto, nome e preço
- Filtro por categoria e busca
- Botão "Pedir no WhatsApp" que já monta a mensagem com o produto
- Produtos fáceis de editar (arquivo `produtos.json`)

## Fora do escopo agora
Pagamento online, login, estoque integrado, cálculo de frete.

## Passo a passo
1. Copie o [`CLAUDE.md`](CLAUDE.md) para a pasta do projeto e preencha.
2. Cole o prompt principal abaixo. Aprove a estrutura.
3. Visual com **ux-ui-designer** / `/frontend`.
4. `/qa` (testar no celular) → `/seguranca` → `/deploy-check`.

## Prompt principal
```
Quero criar um catálogo online simples de produtos para [tipo de loja].

Objetivo: mostrar os produtos organizados e facilitar o pedido pelo WhatsApp.
A primeira versão precisa ter: grade de produtos (foto, nome, preço); filtro por categoria;
busca; botão "Pedir no WhatsApp" que monte a mensagem com o item escolhido. Os produtos
devem ficar em um arquivo produtos.json fácil de editar pelo dono.

Stack simples: HTML + CSS + JavaScript puro, mobile-first. Sem pagamento, login ou estoque
nesta versão. Visual caprichado, fotos otimizadas.

Antes de criar os arquivos, me mostre a estrutura e como vou cadastrar/editar os produtos.
```

## Como vender
"Em vez de mandar 20 fotos no WhatsApp, seu cliente vê tudo organizado, com preço, e pede em
2 toques." **Preço de referência:** R$ 397–897 conforme nº de produtos e capricho visual.
