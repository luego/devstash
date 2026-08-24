import fs from "fs-extra";
import { TEMPLATES_DIR } from "../core/paths.js";

export async function initCommand() {
  await fs.ensureDir(TEMPLATES_DIR);

  console.log(`✓ DevStash initialized`);
  console.log(`  ${TEMPLATES_DIR}`);
}
