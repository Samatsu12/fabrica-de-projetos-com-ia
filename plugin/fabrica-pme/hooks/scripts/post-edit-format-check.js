#!/usr/bin/env node
/**
 * Post Edit Format Check  (PostToolUse: Edit|Write|MultiEdit)
 *
 * Depois que um arquivo é gravado, faz uma checagem leve e avisa (sem bloquear)
 * sobre problemas comuns que pegam leigos: placeholders esquecidos, "Lorem ipsum",
 * TODO/FIXME, número de WhatsApp de exemplo, HTML sem <title>, etc.
 */

const fs = require("fs");

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
  const ti = input.tool_input || {};
  const file = ti.file_path || ti.path || "";
  if (!file) process.exit(0);

  let texto = "";
  try {
    texto = fs.readFileSync(file, "utf8");
  } catch (_) {
    process.exit(0);
  }

  const avisos = [];
  const lower = texto.toLowerCase();

  if (/lorem ipsum/i.test(texto)) avisos.push('texto "Lorem ipsum" ainda presente');
  if (/\b(TODO|FIXME)\b/.test(texto)) avisos.push("marcação TODO/FIXME pendente");
  if (/(seu-numero|seu_numero|DDDNUMERO|5511999999999|xxxxx)/i.test(texto))
    avisos.push("número/placeholder de WhatsApp de exemplo (troque pelo real)");
  if (/(seu-email|email@exemplo|exemplo@)/i.test(lower))
    avisos.push("e-mail de exemplo (troque pelo real)");

  if (/\.html?$/i.test(file)) {
    if (!/<title>/i.test(texto)) avisos.push("HTML sem <title> (importante para SEO/aba do navegador)");
    if (!/viewport/i.test(texto)) avisos.push("HTML sem meta viewport (pode ficar ruim no celular)");
  }

  if (avisos.length === 0) process.exit(0);

  process.stdout.write(
    JSON.stringify({
      systemMessage:
        "📝 Revisão rápida de " +
        require("path").basename(file) +
        ": " +
        avisos.join("; ") +
        ".",
    })
  );
  process.exit(0);
}
