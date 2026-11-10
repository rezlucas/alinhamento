// Wraps src/diario.html (the claude.ai artifact source, which has no document skeleton)
// into a full standalone index.html for static hosting (Vercel).
import { readFileSync, writeFileSync } from "node:fs";
const body = readFileSync("src/diario.html", "utf8");
const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style></head><body>
${body}
</body></html>
`;
writeFileSync("index.html", html);
console.log("index.html gerado");
