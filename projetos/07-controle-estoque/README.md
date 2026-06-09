# Projeto 07 — Controle de Estoque Simples

## Para quem serve
Lojas pequenas, oficinas, depósitos, revendas, bares e restaurantes que controlam produtos
numa planilha manual (ou na cabeça).

## A dor
Vende o que não tem, esquece de repor, perde tempo conferindo. Falta um lugar simples para
saber a quantidade e ser avisado quando está acabando.

## Primeira versão útil
- Cadastro de produto (nome, quantidade, estoque mínimo)
- Registrar entrada e saída
- Ver quantidade atual
- Alerta visual de baixo estoque
- Filtro/busca por produto

## Fora do escopo agora
Código de barras, nota fiscal, fornecedores, financeiro, multiusuário.

## Passo a passo
1. Copie o [`CLAUDE.md`](CLAUDE.md) para a pasta do projeto.
2. Cole o prompt principal. Aprove o modelo de produto e a tela.
3. `/qa`: cadastrar, dar entrada/saída, ver alerta de baixo estoque, recarregar e persistir.
4. `/seguranca` → `/deploy-check`.

## Prompt principal
```
Quero criar um controle de estoque simples.

A primeira versão precisa ter: cadastro de produto (nome, quantidade disponível, estoque
mínimo); registrar entrada e saída (atualizando a quantidade); ver a quantidade atual;
destacar visualmente os produtos com estoque abaixo do mínimo; busca/filtro por produto. Os
dados ficam salvos no navegador (localStorage).

Stack mais simples possível: HTML + CSS + JavaScript puro. Sem código de barras, nota fiscal,
fornecedores ou login nesta versão. A tela precisa ser clara para alguém sem conhecimento
técnico.

Antes de criar, me mostre o modelo do produto e como será o alerta de baixo estoque.
```

## Como vender
"Você nunca mais vende um produto que acabou nem é pego de surpresa na reposição."
**Preço de referência:** R$ 497–1.200.
