# 📝 markdown-task-checker

> ✅ Check completion of markdown task lists from the command line!  
> Perfect for validating PR checklists or tracking TODOs in your docs.

---

## 📦 Installation

```bash
npm install -g markdown-task-checker
```

> Or just use it with `npx` (no install needed):

```bash
npx markdown-task-checker ./README.md
```

---

## 🚀 Usage

### Basic

```bash
markdown-task-checker ./example.md
```

### Output Example

```text
✅ 3 / 5 tasks completed.
📝 Some tasks remain.
```

---

## ✨ Features

- Parses task lists like `- [ ]`, `- [x]` from markdown files
- Reports how many tasks are completed
- Simple CLI interface
- Great for CI automation or everyday note-checking

---

## 🛠 CLI Options (예정 기능)

```bash
markdown-task-checker [file.md]
```

- [ ] `--require-all`: Fail if not all tasks are completed
- [ ] `--percent`: Show percentage of completed tasks
- [ ] `--json`: Output as JSON

> 🤫 _These will be added soon! Stay tuned._

---

## 🧪 Example Input (`example.md`)

\`\`\`md

# My Checklist

- [x] Write the parser
- [ ] Write tests
- [x] Create CLI
- [ ] Polish README
      \`\`\`

---

## ✅ Sample Output

```bash
markdown-task-checker example.md
```

```text
✅ 2 / 4 tasks completed.
📝 Some tasks remain.
```

---

## 🔗 Related

- Inspired by [GitHub Flavored Markdown](https://github.github.com/gfm/)
- Ideal for GitHub PR templates

---

## 📄 License

[MIT](./LICENSE)

---

## 🙌 Author

Made with ❤️ by [SangYoon Lee](https://github.com/sangyoon-lee1231)
