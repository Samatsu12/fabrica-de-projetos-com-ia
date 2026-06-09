---
name: landing-page-builder
description: Cria uma landing page de conversão completa (estrutura + copy + HTML/CSS responsivo) para prestadores de serviço e pequenos negócios, com foco em WhatsApp. Use quando o usuário pedir "landing page", "página de vendas", "página de captura", "site simples para captar clientes" ou similar.
---

# Landing Page Builder — página que capta clientes

Cria uma landing page **simples, profissional e focada em conversão** (geralmente para
WhatsApp). Não é um site grande: é uma página direta que transforma visita em conversa.

## Quando usar
- Prestador de serviço local sem presença digital profissional.
- Captura para infoproduto ou oferta.
- Qualquer pedido de "página de vendas / captação".

## Procedimento

### 1. Confirme o briefing essencial (se não tiver)
- Tipo de serviço/produto e o que está sendo oferecido.
- Público-alvo (quem contrata e a dor dele).
- Ação desejada (chamar no WhatsApp? preencher formulário?).
- Provas de confiança disponíveis (anos de experiência, depoimentos, fotos, garantias).
- Tom de comunicação.

### 2. Apresente a estrutura ANTES de criar arquivos
Padrão de blocos (ajuste à oferta):
1. **Dobra inicial** — headline com promessa clara + subheadline + CTA de WhatsApp.
2. **Explicação do serviço** — o que é, em 1-2 frases.
3. **Lista de serviços / o que está incluso.**
4. **Benefícios** — em linguagem de resultado, não de característica.
5. **Bloco de confiança** — depoimentos, números, fotos, certificações.
6. **Chamada para ação** (repetir o CTA).
7. **Perguntas frequentes (FAQ).**
8. **Botão fixo de WhatsApp** (sempre visível no celular).

Explique em 1 linha por que cada bloco existe. Peça aprovação.

### 3. Construa
- **Stack padrão:** um único `index.html` + `styles.css` (sem framework, para o leigo
  conseguir abrir com 2 cliques). Use a skill `frontend-pme` para o capricho visual.
- Mobile-first e responsivo. A maioria do tráfego é celular.
- Botão de WhatsApp com link `https://wa.me/55DDDNUMERO?text=mensagem%20pré-preenchida`.
- Sem login, sem pagamento, sem painel nesta primeira versão.
- Copy escrita com a skill/subagent de copy: clara, humana, sem promessa exagerada.

### 4. Verifique no navegador
Use a skill `playwright-qa` (ou os preview tools) para conferir que carrega, o botão de
WhatsApp funciona e fica bom no celular. **Não peça para o usuário testar — teste você.**

### 5. Sugira próximos passos
`/seguranca` → `/deploy-check` → `/ads` (criativos para divulgar).

## Cuidados
- **Nada de promessa irreal** (ex.: "resultado garantido em 7 dias").
- Headline tem que ser entendida em até 5 segundos.
- Substitua o número de WhatsApp de exemplo pelo real e avise o usuário para conferir.
- Evite "cara de IA": sem textos genéricos, sem lorem ipsum, sem ícones aleatórios.
