# CRM Simples — [Nome do Negócio]

## Objetivo
Organizar leads e atendimento para parar de perder contatos vindos do WhatsApp/Instagram.

## Público
Pessoa não técnica que atende clientes. A tela precisa ser óbvia.

## Stack
`index.html` + `app.js`, dados em `localStorage` (sem servidor/conta). Migrar para Supabase
só se precisar acessar de vários aparelhos.

## Modelo de dados (lead)
Nome · WhatsApp · Origem · Status (Novo→Em contato→Proposta→Fechado→Perdido) · Próxima ação +
data · Observações.

## Funcionalidades (v1)
- Cadastrar/editar/excluir lead
- Mudar status (avançar etapa)
- Filtrar por status
- Botão "Abrir no WhatsApp" (`https://wa.me/55...`)
- Persistir ao recarregar

## Fora do escopo
Login, permissões, integração WhatsApp, notificações, relatórios, multiusuário.

## Regras
- Dados de clientes são sensíveis (LGPD: coletar só o necessário).
- Visual simples e direto (`/frontend`).

## Critério de sucesso
Cadastrar um lead, avançar o status e achar rápido quem precisa de retorno hoje.

## Segurança
Se for para a nuvem: ativar RLS no Supabase, chaves em `.env`, rodar `/seguranca`.
