#!/usr/bin/env node
/**
 * Preflight Secret Check  (PreToolUse: Edit|Write|MultiEdit|Bash)
 *
 * Trava de segurança nº 1 do pacote. Antes de gravar/rodar algo, procura por
 * senhas, chaves de API e tokens escritos direto no conteúdo. Se achar algo que
 * PARECE um segredo de verdade (e não uma variável de ambiente ou placeholder),
 * pede confirmação ao usuário antes de prosseguir.
 *
 * Nunca derruba a sessão: em qualquer erro interno, libera a ação.
 */

let raw = "";
process.stdin.on("data", (d) => (raw += d));
process.stdin.on("end", () => {
  try {
    run(JSON.parse(raw || "{}"));
  } catch (_) {
    process.exit(0); // falha segura: não bloqueia
  }
});

function run(input) {
  const tool = input.tool_name || "";
  const ti = input.tool_input || {};

  // Junta todo o texto que será gravado/executado
  let content = "";
  if (tool === "Bash") content = ti.command || "";
  else
    content = [ti.content, ti.new_string, ti.new_str, ti.replace]
      .filter(Boolean)
      .join("\n");

  if (!content) process.exit(0);

  // Linhas que claramente NÃO são segredo hardcoded
  const safe =
    /process\.env|import\.meta\.env|os\.environ|getenv|System\.getenv|ENV\[|\$\{|<%|seu[-_ ]?token|sua[-_ ]?chave|your[-_ ]?key|placeholder|example|xxx+|\*{4,}/i;

  const patterns = [
    { re: /sk-[A-Za-z0-9]{20,}/, nome: "chave da OpenAI" },
    { re: /sk_live_[A-Za-z0-9]{16,}/, nome: "chave secreta do Stripe (live)" },
    { re: /AKIA[0-9A-Z]{16}/, nome: "Access Key da AWS" },
    { re: /eyJ[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}\./, nome: "token JWT (ex.: service_role do Supabase)" },
    { re: /ghp_[A-Za-z0-9]{30,}/, nome: "token do GitHub" },
    {
      re: /(api[_-]?key|apikey|secret|password|senha|token|client[_-]?secret)\s*[:=]\s*["'][^"'\s]{8,}["']/i,
      nome: "senha/chave escrita direto no código",
    },
  ];

  const achados = [];
  for (const line of content.split("\n")) {
    if (safe.test(line)) continue;
    for (const p of patterns) {
      if (p.re.test(line)) achados.push(p.nome);
    }
  }

  if (achados.length === 0) process.exit(0);

  const unicos = [...new Set(achados)];
  const motivo =
    "⚠️ Possível segredo exposto detectado (" +
    unicos.join(", ") +
    "). Segredos NÃO devem ficar no código — use um arquivo .env e leia por variável de ambiente. " +
    "Confirme apenas se tiver certeza de que é um valor de exemplo/placeholder.";

  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "ask",
        permissionDecisionReason: motivo,
      },
    })
  );
  process.exit(0);
}
