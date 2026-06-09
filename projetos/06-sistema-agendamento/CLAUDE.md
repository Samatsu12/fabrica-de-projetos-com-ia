# Agendamento — [Nome do Negócio]

## Objetivo
Marcar horários sem furo e sem ida e volta de WhatsApp.

## Público
Profissional e recepção (não técnicos), usando no celular/computador.

## Stack
`index.html` + `app.js`, dados em `localStorage`. Sem servidor na v1.

## Configuração
- Serviços e durações: [___]
- Horário de funcionamento: [___]

## Funcionalidades (v1)
- Listar serviços (com duração)
- Agenda do dia/semana (livres x ocupados)
- Marcar horário (cliente, serviço, hora)
- **Bloquear horário já ocupado** (evitar conflito)
- Confirmação com botão de WhatsApp
- Persistir ao recarregar

## Fora do escopo
Pagamento, lembrete por API, multiusuário, Google Agenda.

## Regras
- Impedir agendamento sobreposto (regra crítica — testar bem).
- Datas/horas em padrão BR.

## Critério de sucesso
Marcar um horário em segundos, sem risco de dois clientes no mesmo slot.
