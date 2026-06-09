---
name: claudemd-generator
description: Cria ou atualiza o arquivo CLAUDE.md (o "manual interno" do projeto) com objetivo, público, tecnologias, regras e cuidados. Use quando o usuário começar um projeto novo, pedir para "criar o CLAUDE.md", "configurar o contexto", "fixar as regras do projeto", ou quando faltar um CLAUDE.md na pasta.
---

# CLAUDE.md Generator — o manual interno do projeto

O CLAUDE.md é a **ficha de orientação fixa** do projeto. Ele evita que o usuário precise
repetir tudo em cada conversa. Sua função é gerá-lo de forma clara e enxuta.

## Quando usar
- Início de qualquer projeto novo.
- Não existe `CLAUDE.md` na pasta atual.
- O usuário quer padronizar regras, tom ou tecnologias.

## Procedimento

### 1. Reúna as informações
Use o briefing existente (se houver) ou pergunte o essencial. Não invente: se faltar dado,
pergunte de forma simples.

### 2. Escreva o arquivo `CLAUDE.md` na raiz do projeto
Use **esta estrutura** (adapte ao projeto, mantenha curto e em português):

```markdown
# [Nome do Projeto]

## Objetivo
[Uma frase: qual dor este projeto resolve e para quem.]

## Público
[Quem vai usar. Nível técnico do usuário final.]

## Stack (tecnologias)
[Liste só o necessário. Prefira o mais simples: HTML/CSS/JS puro ou
um framework leve. Justifique escolhas para um leigo em 1 linha.]

## Regras que não podem ser quebradas
- Sempre começar pela versão mínima que resolve a dor.
- Nunca expor senhas, chaves ou dados de clientes no código.
- Textos em português, claros e sem jargão.
- [outras regras específicas do projeto]

## Tom de comunicação / estilo visual
[Profissional, acolhedor, direto... e referência visual se houver.]

## Comandos úteis do projeto
[Ex.: como rodar localmente, como abrir no navegador. Em linguagem simples.]

## O que evitar nesta fase
- [funcionalidades que ficaram para depois]

## Cuidados de segurança
- Variáveis sensíveis vão em `.env` (nunca no código).
- Revisar antes de publicar qualquer coisa com dados reais.
```

### 3. Confirme e oriente
Mostre o arquivo criado, explique em 2 linhas que ele será lido automaticamente em toda
conversa dentro daquela pasta, e que pode ser editado quando o projeto evoluir.

## Cuidados
- **Curto vence.** Um CLAUDE.md gigante atrapalha. Foque no que muda decisões.
- Não duplique o que já está óbvio no código.
- Se já existir um CLAUDE.md, **atualize-o** em vez de sobrescrever do zero.
