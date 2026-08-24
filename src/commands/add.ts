import path from "node:path";
import fs from "fs-extra";
import { input } from "@inquirer/prompts";

import { TEMPLATES_DIR } from "../core/paths.js";
import { render } from "../core/renderer.js";

export async function addCommand(template: string, providedName?: string) {
  const templateDir = path.join(TEMPLATES_DIR, template);

  if (!(await fs.pathExists(templateDir))) {
    console.error(`Template not found: ${template}`);
    process.exitCode = 1;
    return;
  }

  const name =
    providedName ??
    (await input({
      message: "Name:",
    }));

  const variables = {
    name,
  };

  const files = await fs.readdir(templateDir);

  for (const file of files) {
    const source = path.join(templateDir, file);

    const stat = await fs.stat(source);

    if (!stat.isFile()) {
      continue;
    }

    const renderedFilename = render(file, variables);

    const destination = path.join(process.cwd(), renderedFilename);

    const content = await fs.readFile(source, "utf8");

    const renderedContent = render(content, variables);

    await fs.writeFile(destination, renderedContent, "utf8");

    console.log(`✓ ${renderedFilename}`);
  }
}
