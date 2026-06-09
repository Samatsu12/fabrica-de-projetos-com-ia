#!/usr/bin/env node
/**
 * Stop Session Brief  (Stop)
 *
 * Ao encerrar a resposta, registra um pequeno resumo do que foi alterado na pasta
 * (arquivos modificados recentemente) em .fabrica/sessao.log e mostra uma dica de
 * próximo passo. Ajuda o leigo a não se perder entre uma conversa e outra.
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
  const cwd = input.cwd || process.cwd();

  // Evita loop infinito: se este Stop já veio de um hook, não faz nada
  if (input.stop_hook_active) process.exit(0);

  let recentes = [];
  try {
    const limite = Date.now() - 60 * 60 * 1000; // última hora
    recentes = listar(cwd, limite).slice(0, 15);
  } catch (_) {}

  if (recentes.length === 0) process.exit(0);

  const linha =
    "[" +
    new Date().toISOString() +
    "] Arquivos tocados nesta sessão:\n  - " +
    recentes.map((r) => path.relative(cwd, r)).join("\n  - ") +
    "\n";

  try {
    const dir = path.join(cwd, ".fabrica");
    fs.mkdirSync(dir, { recursive: true });
    fs.appendFileSync(path.join(dir, "sessao.log"), linha);
  } catch (_) {}

  process.exit(0); // silencioso: só registra no log
}

function listar(dir, desde, prof = 0, acc = []) {
  if (prof > 3) return acc;
  let itens = [];
  try {
    itens = fs.readdirSync(dir, { withFileTypes: true });
  } catch (_) {
    return acc;
  }
  for (const it of itens) {
    if (/^(node_modules|\.git|\.fabrica|dist|build)$/.test(it.name)) continue;
    const full = path.join(dir, it.name);
    try {
      if (it.isDirectory()) listar(full, desde, prof + 1, acc);
      else {
        const st = fs.statSync(full);
        if (st.mtimeMs >= desde) acc.push(full);
      }
    } catch (_) {}
  }
  return acc.sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
}
