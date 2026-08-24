#!/usr/bin/env node

import { Command } from "commander";
import { initCommand } from "./commands/init.js";
import { addCommand } from "./commands/add.js";

const program = new Command();

program
  .name("devstash")
  .description("Your personal code template stash")
  .version("0.1.0");

program.command("init").description("Initialize DevStash").action(initCommand);

program
  .command("add")
  .description("Add a template to the current project")
  .argument("<template>", "Template path")
  .argument("[name]", "Template name")
  .action(addCommand);

program.parse();
