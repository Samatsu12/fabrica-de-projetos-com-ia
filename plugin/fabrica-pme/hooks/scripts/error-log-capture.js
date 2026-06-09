#!/usr/bin/env node
/**
 * Error Log Capture  (PostToolUse: Bash)
 *
 * Quando um comando falha (exit code != 0), guarda o erro em .fabrica/erros.log
 * com data, comando e saída de erro. Assim o leigo pode mostrar o histórico de
 * erros para a IA depois ("deu esse erro, o que faço?").
 */

const fs = require("fs");
const path = require("path");

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
  const resp = input.tool_response || {};
  const cmd = (input.tool_input && input.tool_input.command) || "";

  // Detecta falha por código de saída ou por conteúdo de erro
  const code =
    resp.exit_code !== undefined
      ? resp.exit_code
      : resp.exitCode !== undefined
      ? resp.exitCode
      : resp.code;
  const stderr = resp.stderr || "";
  const falhou =
    (typeof code === "number" && code !== 0) ||
    (!!stderr && /error|erro|exception|traceback|fatal|not found|cannot|failed/i.test(stderr));

  if (!falhou) process.exit(0);

  const cwd = input.cwd || process.cwd();
  const entrada =
    "\n[" +
    new Date().toISOString() +
    "]\nCOMANDO: " +
    cmd +
    "\nCÓDIGO: " +
    (code === undefined ? "?" : code) +
    "\nERRO:\n" +
    String(stderr || resp.stdout || "").slice(0, 2000) +
    "\n---";

  try {
    const dir = path.join(cwd, ".fabrica");
    fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(path.join(dir, "erros.log"), entrada);
  } catch (_) {}

  process.stdout.write(
    JSON.stringify({
      systemMessage:
        "🧯 Um comando falhou. O erro foi salvo em .fabrica/erros.log — se precisar, peça à IA: \"deu esse erro, o que faço?\".",
    })
  );
  process.exit(0);
}
