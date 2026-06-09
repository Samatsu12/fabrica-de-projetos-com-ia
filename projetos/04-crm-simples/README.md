# Projeto 04 — CRM Simples de Leads

## Para quem serve
Qualquer negócio que recebe contatos e perde gente no meio do caminho: prestadores,
imobiliárias, clínicas, lojas, infoprodutores, vendedores autônomos.

## A dor
Os leads chegam por WhatsApp e Instagram e se perdem em conversas soltas. Ninguém sabe quem
falta dar retorno, quem está quente, quem sumiu.

## Primeira versão útil
- Cadastro do lead (nome, WhatsApp, origem)
- Status do atendimento (Novo → Em contato → Proposta → Fechado → Perdido)
- Próxima ação + data, observações
- Filtro por etapa
- Botão "Abrir no WhatsApp"
- Dados salvos no navegador (não some ao fechar)

## Fora do escopo agora
Login, permissões, integração automática com WhatsApp, notificações, relatórios.

## Passo a passo
1. Copie o [`CLAUDE.md`](CLAUDE.md) para a pasta do projeto.
2. Rode `/crm-whatsapp` (ou cole o prompt). Aprove o modelo de dados e a tela.
3. `/qa`: cadastrar, mudar status, filtrar, recarregar e ver se persiste.
4. `/seguranca` (atenção a dados de clientes) → `/deploy-check`.

## Prompt principal
```
Quero criar um CRM simples para acompanhar leads, com foco em WhatsApp.

A primeira versão precisa ter: cadastro de lead (nome, WhatsApp, origem); status (Novo, Em
contato, Proposta, Fechado, Perdido); próxima ação com data; observações; filtro por status;
botão para abrir a conversa no WhatsApp. Os dados devem ser salvos no navegador
(localStorage) para não sumir ao recarregar.

Stack mais simples possível: HTML + CSS + JavaScript puro, sem servidor e sem conta. Visual
limpo e direto, porque quem vai usar não é técnico.

Antes de criar os arquivos, me mostre o modelo de dados do lead e a tela principal.
```

## Como vender
"Você para de perder cliente por desorganização. Bate o olho e sabe quem precisa de retorno
hoje." **Preço de referência:** R$ 597–1.500. Vira recorrência se você der suporte/ajustes.
