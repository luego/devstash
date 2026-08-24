# DevStash

A simple, local-first CLI for storing and reusing your personal code templates across projects.

DevStash is language and editor agnostic. It doesn't care whether you're working with React, React Native, .NET, Flutter, NestJS, Solidity, Python, or anything else.

Your templates are just **files and folders**.

No database. No account. No cloud service. No editor plugin.

## Why DevStash?

Developers often rewrite or copy the same small pieces of code between projects:

- React components
- React Native components
- Hooks
- Utilities
- .NET classes
- Result patterns
- API controllers
- DTOs
- Docker files
- GitHub Actions
- Solidity contracts
- Configuration files

Instead of searching through old projects, DevStash keeps reusable templates locally and lets you generate them directly from your terminal.

For example:

```bash
ds add rn/component ProfileCard
```

Given this template:

```tsx
import { Text, View } from 'react-native';

type {{name}}Props = {};

export function {{name}}({}: {{name}}Props) {
  return (
    <View>
      <Text>{{name}}</Text>
    </View>
  );
}
```

DevStash generates:

```tsx
import { Text, View } from "react-native";

type ProfileCardProps = {};

export function ProfileCard({}: ProfileCardProps) {
  return (
    <View>
      <Text>ProfileCard</Text>
    </View>
  );
}
```

## Philosophy

DevStash should remain simple.

The core idea is:

```text
Template
   ↓
Variables
   ↓
Render
   ↓
Current Project
```

DevStash does not need to understand the programming language being used.

A template is just text.

```text
{{name}}
```

becomes:

```text
ProfileCard
```

That's it.

## Tech Stack

DevStash is currently built with:

- Node.js
- TypeScript
- pnpm
- Commander
- Inquirer
- Handlebars
- fs-extra

## Requirements

Make sure you have installed:

- Node.js
- pnpm
- Git

Check your installation:

```bash
node --version
pnpm --version
git --version
```

## Installation for Development

Clone the repository:

```bash
git clone <repository-url>
cd devstash
```

Install dependencies:

```bash
pnpm install
```

Build the CLI:

```bash
pnpm build
```

Install it globally from the local project:

```bash
pnpm add -g .
```

You should now have access to:

```bash
devstash
```

and the shorter alias:

```bash
ds
```

Verify the installation:

```bash
ds --help
```

or:

```bash
ds --version
```

## Initialize DevStash

Run:

```bash
ds init
```

DevStash creates its local directory inside your home directory:

```text
~/.devstash/
└── templates/
```

This location works independently from your projects and editors.

For example, on macOS:

```text
/Users/your-user/.devstash/templates/
```

On Windows:

```text
C:\Users\your-user\.devstash\templates\
```

## Creating a Template

Templates are organized using regular directories.

For example:

```text
~/.devstash/templates/
└── rn/
    └── component/
        └── {{name}}.tsx
```

The `{{name}}.tsx` file could contain:

```tsx
import { Text, View } from 'react-native';

type {{name}}Props = {};

export function {{name}}({}: {{name}}Props) {
  return (
    <View>
      <Text>{{name}}</Text>
    </View>
  );
}
```

The `{{name}}` value is rendered using Handlebars.

## Using a Template

Move to any project:

```bash
cd my-react-native-project
```

Run:

```bash
ds add rn/component ProfileCard
```

DevStash will find:

```text
~/.devstash/templates/rn/component
```

and generate:

```text
ProfileCard.tsx
```

inside your current directory.

You can use another name:

```bash
ds add rn/component UserAvatar
```

to generate:

```text
UserAvatar.tsx
```

## Interactive Name

The name argument is optional.

Instead of:

```bash
ds add rn/component ProfileCard
```

you can run:

```bash
ds add rn/component
```

DevStash will ask:

```text
? Name:
```

Enter:

```text
ProfileCard
```

and the template will be rendered using that value.

## Language Agnostic

Templates are not limited to React Native.

You can organize your stash however you want:

```text
~/.devstash/templates/
├── react/
│   ├── component/
│   └── hook/
├── rn/
│   ├── component/
│   └── screen/
├── next/
│   └── api-route/
├── nestjs/
│   └── controller/
├── dotnet/
│   ├── result/
│   ├── entity/
│   └── repository/
├── flutter/
│   └── widget/
├── solidity/
│   └── contract/
└── docker/
    └── node/
```

The DevStash engine treats all of them the same way.

## Available Commands

### Initialize

```bash
ds init
```

Creates the DevStash home and templates directories.

### Add Template

```bash
ds add <template> [name]
```

Example:

```bash
ds add rn/component ProfileCard
```

or:

```bash
ds add rn/component
```

## Project Structure

```text
devstash/
├── src/
│   ├── commands/
│   │   ├── add.ts
│   │   └── init.ts
│   ├── core/
│   │   ├── paths.ts
│   │   └── renderer.ts
│   └── cli.ts
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```

## Development

Run the CLI directly from TypeScript:

```bash
pnpm dev --help
```

Initialize DevStash:

```bash
pnpm dev init
```

Test a template:

```bash
pnpm dev add rn/component TestComponent
```

Build:

```bash
pnpm build
```

After making changes, reinstall the local package globally when necessary:

```bash
pnpm add -g .
```

Then test it from another directory:

```bash
cd ../some-project

ds --help
```

## Roadmap

DevStash is intentionally starting small.

Planned improvements include:

- Recursive templates
- Multi-file templates
- Multiple template variables
- Automatic variable detection
- Interactive template selection
- `ds list`
- `ds search`
- `ds info`
- Custom destination with `--to`
- File overwrite protection
- Save existing code as a template
- Git-based template synchronization

A future workflow could look like:

```bash
ds save ./src/components/EmptyState
```

followed later by:

```bash
ds add rn/empty-state NoResults
```

Git synchronization will allow the same personal template collection to be shared between machines without requiring a database or DevStash cloud service.

## Design Principles

When adding features to DevStash, keep these principles in mind:

1. **Keep it simple.**
2. **Stay language agnostic.**
3. **Do not require a database.**
4. **Do not depend on a specific editor.**
5. **Templates should remain normal files and folders.**
6. **Avoid language-specific template engines or services.**
7. **The filesystem is the source of truth.**
8. **Prefer explicit behavior over hidden magic.**

Most importantly:

> DevStash must remain language-agnostic. Templates are files, not programming-language constructs.

## Current Status

DevStash is currently an early personal MVP.

The first goal is simple:

```bash
ds add rn/component ProfileCard
```

should save you from writing the same code again.

Everything else can come later.

## License

Private/personal project for now.
