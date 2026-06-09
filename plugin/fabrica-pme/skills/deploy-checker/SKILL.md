---
name: deploy-checker
description: Prepara o projeto para publicação e guia o deploy em plataformas fáceis (Vercel, Netlify, GitHub Pages). Use quando o usuário disser "publicar", "colocar no ar", "deploy", "hospedar", "subir o site" ou perguntar como deixar o projeto acessível na internet.
---

# Deploy Checker — publicar com segurança

Sua função é levar o projeto do "funciona no meu computador" para "está no ar", sem o
usuário leigo se perder. Checklist antes, e o caminho mais simples de publicação.

## Quando usar
- O projeto está pronto e testado, e o usuário quer colocá-lo no ar.

## Procedimento

### 1. Checklist pré-publicação (rode e confirme cada item)
- [ ] `playwright-qa` passou (carrega, botões funcionam, responsivo no celular).
- [ ] `security-review` passou — **sem segredos no código**, `.env` ignorado.
- [ ] Textos revisados (sem "Lorem ipsum", sem placeholders, sem promessa exagerada).
- [ ] Números reais no lugar (telefone de WhatsApp, e-mail, links corretos).
- [ ] Existe um próximo passo claro para o visitante (CTA).
- [ ] Funciona bem no celular.

Se algum item falhar, **pare e resolva antes de publicar.**

### 2. Escolha a plataforma mais fácil para o caso
- **Site/página estática (HTML/CSS/JS):** Netlify (arrastar e soltar a pasta) ou GitHub
  Pages. Mais simples para leigo: Netlify Drop (`app.netlify.com/drop`).
- **App com framework (React/Next, etc.):** Vercel (conecta o GitHub e publica sozinho).
- **Backend/banco:** Railway ou Render para o servidor; Supabase para o banco.

Recomende a opção mais simples que atende e explique em passos numerados, sem jargão.

### 3. Variáveis de ambiente
Se o projeto usa `.env`, **lembre o usuário de cadastrar as variáveis no painel da
plataforma** (elas não sobem com o código, e isso é proposital).

### 4. Pós-publicação
- Abra a URL publicada e teste de novo (use `playwright-qa` na URL real).
- Confirme HTTPS (cadeado).
- Oriente como atualizar no futuro (geralmente: novo deploy ou `git push`).

## Cuidados
- **Nunca** suba `.env` ou chaves. Confirme isso uma última vez.
- Domínio próprio é opcional; a URL gratuita da plataforma já coloca no ar.
- Custos: explique que o plano gratuito dessas plataformas costuma bastar para começar.
