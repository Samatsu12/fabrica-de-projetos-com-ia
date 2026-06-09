#!/usr/bin/env node
/**
 * Prompt Guardrails  (UserPromptSubmit)
 *
 * Ensina o método na prática: quando o pedido do usuário está vago demais
 * (ex.: "melhore", "cria um site", "faz aí"), injeta um lembrete para a IA pedir
 * o contexto que falta antes de sair construindo. Não bloqueia o prompt.
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
  const prompt = (input.prompt || "").trim();
  if (!prompt) process.exit(0);

  const palavras = prompt.split(/\s+/).length;
  const vagoCurto = palavras <= 4;
  const pedidoVago =
    /^(melhore?|melhora|conserta|arruma|faz(\s+a[ií])?|cria?\s+(um|uma)\s+(site|sistema|app|p[áa]gina)\b|deixa\s+melhor|tá ruim)/i.test(
      prompt
    );

  // Se já tem sinais de bom briefing, não interfere
  const temContexto = /p[úu]blico|objetivo|contexto|primeira vers[ãa]o|crit[ée]rio|para quem|dor/i.test(
    prompt
  );

  if (temContexto || (!vagoCurto && !pedidoVago)) process.exit(0);

  const contexto =
    "[Lembrete do método Fábrica de Projetos] O pedido acima parece vago. " +
    "Antes de construir, confirme com o usuário, de forma simples: (1) qual o objetivo/dor, " +
    "(2) para quem é, (3) o que a primeira versão precisa ter, (4) o que evitar agora. " +
    "Se o usuário já deu esse contexto em mensagens anteriores, ignore este lembrete.";

  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "UserPromptSubmit",
        additionalContext: contexto,
      },
    })
  );
  process.exit(0);
}
