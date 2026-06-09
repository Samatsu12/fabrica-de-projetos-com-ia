# Projeto 06 — Sistema de Agendamento

## Para quem serve
Quem trabalha com horário marcado: barbearia, salão, estética, fisioterapia, consultório,
personal, estúdio, manicure, professor particular.

## A dor
Agenda no caderno ou no WhatsApp, com furos: dois clientes no mesmo horário, esquecimento,
ida e volta de mensagem só para marcar.

## Primeira versão útil
- Lista de serviços com duração
- Visualização da agenda (dia/semana) com horários livres e ocupados
- Marcar um horário (nome do cliente, serviço, horário)
- Bloqueio de horário já ocupado
- Confirmação que abre WhatsApp para avisar o cliente

## Fora do escopo agora
Pagamento online, lembrete automático por API, login de múltiplos profissionais, integração
com Google Agenda.

## Passo a passo
1. Copie o [`CLAUDE.md`](CLAUDE.md), defina serviços, durações e horário de funcionamento.
2. Cole o prompt principal. Aprove a tela da agenda.
3. `/qa`: marcar, tentar marcar em cima de outro (deve bloquear), recarregar e ver se persiste.
4. `/seguranca` → `/deploy-check`.

## Prompt principal
```
Quero criar um sistema simples de agendamento para [tipo de negócio].

Serviços e durações: [ex.: corte 30min, barba 20min...]
Horário de funcionamento: [ex.: seg-sex 9h-18h, sáb 9h-13h]

A primeira versão precisa: listar os serviços; mostrar a agenda do dia/semana com horários
livres e ocupados; permitir marcar um horário (cliente, serviço, hora); impedir marcar em
horário já ocupado; e gerar uma confirmação com botão de WhatsApp para avisar o cliente. Os
agendamentos ficam salvos no navegador (localStorage).

Stack simples: HTML + CSS + JavaScript puro. Sem pagamento, login ou integração externa agora.

Antes de criar, me mostre como a agenda vai aparecer e como evito conflito de horário.
```

## Como vender
"Acaba o furo de agenda e a ida e volta de mensagem. O cliente vê o horário livre e marca."
**Preço de referência:** R$ 697–1.800. Forte candidato a mensalidade de manutenção.
