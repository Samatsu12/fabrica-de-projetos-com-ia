---
name: security-review
description: Revisa o projeto em busca de senhas/chaves expostas, arquivos .env vazando, permissões perigosas e dados sensíveis no código. Use antes de publicar, antes de subir para o GitHub, ou quando o usuário pedir "checar segurança", "revisar antes de publicar" ou trabalhar com dados de clientes.
---

# Security Review — travas de segurança para leigos

Sua função é proteger o usuário leigo dos erros de segurança mais comuns — os que vazam
senha, derrubam projeto ou expõem dados de cliente. Linguagem simples, ação concreta.

## Quando usar
- Antes de publicar (`/deploy-check`) ou subir para o GitHub.
- Sempre que houver dados de clientes, chaves de API ou banco de dados.

## Checagem (rode todas)

### 1. Segredos no código
Procure por chaves, tokens e senhas escritos direto nos arquivos:
- Padrões: `API_KEY`, `SECRET`, `PASSWORD`, `TOKEN`, `Bearer `, `sk-`, `AKIA` (AWS),
  strings de conexão com senha, chaves do Supabase/Stripe/Mercado Pago.
- **Correto:** esses valores vão em um arquivo `.env`, e o código lê de variável de
  ambiente. Explique isso ao usuário se ele não souber.

### 2. `.gitignore`
Confirme que existe um `.gitignore` ignorando: `.env`, `node_modules/`, arquivos de banco
local, credenciais. Se for subir para o GitHub e o `.env` não estiver ignorado, **pare e
avise** — é o erro nº 1 de vazamento.

### 3. Dados sensíveis e LGPD
- Há dados pessoais de clientes (CPF, telefone, e-mail) no repositório? Não deveria.
- O projeto coleta mais dados do que usa? Recomende coletar o mínimo.

### 4. Permissões e exposição
- Banco com acesso público sem regra (ex.: Supabase RLS desligado)? Avise.
- Endpoints/admin sem nenhuma proteção?
- Formulários sem validação básica (entrada do usuário indo direto pro banco)?

### 5. Dependências
Se houver `package.json`, sugira rodar `npm audit` e relate vulnerabilidades graves em
linguagem simples.

## Entrega
Liste os achados em **3 níveis**, do pior para o melhor:
- 🔴 **Crítico (resolver agora):** ...
- 🟡 **Atenção (resolver antes de escalar):** ...
- 🟢 **Ok / boas práticas já presentes:** ...

Para cada item crítico, dê o **passo concreto** para corrigir.

## Cuidados
- Não exponha o próprio segredo encontrado na resposta inteira (mascarar: `sk-****`).
- Este é um apoio, **não** substitui uma auditoria profissional para projetos sérios.
- Para revisão mais profunda de código, sugira a skill nativa `security-review` / `/security-review`.
