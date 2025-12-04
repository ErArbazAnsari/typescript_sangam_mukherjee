# TypeScript Project Setup Guide

## Step 1: Initialize Project

Open terminal and run:

```bash
npm init -y
npm install -D typescript
npx tsc --init
```

**What this does:**

-   `npm init -y` - Creates a new `package.json` with default settings
-   `npm install -D typescript` - Installs TypeScript as a dev dependency
-   `npx tsc --init` - Creates a `tsconfig.json` configuration file

---

## Step 2: Update package.json

Add build and development scripts to your `package.json`:

```json
{
    "scripts": {
        "build": "tsc -p tsconfig.json",
        "dev": "tsc -w -p tsconfig.json"
    }
}
```

**Script Explanations:**

-   `npm run build` - Compiles TypeScript files once
-   `npm run dev` - Compiles TypeScript in watch mode (auto-recompiles on file changes)

---

## Step 3: Update tsconfig.json

Replace the default `tsconfig.json` with this configuration:

```json
{
    "compilerOptions": {
        "target": "es2022",
        "module": "es2022",
        "moduleResolution": "bundler",
        "strict": true,
        "noUncheckedIndexedAccess": true,
        "exactOptionalPropertyTypes": true,
        "useUnknownInCatchVariables": true,
        "skipLibCheck": true,
        "rootDir": "src",
        "outDir": "dist"
    },
    "include": ["src"],
    "exclude": ["dist"]
}
```

**Configuration Explanations:**

| Option                        | Purpose                                                     |
| ----------------------------- | ----------------------------------------------------------- |
| `target: "es2022"`            | Compiles to ES2022 JavaScript standard                      |
| `module: "es2022"`            | Uses ES2022 module system                                   |
| `moduleResolution: "bundler"` | Uses modern module resolution strategy                      |
| `strict: true`                | Enables all strict type checking options                    |
| `noUncheckedIndexedAccess`    | Prevents unsafe index access on arrays/objects              |
| `exactOptionalPropertyTypes`  | Requires exact optional property types                      |
| `useUnknownInCatchVariables`  | Catch block variables default to `unknown` instead of `any` |
| `skipLibCheck: true`          | Skips type checking of declaration files                    |
| `rootDir: "src"`              | Root directory for input TypeScript files                   |
| `outDir: "dist"`              | Output directory for compiled JavaScript files              |
| `include: ["src"]`            | Include all files in the `src` directory                    |
| `exclude: ["dist"]`           | Exclude the `dist` directory from compilation               |

---

## Step 4: Project Structure

Create the following folder structure:

```
project-root/
├── src/
│   ├── index.ts
│   └── (your .ts files here)
├── dist/
│   └── (compiled .js files - auto-generated)
├── package.json
├── tsconfig.json
└── node_modules/
```

---

## Usage

-   **Development mode:** `npm run dev` (watches for changes)
-   **Build for production:** `npm run build` (one-time compilation)

---

## Quick Start Commands

```bash
# Create a new TypeScript project from scratch
npm init -y && npm install -D typescript && npx tsc --init

# Run in development mode
npm run dev

# Build for production
npm run build

# Check if TypeScript version is installed
npx tsc --version
```
