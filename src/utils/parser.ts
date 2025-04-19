export interface TaskStats {
  total: number;
  checked: number;
  allChecked: boolean;
}

export function parseMarkdownTasks(content: string): TaskStats {
  const taskRegex = /^\s*[-*]\s+\[( |x|X)]\s+/gm;
  const matches = [...content.matchAll(taskRegex)];

  const total = matches.length;
  const checked = matches.filter(
    (match) => match[1].toLowerCase() === "x"
  ).length;

  return {
    total,
    checked,
    allChecked: total > 0 && total === checked,
  };
}
