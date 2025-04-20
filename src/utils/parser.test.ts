import { parseMarkdownTasks } from "./parser";

describe("parseMarkdownTasks", () => {
  it("should count total and checked tasks correctly", () => {
    const md = `
    - [x] Done task
    - [ ] Not done task
    - [x] Another done task
    `;
    const result = parseMarkdownTasks(md);
    expect(result.total).toBe(3);
    expect(result.checked).toBe(2);
    expect(result.allChecked).toBe(false);
  });

  it("should return allChecked = true when all are done", () => {
    const md = `- [x] All done`;
    const result = parseMarkdownTasks(md);
    expect(result.allChecked).toBe(true);
  });

  it("should handle no task lists gracefully", () => {
    const md = `# No tasks here`;
    const result = parseMarkdownTasks(md);
    expect(result.total).toBe(0);
    expect(result.checked).toBe(0);
    expect(result.allChecked).toBe(false);
  });
});
