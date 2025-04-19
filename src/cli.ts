#!/usr/bin/env node

import { readFileSync } from "fs";
import { parseMarkdownTasks } from "./utils/parser";

const filePath = process.argv[2];

if (!filePath) {
  console.error("❌ Please provide a Markdown file path.");
  process.exit(1);
}

const content = readFileSync(filePath, "utf-8");
const result = parseMarkdownTasks(content);

console.log(`✅ ${result.checked} / ${result.total} tasks completed.`);
console.log(
  result.allChecked ? "🎉 All tasks are done!" : "📝 Some tasks remain."
);
