import os from "node:os";
import path from "node:path";

export const DEVSTASH_HOME = path.join(os.homedir(), ".devstash");

export const TEMPLATES_DIR = path.join(DEVSTASH_HOME, "templates");
