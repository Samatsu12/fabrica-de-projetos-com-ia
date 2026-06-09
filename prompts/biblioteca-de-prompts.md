# Biblioteca de Prompts Prontos

Copie, adapte os campos `[entre colchetes]` e cole no Claude Code. Estão organizados pela
ordem do método: **ideia → briefing → versão → revisão → segurança → venda.**

> 💡 Com o plugin instalado, muitos desses prompts viram comandos curtos (ex.: `/brief-pme`).
> Esta biblioteca serve para quando você quer o texto completo ou está usando outra IA.

---

## FASE 1 — Da ideia ao briefing

### Prompt 1 — Transformar ideia solta em projeto
```
Tenho uma ideia de projeto, mas ela ainda está bagunçada. Quero que você me ajude a
transformar essa ideia em um briefing claro para criar com IA.

Minha ideia é:
[descreva sua ideia]

Organize a resposta nestes blocos:
1. Qual problema essa ideia resolve.
2. Para quem esse projeto serve.
3. Qual seria a primeira versão útil.
4. Quais funcionalidades entram agora.
5. Quais funcionalidades devem ficar para depois.
6. Quais riscos ou dúvidas preciso esclarecer.
7. Um prompt inicial pronto para eu usar no Claude Code.

Use linguagem simples e evite termos técnicos sem explicação.
```

### Prompt 2 — Criar briefing completo
```
Quero criar um projeto com IA, mas antes preciso de um briefing bem estruturado.

Contexto do negócio: [explique o negócio]
Problema que quero resolver: [explique a dor]
Público que vai usar: [explique quem vai usar]
Resultado desejado: [explique o que espera]

Com base nisso, crie um briefing completo com: objetivo do projeto; público principal;
funcionalidades da primeira versão; funcionalidades que ficam para depois; estilo visual
recomendado; tom de comunicação; critérios de sucesso; riscos de escopo; e um prompt mestre
para iniciar o projeto. Escreva para uma pessoa sem conhecimento técnico.
```

---

## FASE 2 — Criar a primeira versão

### Prompt 3 — Pedir uma primeira versão simples
```
Vamos criar a primeira versão deste projeto.

Importante: quero uma versão simples, funcional e fácil de entender. Não quero recursos
avançados agora.

Briefing do projeto:
[cole o briefing]

Antes de criar qualquer arquivo, me entregue:
1. Resumo do que você entendeu.
2. Estrutura do projeto.
3. Funcionalidades da primeira versão.
4. O que ficará fora desta etapa.
5. Possíveis dúvidas ou riscos.

Depois da minha aprovação, você poderá começar a criar os arquivos.
```

### Prompt 4 — Controlar a complexidade (antes de codar)
```
Antes de criar qualquer arquivo, me diga:
- qual estrutura de pastas/arquivos você pretende usar e por quê;
- quais tecnologias, na forma mais simples possível para um iniciante;
- o que você vai deixar de fora nesta primeira versão.

Não adicione funcionalidades avançadas agora. Use linguagem simples e me explique as
escolhas como se eu não soubesse programar.
```

---

## FASE 3 — Simplificar e revisar

### Prompt 5 — Simplificar um projeto que ficou complexo
```
O projeto ficou complexo demais para a primeira versão. Revise o escopo e reduza para uma
versão mais simples, mantendo apenas o que resolve a dor principal.

Analise: [cole a descrição ou estrutura atual]

Me entregue:
1. O que está essencial.
2. O que pode ser removido agora.
3. O que pode virar melhoria futura.
4. A nova versão simplificada do escopo.
5. Um novo prompt para seguir com a construção.
```

### Prompt 6 — Revisar se o projeto resolve a dor
```
Revise este projeto como se fosse um consultor de negócios e de experiência do usuário.

Projeto: [cole a descrição ou os arquivos principais]
Dor que deveria resolver: [explique a dor]

Avalie:
1. O projeto resolve a dor principal?
2. Está simples para o público-alvo?
3. Existe algo confuso?
4. Existe algo desnecessário?
5. O que melhoraria a experiência?
6. O que melhoraria a conversão ou utilidade?
7. Quais ajustes devo pedir agora?

Seja direto e prático.
```

### Prompt 7 — Pedir uma melhoria específica (não vaga)
```
Melhore [a tela/o bloco/o texto X] para que [resultado desejado, em linguagem simples].
Mantenha o visual simples e evite excesso de informações. Não mude as outras partes que já
estão funcionando.
```

---

## FASE 4 — Testar e validar

### Prompt 8 — Testar como um cliente real
```
Teste este projeto como se você fosse um cliente comum usando pela primeira vez.

Verifique:
- se a proposta fica clara em até 5 segundos;
- se gera confiança;
- se o caminho para a ação principal é óbvio;
- se falta alguma informação;
- se alguma parte parece exagerada ou confusa;
- se o texto está humano e direto.

No final, me dê uma lista de ajustes prioritários em ordem de importância.
```

---

## FASE 5 — Segurança e publicação

### Prompt 9 — Revisão de segurança
```
Revise este projeto procurando riscos de segurança em linguagem simples:
- alguma senha, chave de API ou token escrito direto no código?
- o arquivo .env está protegido (no .gitignore)?
- há dados de clientes expostos?
- alguma permissão de banco aberta demais?

Liste os achados em 3 níveis: crítico (resolver agora), atenção e ok. Para cada item
crítico, me diga o passo concreto de correção.
```

### Prompt 10 — Preparar para publicar
```
Quero publicar este projeto. Antes:
1. Rode o checklist de qualidade (carrega, botões funcionam, ok no celular, sem
   placeholders, sem segredos).
2. Me recomende a forma MAIS SIMPLES de colocar no ar para o meu caso.
3. Me guie a publicação em passos numerados, sem jargão.
4. Me lembre de tudo que preciso configurar (variáveis de ambiente, etc.).
```

---

## FASE 6 — Vender e divulgar

### Prompt 11 — Criar criativos de anúncio
```
Crie criativos de anúncio para Meta Ads (Facebook/Instagram) para:
Produto/serviço: [...]
Oferta: [...]
Público e dor: [...]
Ação desejada: [...]

Entregue 3 ângulos diferentes. Para cada um: 3 variações de texto primário, 5 headlines
curtas, 2 descrições, CTA sugerido e uma ideia de criativo (vídeo/imagem). Respeite as
políticas de anúncio — sem promessas exageradas.
```

### Prompt 12 — Transformar entrega em prova social
```
Transforme este projeto que entreguei em material de venda.
Cliente/contexto: [...]
Dor que ele tinha: [...]
O que foi feito: [...]
Resultado (se houver número): [...]

Gere: um estudo de caso (problema → solução → resultado), um rascunho de depoimento na voz
do cliente para ele aprovar, e um post para redes sociais. Não invente números.
```

### Prompt 13 — Abordagem de venda para pequeno negócio
```
Escreva uma abordagem de WhatsApp para oferecer [tipo de projeto] para [tipo de negócio].
Conecte primeiro com a dor do dono, depois apresente a solução como ponte (não como
produto), e termine com um convite leve para conversar. Tom humano, sem pressão, em
português do Brasil.
```

---

## Prompts coringa (use a qualquer momento)

- **Explique sem jargão:** `Explique o que você acabou de fazer como se eu não soubesse nada de programação.`
- **Me dê opções:** `Me dê 2 ou 3 caminhos para resolver isso, do mais simples ao mais completo, e recomende um.`
- **Resolva um erro:** `Deu este erro: [cole o erro]. Explique a causa em linguagem simples e corrija.`
- **Não complique:** `Não adicione nada além do que pedi. Mantenha simples.`
