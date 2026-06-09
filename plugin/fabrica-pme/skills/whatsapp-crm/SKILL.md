---
name: whatsapp-crm
description: Monta um CRM simples para acompanhar leads e atendimento, com foco em WhatsApp. Use quando o usuário pedir "CRM", "controle de leads", "organizar clientes/atendimentos", "funil de atendimento", "acompanhar contatos do WhatsApp" ou similar.
---

# WhatsApp CRM — controle simples de leads

Monta um CRM **enxuto** para um pequeno negócio organizar leads e atendimento. Foco em
simplicidade: a pessoa que vai usar normalmente não é técnica.

## Quando usar
- Negócio que recebe contatos por WhatsApp/Instagram e perde lead por desorganização.
- Pedido de "controle de clientes/leads" ou "funil de atendimento".

## Primeira versão útil (o que ENTRA)
- Cadastro do lead (nome, telefone/WhatsApp, origem).
- Status do atendimento (Novo → Em contato → Proposta → Fechado → Perdido).
- Próxima ação + data.
- Observações.
- Filtro por etapa/status.
- Botão "Abrir conversa no WhatsApp" (`https://wa.me/55...`).

## O que NÃO entra agora
Login avançado, permissões, integração automática com a API do WhatsApp, notificações,
relatórios sofisticados, multiusuário. Tudo isso é melhoria futura.

## Procedimento

### 1. Escolha a stack mais simples que resolve
- **Opção A (recomendada para começar):** app local de uma página — `index.html` +
  `app.js`, dados salvos no navegador (`localStorage`). Zero servidor, zero conta.
- **Opção B (quando precisar acessar de vários lugares):** front simples + Supabase
  (banco gratuito). Use só se o usuário realmente precisar de dados na nuvem.

Explique a diferença ao usuário em linguagem simples e recomende a A para a v1.

### 2. Apresente o modelo de dados e a tela ANTES de codar
- Tabela/lista de leads em colunas (Kanban simples por status, ou tabela com filtro).
- Formulário de novo lead.
- Peça aprovação.

### 3. Construa
- Visual com a skill `frontend-pme`.
- Cada lead vira um card/linha com botão de WhatsApp e botão de avançar status.
- Persistência: `localStorage` (A) ou Supabase (B).

### 4. Verifique
Use `playwright-qa`: cadastrar lead, mudar status, filtrar, reabrir a página e conferir
que os dados continuam salvos.

## Cuidados
- **Dados de clientes são sensíveis.** Se usar nuvem, rode `/seguranca` e nunca exponha
  chaves no código (use `.env`).
- LGPD: oriente o usuário a não coletar dado que não vai usar.
