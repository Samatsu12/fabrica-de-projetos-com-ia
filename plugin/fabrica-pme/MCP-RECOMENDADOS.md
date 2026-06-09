# MCPs Recomendados — pontes para outras ferramentas

**MCP** é uma "ponte" que conecta o Claude a sistemas externos (GitHub, banco de dados,
planilhas, navegador, pagamentos). **Você não precisa disso para começar** — só ative
quando seu projeto realmente exigir.

## Como ativar um MCP (passo a passo)

1. Abra o arquivo [`.mcp.json`](.mcp.json).
2. Copie o **bloco** do MCP que você quer (abaixo) para dentro de `"mcpServers": { ... }`.
3. Onde houver `COLOQUE_SUA_CHAVE`, troque pela sua chave real.
4. **Importante:** nunca suba esse arquivo com a chave preenchida para o GitHub. Para chaves,
   prefira definir variáveis de ambiente no seu sistema.
5. Reinicie o Claude Code e confira com o comando `/mcp`.

> 💡 Cada MCP roda via `npx`, então o Node.js (já instalado) baixa o servidor na hora.

---

## 1. Filesystem — acesso a arquivos de uma pasta

Zero configuração. Útil para ler/escrever em uma pasta específica.

```json
"filesystem": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "C:/Users/SEU-USUARIO/meus-projetos-ia"]
}
```

## 2. Playwright — controlar o navegador (para testes/QA)

Zero chave. Reforça a skill `playwright-qa`.

```json
"playwright": {
  "command": "npx",
  "args": ["-y", "@playwright/mcp@latest"]
}
```

## 3. GitHub — versionar e publicar código

Crie um token em github.com → Settings → Developer settings → Personal access tokens.

```json
"github": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "COLOQUE_SUA_CHAVE" }
}
```

## 4. Postgres / Supabase — banco de dados

Use a "connection string" do seu banco (no Supabase: Project Settings → Database).

```json
"postgres": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://usuario:senha@host:5432/banco"]
}
```

> Para o Supabase com mais recursos, existe também o servidor oficial `@supabase/mcp-server-supabase`
> (precisa de access token do Supabase).

## 5. Google Sheets — planilhas na nuvem

Requer credenciais do Google Cloud (OAuth). Reforça a skill `planilha-automation` e `dashboard-bi`.

```json
"google-sheets": {
  "command": "npx",
  "args": ["-y", "mcp-google-sheets"],
  "env": {
    "SERVICE_ACCOUNT_PATH": "C:/caminho/para/credenciais.json"
  }
}
```

## 6. Stripe / Mercado Pago — pagamentos

Para projetos que cobram online. Use a chave **de teste** primeiro.

```json
"stripe": {
  "command": "npx",
  "args": ["-y", "@stripe/mcp", "--tools=all"],
  "env": { "STRIPE_SECRET_KEY": "COLOQUE_SUA_CHAVE" }
}
```

> Mercado Pago: consulte a documentação do MCP oficial deles; o padrão de configuração é o
> mesmo (chave de acesso via `env`).

## 7. Slack / Discord — notificações e atendimento interno

Para central de atendimento interno ou avisos de equipe.

```json
"slack": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-slack"],
  "env": {
    "SLACK_BOT_TOKEN": "COLOQUE_SUA_CHAVE",
    "SLACK_TEAM_ID": "COLOQUE_SEU_TEAM_ID"
  }
}
```

---

## Qual MCP combina com cada projeto?

| Projeto | MCPs úteis |
|---------|-----------|
| Landing page / catálogo | GitHub, Playwright |
| CRM / agendamento | Supabase/Postgres |
| Dashboard / planilha | Google Sheets, Postgres |
| Cobrança recorrente | Stripe/Mercado Pago, Postgres |
| Central de atendimento | Slack/Discord |

## Aviso de segurança

- Chaves de MCP dão acesso real às suas contas. Guarde com cuidado.
- Comece sempre com **chaves de teste** (Stripe, Mercado Pago) antes de usar as reais.
- Rode `/seguranca` antes de subir qualquer projeto que use MCP.
