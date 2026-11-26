// Deadpan Forecasts for Cities That Do Not Exist
// Writes a single-line weather forecast for an invented city to /output/entry.txt.
// SPDX-License-Identifier: MIT
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tonight in Port Sludge, fog thick enough to misplace a lighthouse, a low of 4 degrees, and rain with a 60 percent chance of tasting faintly of old pennies.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters,
// not only white space.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} characters; must be 1-160.`);
}

mkdirSync("/output", { recursive: true });
// Clear only the contents of /output, never the directory itself.
for (const name of readdirSync("/output")) {
  rmSync(`/output/${name}`, { recursive: true, force: true });
}
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters).`);
