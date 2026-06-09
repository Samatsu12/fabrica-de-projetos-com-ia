#!/usr/bin/env node
/**
 * Pre Deploy Checklist  (PreToolUse: Bash)
 *
 * Quando detecta um comando de publicação (vercel, netlify deploy, git push,
 * firebase deploy, railway up...), lembra o checklist de publicação antes de
 * prosseguir. Não bloqueia: pede confirmação ("ask").
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
  const ehDeploy =
    /(vercel(\s+--prod|\s+deploy)?|netlify\s+deploy|firebase\s+deploy|railway\s+up|gh-pages|surge|git\s+push)\b/i.test(
      cmd
    );
  if (!ehDeploy) process.exit(0);

  const motivo =
    "🚀 Antes de publicar, confirme o checklist do deploy-checker:\n" +
    "  1. QA passou (carrega, botões funcionam, ok no celular)\n" +
    "  2. Segurança ok — SEM segredos no código, .env ignorado no .gitignore\n" +
    "  3. Textos revisados (sem Lorem ipsum / placeholders)\n" +
    "  4. WhatsApp, e-mail e links reais no lugar\n" +
    "  5. Variáveis de ambiente cadastradas no painel da plataforma\n" +
    "Confirme para prosseguir com a publicação.";

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
