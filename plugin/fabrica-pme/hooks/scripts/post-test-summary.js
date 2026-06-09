#!/usr/bin/env node
/**
 * Post Test Summary  (PostToolUse: Bash)
 *
 * Quando o comando rodado foi um teste (npm test, pytest, vitest, jest, playwright...),
 * resume o resultado em uma linha amigável. Em outros comandos, não faz nada.
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
  const ehTeste = /(npm|yarn|pnpm)\s+(run\s+)?test|pytest|jest|vitest|playwright\s+test|go\s+test|mvn\s+test/i.test(
    cmd
  );
  if (!ehTeste) process.exit(0);

  const resp = input.tool_response || {};
  const saida =
    (typeof resp === "string" ? resp : resp.stdout || resp.output || "") +
    "\n" +
    (resp.stderr || "");

  let resumo;
  const mPass = saida.match(/(\d+)\s+pass(ed|ou|aram)?/i);
  const mFail = saida.match(/(\d+)\s+fail(ed|ou|aram)?|(\d+)\s+failing/i);
  const falhou = /fail|error|✗|✕|FAILED/i.test(saida) && !/0\s+fail/i.test(saida);

  if (mPass || mFail) {
    const passou = mPass ? mPass[1] : "?";
    const falhas = mFail ? mFail[1] || mFail[2] || mFail[3] : "0";
    resumo =
      (falhou ? "🔴" : "✅") +
      " Testes: " +
      passou +
      " passaram, " +
      falhas +
      " falharam.";
  } else {
    resumo = falhou
      ? "🔴 Os testes parecem ter falhado. Veja a saída acima."
      : "✅ Testes executados (sem falhas detectadas).";
  }

  process.stdout.write(JSON.stringify({ systemMessage: resumo }));
  process.exit(0);
}
