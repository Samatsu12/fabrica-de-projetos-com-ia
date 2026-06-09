#!/usr/bin/env node
/**
 * Commit Message Generator  (PreToolUse: Bash)
 *
 * Quando detecta `git commit` SEM mensagem (sem -m e sem -F), avisa para usar uma
 * mensagem padronizada e simples, evitando o editor interativo travar a sessão.
 * Em commits que já têm mensagem, não interfere.
 */

let raw = "";
process.stdin.on("data", (d) => (raw += d));
process.stdin.on("end", () => {
  try {
    run(JSON.parse(raw || "{}"));
  } catch (_) {
    process.exit(0);
  }
});

function run(input) {
  const cmd = (input.tool_input && input.tool_input.command) || "";
  if (!/\bgit\s+commit\b/.test(cmd)) process.exit(0);

  const temMensagem = /\s-m\b|\s--message\b|\s-F\b|\s--file\b|\s-C\b/.test(cmd);
  if (temMensagem) process.exit(0);

  const motivo =
    "✍️ Esse `git commit` está sem mensagem (-m) e pode abrir um editor que trava a sessão. " +
    'Use uma mensagem curta e padronizada, no formato: tipo: descrição. ' +
    'Ex.: `git commit -m "feat: adiciona botão de WhatsApp na landing"`. ' +
    "Tipos comuns: feat (novo), fix (correção), style (visual), docs (textos), chore (ajustes).";

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
