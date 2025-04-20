#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const parser_1 = require("./utils/parser");
const filePath = process.argv[2];
if (!filePath) {
    console.error("❌ Please provide a Markdown file path.");
    process.exit(1);
}
const content = (0, fs_1.readFileSync)(filePath, "utf-8");
const result = (0, parser_1.parseMarkdownTasks)(content);
console.log(`✅ ${result.checked} / ${result.total} tasks completed.`);
console.log(result.allChecked ? "🎉 All tasks are done!" : "📝 Some tasks remain.");
