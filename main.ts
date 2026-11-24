// Ridiculous at First Glance, Real by the Second — make.fun program/v1 entry.
// Writes one sentence (<=200 chars) pitching a bizarre startup idea that
// sounds absurd until you see the customers and the money.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Rent-a-Mourner sends trained strangers to weep convincingly at funerals, because grieving families pay $400 a service for a room that feels loved.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
if ([...PITCH].length > 200 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-200 chars, got ${[...PITCH].length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
