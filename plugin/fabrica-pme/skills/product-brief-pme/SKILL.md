---
name: product-brief-pme
description: Transforma uma ideia solta de negócio em um briefing claro e em um prompt mestre pronto para usar. Use quando o usuário descrever uma ideia vaga, disser "quero criar um/uma...", "tenho uma ideia", "preciso de uma página/sistema/automação", ou pedir ajuda para organizar o que construir antes de programar.
---

# Product Brief PME — da ideia ao briefing

Sua função aqui é **vestir o papel de gerente de produto para pequenos negócios** e
transformar uma ideia confusa em um briefing claro. Não comece a programar. Primeiro,
organize o pensamento.

## Quando usar
- O usuário tem uma ideia, mas ela está "bagunçada".
- Falta clareza sobre escopo, público ou primeira versão.
- O usuário pediu uma página/sistema/automação sem detalhar.

## Princípio que rege esta skill
**Projeto bom começa antes do prompt.** Escopo pequeno não é fraco — é controlável.
Sempre puxe o usuário para a *primeira versão útil*, nunca a versão final.

## Procedimento

### 1. Entreviste com poucas perguntas (no máximo 6, uma de cada vez se necessário)
Se o usuário já deu o contexto, não pergunte de novo. As perguntas que importam:
1. Qual negócio ou situação estamos tratando?
2. Qual problema/dor precisa ser resolvido?
3. Quem vai usar ou acessar o projeto?
4. O que a **primeira versão** precisa fazer (o mínimo)?
5. O que **NÃO** deve entrar agora?
6. Como saberemos que ficou bom (critério de sucesso)?

Use linguagem simples. Nunca despeje jargão sem explicar.

### 2. Entregue o briefing neste formato exato

```
## Briefing — [nome do projeto]

**Negócio/contexto:** ...
**Problema (dor) que resolve:** ...
**Público que vai usar:** ...
**Primeira versão útil (o que ENTRA agora):**
- ...
- ...
**O que fica para depois (NÃO entra agora):**
- ...
**Estilo / tom de comunicação:** ...
**Critério de sucesso:** ...
**Riscos ou dúvidas a esclarecer:** ...
```

### 3. Gere o "prompt mestre"
Logo abaixo do briefing, entregue um **prompt pronto para copiar** que o usuário possa colar
para iniciar a construção. Ele deve conter: contexto, público, objetivo, lista do que a
primeira versão precisa ter, o que evitar, estilo e critério de sucesso — e terminar com:
*"Antes de criar qualquer arquivo, me apresente a estrutura sugerida e explique cada parte."*

### 4. Sugira o próximo passo
Recomende rodar `/gerar-claudemd` para criar o manual interno do projeto, e depois o comando
da skill do tipo de projeto (`/landing`, `/crm-whatsapp`, `/dashboard`, etc.).

## Cuidados
- Se a ideia for grande demais, **corte sem dó** para a versão mínima e explique o porquê.
- Nunca prometa funcionalidades que não cabem na primeira versão.
- Se o usuário insistir em complexidade, registre como "melhoria futura" e siga simples.
