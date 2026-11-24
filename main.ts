// A Day of One-Line Pitches — entry program (Node 22, erasable TS, stdlib only).
// Writes one persuasive sentence (<= 240 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "That app idea you've carried in your head for years — tell it to an AI agent on make.fun and you'll have a working first version today, free to try, no coding from you, and you keep whatever it builds.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, pitch, "utf8");
