---
name: frontend-pme
description: Garante que a interface tenha aparência profissional e não pareça "feita por IA" (visual genérico). Use ao criar ou revisar qualquer tela, página, componente ou layout web — landing pages, dashboards, formulários, catálogos. Aplique sempre que houver HTML/CSS envolvido.
---

# Frontend PME — visual profissional, sem cara de IA

Sua função é fazer a interface parecer **feita por um profissional**, não um template
genérico. Pequenos ajustes de design separam "amador" de "confiável".

## Quando usar
Em qualquer trabalho com tela: landing page, dashboard, catálogo, formulário, CRM.

## Princípios (aplique todos)

### 1. Tipografia com intenção
- Escolha 1 fonte de display + 1 de texto (ex.: Google Fonts: `Inter`, `Poppins`,
  `Manrope`, `Sora`). Nunca deixe a fonte padrão do navegador.
- Hierarquia clara: títulos grandes e pesados, corpo confortável (16px+), linha 1.5.

### 2. Cor com personalidade
- Defina uma paleta com **uma cor de marca** + neutros. Não use azul-padrão-bootstrap.
- Use contraste suficiente (texto escuro em fundo claro, ou o inverso bem feito).
- Suporte a tema claro/escuro só se fizer sentido para o negócio.

### 3. Espaçamento generoso
- Respiro entre seções (padding vertical 64–96px em desktop).
- Largura de leitura limitada (`max-width` ~1100px no container).
- Nada amontoado. Espaço em branco transmite profissionalismo.

### 4. Detalhes que elevam
- Cantos arredondados consistentes, sombras sutis, transições suaves no hover.
- Botões com peso visual e área de toque grande no celular.
- Imagens reais ou ilustrações coerentes — **nunca** placeholders cinza no produto final.

### 5. Responsivo de verdade
- Mobile-first. Teste em 375px de largura.
- Menus, botões e textos legíveis no celular.

## O que EVITA a "cara de IA"
- ❌ Gradiente roxo genérico em tudo.
- ❌ Emojis aleatórios como ícones.
- ❌ Texto "Lorem ipsum" ou genérico ("Solução inovadora para o seu negócio").
- ❌ Tudo centralizado e do mesmo tamanho.
- ✅ Conteúdo real, hierarquia visual, uma identidade coerente.

## Procedimento
1. Defina paleta + fontes ANTES de escrever o CSS (declare em variáveis CSS `:root`).
2. Construa mobile-first.
3. Revise contra a lista "cara de IA" acima.
4. Verifique no navegador com `playwright-qa` em 375px e 1280px; capture um screenshot
   para mostrar ao usuário.

> Se a tarefa for grande/criativa, considere também a skill `frontend-design` (nativa)
> para design de alto nível.
