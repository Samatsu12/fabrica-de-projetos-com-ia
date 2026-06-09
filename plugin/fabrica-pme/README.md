# Plugin `fabrica-pme`

Tudo o que você precisa para criar projetos para pequenos negócios dentro do Claude Code,
em um único plugin instalável.

## O que vem dentro

### 🧩 12 Skills (habilidades prontas)

Skills são procedimentos prontos. Você dispara pelo comando em **negrito** ou o Claude
sugere sozinho na hora certa.

| Skill (`name`) | Comando | O que faz |
|----------------|---------|-----------|
| `product-brief-pme` | **`/brief-pme`** | Transforma uma ideia solta em briefing claro |
| `claudemd-generator` | **`/gerar-claudemd`** | Cria o CLAUDE.md (manual interno do projeto) |
| `landing-page-builder` | **`/landing`** | Monta landing page focada em conversão |
| `frontend-pme` | **`/frontend`** | Garante visual profissional (evita "cara de IA") |
| `whatsapp-crm` | **`/crm-whatsapp`** | Monta CRM simples de leads com foco em WhatsApp |
| `planilha-automation` | **`/planilha`** | Transforma CSV/Excel em relatório automático |
| `dashboard-bi` | **`/dashboard`** | Cria painel de indicadores simples |
| `playwright-qa` | **`/qa`** | Testa a aplicação no navegador |
| `security-review` | **`/seguranca`** | Procura senhas expostas, `.env` e riscos |
| `deploy-checker` | **`/deploy-check`** | Checklist antes de publicar |
| `meta-ads-copy` | **`/ads`** | Gera criativos e variações de anúncio |
| `case-study-generator` | **`/case`** | Transforma o projeto em prova social |

### 🤖 6 Subagents (especialistas)

Cada subagent pensa como um profissional. Você pode chamá-los pelo nome ("peça pro
**product-manager** revisar o escopo").

| Subagent | Papel |
|----------|-------|
| `product-manager` | Define escopo, prioriza, corta excesso |
| `ux-ui-designer` | Cuida do visual, layout e usabilidade |
| `copywriter` | Escreve textos de venda que convertem |
| `fullstack-builder` | Constrói a aplicação (código) |
| `qa-tester` | Testa e encontra problemas antes do cliente |
| `growth-marketer` | Pensa em tráfego, oferta e funil |

### 🪝 8 Hooks (travas automáticas de segurança e qualidade)

Hooks rodam sozinhos em momentos do ciclo de vida. São as "travas de segurança" do guia.

| Hook | Quando dispara | O que faz |
|------|----------------|-----------|
| Preflight Secret Check | Antes de editar/rodar | Bloqueia se detectar senha/chave exposta |
| Post Edit Format Check | Depois de editar arquivo | Avisa sobre problemas comuns no arquivo |
| Post Test Summary | Depois de rodar testes | Resume o resultado dos testes |
| Stop Session Brief | Ao encerrar a resposta | Gera um resumo do que foi feito |
| Pre Deploy Checklist | Antes de comandos de deploy | Lembra o checklist de publicação |
| Prompt Guardrails | Ao enviar um prompt | Avisa quando o pedido está vago demais |
| Commit Message Generator | Ao commitar (git) | Sugere mensagem de commit padronizada |
| Error Log Capture | Quando um comando falha | Guarda o erro num log para análise |

Configuração em [`hooks/hooks.json`](hooks/hooks.json). Os scripts (Node.js, multiplataforma)
ficam em [`hooks/scripts/`](hooks/scripts/).

### 🔌 MCPs recomendados

[`/.mcp.json`](.mcp.json) traz, comentado e pronto para ativar: GitHub, Postgres/Supabase,
Filesystem, Playwright (navegador), Google Sheets, Stripe/Mercado Pago e Slack/Discord.

## Como instalar

Veja o [Guia de Instalação](../../GUIA-DE-INSTALACAO.md), Parte 4. Resumo:

```
/plugin marketplace add <caminho-da-pasta-plugin>
/plugin install fabrica-pme
```

## Filosofia

Tudo aqui segue o método do guia: **escopo pequeno, primeira versão útil, revisão humana
sempre.** As ferramentas aceleram — a direção é sua.
