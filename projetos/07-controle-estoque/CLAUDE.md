# Controle de Estoque — [Nome do Negócio]

## Objetivo
Saber a quantidade de cada produto e ser avisado quando estiver acabando.

## Público
Pessoa não técnica operando no balcão/depósito.

## Stack
`index.html` + `app.js`, dados em `localStorage`. Sem servidor na v1.

## Modelo de dados (produto)
Nome · Quantidade atual · Estoque mínimo · (opcional) categoria.

## Funcionalidades (v1)
- Cadastrar/editar/excluir produto
- Registrar entrada e saída (atualiza quantidade)
- Ver quantidade atual
- **Alerta visual** quando quantidade < mínimo
- Busca/filtro
- Persistir ao recarregar

## Fora do escopo
Código de barras, NF, fornecedores, financeiro, multiusuário.

## Regras
- Não deixar quantidade ficar negativa numa saída maior que o disponível (avisar).
- Tela clara e direta (`/frontend`).

## Critério de sucesso
Cadastrar produtos, atualizar estoque e identificar rápido o que precisa repor.
