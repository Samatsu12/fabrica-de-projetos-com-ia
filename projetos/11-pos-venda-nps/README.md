# Projeto 11 — Pós-venda e NPS

## Para quem serve
Qualquer negócio que queira saber se o cliente ficou satisfeito e gerar avaliações: clínicas,
lojas, prestadores, restaurantes, e-commerce, serviços recorrentes.

## A dor
Depois da venda, silêncio. Não se sabe quem ficou feliz (e viraria indicação) nem quem ficou
insatisfeito (e vai reclamar publicamente). Some oportunidade de retorno e de prova social.

## Primeira versão útil
- Página de pesquisa: nota de 0 a 10 (NPS) + comentário
- Roteamento inteligente: nota alta (9-10) → convite para avaliar no Google; nota baixa
  (0-6) → canal direto para resolver antes de virar reclamação pública
- Painel simples com as respostas e a média
- Link/QR para enviar ao cliente

## Fora do escopo agora
Disparo automático em massa, integração com sistema de vendas, relatórios avançados.

## Passo a passo
1. Copie o [`CLAUDE.md`](CLAUDE.md) para a pasta do projeto.
2. Cole o prompt principal. Aprove a página e a lógica de roteamento.
3. `/qa`: responder com nota alta e baixa e ver os caminhos; conferir o painel.
4. `/seguranca` → `/deploy-check`. Gere um QR Code para o cliente acessar.

## Prompt principal
```
Quero criar uma pesquisa de pós-venda com NPS.

A primeira versão precisa: uma página que pergunta "de 0 a 10, o quanto você indicaria nosso
[serviço/produto]?" e um campo de comentário; se a nota for 9 ou 10, mostrar um convite para
avaliar no Google [link]; se for 0 a 6, mostrar uma mensagem de cuidado e um botão de
WhatsApp para falar direto comigo; entre 7 e 8, agradecer. Salvar as respostas (localStorage)
e ter um painel simples com a lista de respostas e a média/NPS.

Stack simples: HTML + CSS + JavaScript puro, mobile-first. Tom acolhedor.

Antes de criar, me mostre a tela da pesquisa e a lógica de cada faixa de nota.
```

## Como vender
"Você transforma cliente satisfeito em avaliação no Google e intercepta o insatisfeito antes
de virar reclamação pública." **Preço de referência:** R$ 397–900; recorrência se você
acompanhar os resultados.
