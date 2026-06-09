# Guia de Instalação — do zero, sem saber programar

Este guia é para quem **nunca abriu um terminal na vida**. Vá com calma. Cada passo tem
o que digitar e o que esperar de resposta. Se algo der errado, copie a mensagem de erro e
peça ajuda ao próprio Claude: "deu esse erro, o que faço?".

> ⏱️ Tempo estimado: 20 a 30 minutos na primeira vez.

---

## Parte 1 — Instalar o que o Claude Code precisa

O Claude Code é um programa que roda dentro de uma janela preta chamada **terminal**.
Antes dele, precisamos instalar o **Node.js** (um motor que o Claude Code usa por baixo).

### 1.1 Instalar o Node.js

1. Acesse **https://nodejs.org**
2. Baixe a versão **LTS** (o botão da esquerda, o "recomendado").
3. Abra o arquivo baixado e clique em **Avançar / Next** até o final. Não precisa mudar nada.

**Como saber se deu certo?** Abra o terminal:

- **Windows:** aperte a tecla Windows, digite `PowerShell`, abra.
- **Mac:** aperte `Cmd + Espaço`, digite `Terminal`, abra.

Digite e aperte Enter:

```
node --version
```

Se aparecer algo como `v20.11.0`, deu certo. ✅

### 1.2 Instalar o Claude Code

No mesmo terminal, digite:

```
npm install -g @anthropic-ai/claude-code
```

Espere terminar (pode levar 1 a 2 minutos). Depois confira:

```
claude --version
```

Apareceu um número? Instalado. ✅

---

## Parte 2 — Entrar na sua conta

1. Crie uma conta em **https://claude.ai** (se ainda não tiver).
2. No terminal, digite:

```
claude
```

3. Na primeira vez, ele vai abrir o navegador para você **fazer login**. Autorize.
4. Pronto: você está dentro do Claude Code. Para sair a qualquer momento, digite `/exit`.

> 💡 Você precisa de um plano que dê acesso ao Claude Code (Pro, Max ou API).
> Se aparecer aviso de cobrança/limite, é normal — o uso é pago, como combustível da ferramenta.

---

## Parte 3 — Organizar uma pasta para seus projetos

Crie uma pasta no seu computador chamada, por exemplo, `meus-projetos-ia`.
Coloque dentro dela a pasta `fabrica-de-projetos-com-ia` (este pacote).

No terminal, **entre na pasta do projeto** antes de chamar o Claude. Exemplo no Windows:

```
cd "C:\Users\SEU-USUARIO\meus-projetos-ia"
claude
```

> O comando `cd` significa "entrar na pasta". Sempre rode o `claude` de dentro da pasta
> onde você quer trabalhar — é ali que ele vai criar e ler os arquivos.

---

## Parte 4 — Instalar o plugin "fabrica-pme" (o coração do pacote)

O plugin traz, de uma vez só, **todas as skills, subagents e hooks** prontos.

### Opção A — Instalar como marketplace local (recomendado)

1. Dentro do Claude Code, digite:

```
/plugin marketplace add "C:\Users\SEU-USUARIO\meus-projetos-ia\fabrica-de-projetos-com-ia\plugin"
```

(no Mac, use o caminho com `/` no lugar de `\`)

2. Depois instale:

```
/plugin install fabrica-pme
```

3. Confirme com:

```
/plugin
```

Você verá `fabrica-pme` na lista de plugins ativos. ✅

### Opção B — Copiar para a pasta do projeto (mais manual)

Se preferir não usar o sistema de plugins, copie as pastas de dentro de
`plugin/fabrica-pme/` para a pasta `.claude/` do seu projeto:

- `skills/`  → `.claude/skills/`
- `agents/`  → `.claude/agents/`
- `hooks/`   → e adicione o conteúdo de `hooks/hooks.json` ao seu `.claude/settings.json`

(A Opção A é bem mais fácil. Use a B só se a A não funcionar.)

---

## Parte 5 — Testar se tudo funcionou

Dentro do Claude Code, digite:

```
/brief-pme
```

Se ele começar a te fazer perguntas sobre sua ideia de negócio, **está tudo funcionando!** 🎉

Agora veja a lista do que você ganhou:

| Digite | O que faz |
|--------|-----------|
| `/brief-pme` | Transforma sua ideia em um briefing claro |
| `/gerar-claudemd` | Cria o "manual interno" (CLAUDE.md) do projeto |
| `/landing` | Monta uma landing page de conversão |
| `/crm-whatsapp` | Monta um CRM simples de leads |
| `/dashboard` | Cria um painel de indicadores a partir de uma planilha |
| `/qa` | Testa a aplicação no navegador |
| `/seguranca` | Procura senhas expostas e riscos |
| `/deploy-check` | Checklist antes de publicar |
| `/ads` | Gera criativos de anúncio |
| `/case` | Transforma o projeto em prova social (estudo de caso) |

> A lista completa de skills, subagents e hooks está em
> [`plugin/fabrica-pme/README.md`](plugin/fabrica-pme/README.md).

---

## Parte 6 — Conectar ferramentas externas (MCPs) — opcional

Os **MCPs** são "pontes" que ligam o Claude a outras ferramentas (GitHub, planilhas,
banco de dados, navegador). Você **não precisa disso para começar**.

Quando quiser, abra [`plugin/fabrica-pme/.mcp.json`](plugin/fabrica-pme/.mcp.json) — ele
já vem com os MCPs recomendados, comentados e prontos para ativar.

---

## Resolveu travar? Checklist rápido

- [ ] `node --version` responde um número?
- [ ] `claude --version` responde um número?
- [ ] Você rodou `claude` **de dentro** da pasta do projeto (`cd` antes)?
- [ ] O plugin aparece em `/plugin`?
- [ ] `/brief-pme` faz perguntas?

Se travou em algum, **descreva o erro para o próprio Claude Code**. Ele costuma resolver. 💪
