---
name: playwright-qa
description: Testa a aplicação web no navegador de verdade — carregamento, cliques, formulários, responsividade — e relata problemas. Use depois de criar ou alterar qualquer página/app, ou quando o usuário pedir para "testar", "verificar se funciona", "checar no celular" ou antes de publicar.
---

# Playwright QA — testar no navegador de verdade

Sua função é **verificar que a aplicação funciona**, sem pedir para o usuário testar
manualmente. Você abre, clica, preenche e observa.

## Quando usar
- Logo após criar/alterar uma página ou app.
- Antes de `/deploy-check`.
- Quando o usuário relata "não está funcionando".

## Ferramentas
Prefira os **preview tools** nativos do Claude Code (`preview_start`, `preview_snapshot`,
`preview_click`, `preview_fill`, `preview_screenshot`, `preview_console_logs`,
`preview_resize`). Para apps locais, a skill `webapp-testing` (Playwright) também serve.

## Procedimento

### 1. Suba a aplicação
- Página estática (`index.html`): abra direto no preview.
- App com servidor: inicie o servidor de desenvolvimento, depois abra o preview.

### 2. Rode a checagem (pule o que não se aplica)
1. **Carrega sem erro?** Veja o console (`preview_console_logs`) — erros em vermelho são
   problema.
2. **Conteúdo certo?** Tire um snapshot e confira textos e estrutura.
3. **Interações:** clique nos botões principais; preencha o formulário; confirme que o
   resultado esperado acontece (ex.: lead salvo, WhatsApp abre).
4. **Responsivo:** redimensione para 375px (celular) e confira se nada quebra.
5. **Links externos** (WhatsApp, etc.) apontam para o destino certo?

### 3. Se achar problema
Leia o código, conserte na fonte, e **teste de novo** a partir do passo 2. Não declare
"funcionando" sem ter visto funcionar.

### 4. Entregue a prova
Capture um **screenshot** (desktop e/ou celular) e mostre ao usuário. Resuma o que testou
e o resultado, com honestidade: se algo falhou, diga o que falhou.

## Cuidados
- **Evidência antes de afirmar.** Nunca diga "está pronto" sem prova.
- Teste o caminho que o cliente real vai percorrer, não só a tela inicial.
