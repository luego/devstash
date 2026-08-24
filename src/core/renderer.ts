import Handlebars from "handlebars";

export function render(
  content: string,
  variables: Record<string, string>,
): string {
  const template = Handlebars.compile(content);

  return template(variables);
}
