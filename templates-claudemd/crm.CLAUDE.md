# CRM Simples — [Nome do Negócio]

## Objetivo
Organizar leads e atendimento para [negócio] parar de perder contatos vindos do WhatsApp/
Instagram.

## Público
Pessoa não técnica que atende clientes no dia a dia. A tela precisa ser óbvia.

## Stack
Versão 1: `index.html` + `app.js`, dados salvos no navegador (`localStorage`). Sem servidor,
sem conta. (Se um dia precisar acessar de vários aparelhos, migrar para Supabase.)

## Modelo de dados (lead)
- Nome
- WhatsApp/telefone
- Origem (Instagram, indicação, anúncio...)
- Status (Novo → Em contato → Proposta → Fechado → Perdido)
- Próxima ação + data
- Observações

## Funcionalidades (primeira versão)
- Cadastrar / editar / excluir lead.
- Mudar status (avançar etapa).
- Filtrar por status.
- Botão "Abrir no WhatsApp" (`https://wa.me/55...`).
- Dados persistem ao recarregar a página.

## O que NÃO entra agora
Login, permissões, integração automática com WhatsApp, notificações, relatórios, multiusuário.

## Regras
- Dados de clientes são sensíveis: nada de expor; cuidado com LGPD (coletar só o necessário).
- Visual simples e direto (skill `frontend-pme`).

## Critério de sucesso
A pessoa cadastra um lead, avança o status e encontra rápido quem precisa de retorno hoje.

## Segurança
Se migrar para a nuvem (Supabase): ativar RLS, chaves em `.env`, rodar `/seguranca`.
