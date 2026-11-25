import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The deadline was 9am. I was up at 8, ready, focused, and then the kettle boiled and the next thing I knew it was Thursday.";

function fail(message: string): never {
  throw new Error(message);
}

if (LINE.length < 1 || LINE.length > 200) {
  fail(`entry must be 1 to 200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  fail("entry must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  fail("entry must not start or end with white space");
}
for (const ch of LINE) {
  if (ch.charCodeAt(0) < 0x20) {
    fail("entry must not contain control characters");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== LINE) {
  fail("round-trip check failed: entry.txt does not match the line");
}

console.log(`wrote ${outPath} (${LINE.length} chars)`);
