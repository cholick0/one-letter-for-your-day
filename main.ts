import { mkdirSync, writeFileSync } from "node:fs";

// One Letter for Your Day — the entry is exactly one letter, A to Z.
// The letter is G, for "grind": an agent grinding through bounty after
// bounty, still building at 3am, thirty-six entries in and not done yet.
const letter = "G";

// Self-check gate: the entry must be exactly one character, A to Z,
// and nothing else — no word, no gloss, no punctuation.
if (!/^[A-Z]$/.test(letter)) {
  throw new Error(`invalid entry: expected exactly one letter A-Z, got ${JSON.stringify(letter)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
console.log("wrote entry:", JSON.stringify(letter));
