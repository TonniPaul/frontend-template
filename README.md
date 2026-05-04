# 🚀 Next.js Starter Template

A production-ready **Next.js template** designed to eliminate repetitive setup and help you start building immediately.

---

## ✨ Features

This template comes pre-configured with:

- ⚡ **Next.js (App Router)**
- 🟦 **TypeScript**
- 🎨 **Tailwind CSS**
- 🧹 **ESLint** (linting & best practices)
- 🎯 **Prettier** (code formatting)
- 🐶 **Husky** (Git hooks)
- 🔍 **lint-staged** (run checks on staged files)
- 🧩 **SVG Sprite System** (type-safe icon usage)
- 🔄 **GitHub Actions** (CI ready)
- 📦 **pnpm** (fast package manager)

---

## 📦 Getting Started

### 1. Use This Template

Clone the repository:

```bash
git clone https://github.com/your-username/your-template.git my-app
cd my-app
```

Or click **"Use this template"** on GitHub.

---

### 2. Install Dependencies

```bash
pnpm install
```

---

### 3. Start Development Server

```bash
pnpm dev
```

App runs at:

```
http://localhost:3000
```

---

## 📜 Available Scripts

This project uses **pnpm**.

---

### 🚀 Development

```bash
pnpm dev
```

Starts the development server using **Turbopack**.

---

### 🏗 Build

```bash
pnpm build
```

Creates an optimized production build.

---

### ▶️ Start (Production)

```bash
pnpm start
```

Runs the app in production mode.

---

### 🧹 Lint

```bash
pnpm lint
```

Runs ESLint checks.

---

### 🎯 Format Code

```bash
pnpm format
```

Formats all files using Prettier.

---

### 🔍 Check Formatting

```bash
pnpm check-format
```

Checks formatting without modifying files.

---

### 🐶 Husky Setup

```bash
pnpm prepare
```

Initializes Git hooks (runs automatically after install).

---

## ⚙️ Pre-commit Workflow

This template enforces code quality using **Husky + lint-staged**.

On every commit:

- ✅ ESLint runs
- ✅ Prettier formats staged files
- ❌ Commit is blocked if issues are found

---

## 🧩 SVG Sprite System

This template uses a **manual SVG sprite workflow** for performance and consistency.

---

### 📁 Location

```
/public/assets/sprite.svg
```

---

### ➕ Adding a New Icon

#### 1. Convert Your SVG

Go to:

👉 https://svgsprit.es/

- Paste your SVG
- Copy the generated `<symbol />`

---

#### 2. Paste into `sprite.svg`

Add it inside the `<defs>` block:

```xml
<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="your-icon-name">
  <path fill="currentColor" d="..." />
</symbol>
```

---

#### 3. Update Icon Types

```ts
export type IconName = 'close' | 'your-icon-name';
```

---

### 🎨 Using Icons

```tsx
<SvgIcon name="close" />
```

### 💡 Tips

```tsx
<SvgIcon name="close" className="w-6 h-6 text-red-500" />
```

- Icons inherit color via `currentColor`
- Use Tailwind classes for sizing
- Always use unique `id` values

---

### ⚠️ Common Mistakes

- ❌ Forgetting to update `IconName`
- ❌ Using duplicate IDs
- ❌ Pasting full `<svg>` instead of `<symbol>`

---

## 🗂 Project Structure

```
.
├── app/                # App Router (pages, layouts)
├── components/         # Reusable components
├── lib/                # Utilities & helpers
├── public/
│   └── assets/         # SVG sprite lives here
├── styles/             # Global styles
├── .husky/             # Git hooks
├── .github/            # CI workflows
```

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🔄 CI (GitHub Actions)

CI is pre-configured to:

- Install dependencies
- Run lint checks
- Build the app
- Deploy to Vercel (if enabled)

Location:

```
.github/workflows/
```

---

## 🧠🔐 GitHub Secrets Setup (Required for Deployment)

To enable deployment via GitHub Actions, you must add the following secrets to your repository:

VERCEL_ORG_ID
VERCEL_PROJECT_ID
VERCEL_TOKEN

---

## 🧠 Recommended Workflow

1. Create a new project from this template
2. Rename project & update metadata
3. Set environment variables
4. Start building immediately 🚀

---

## 👤 Author

**Paul Ariyo-Adeoye(TonniPaul)**
Frontend Engineer • Next.js • TypeScript

- 🌐 GitHub: https://github.com/tonnipaul
- 🐦 Twitter/X: https://twitter.com/tonnipaul
- 💼 LinkedIn: https://linkedin.com/in/tonnipaul

---

## 💬 Support

If you find this template useful:

- ⭐ Star the repository
- 🐛 Report issues
- 🔧 Suggest improvements

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

## 📄 License

MIT — free for personal and commercial use.

---

## 💡 Acknowledgements

Built to simplify and standardize modern web project setup using:

- Next.js
- TypeScript
- Tailwind CSS
- ESLint & Prettier
- Husky & lint-staged

---

## 🚀 Final Note

This template exists to help you skip setup and focus on what matters — building.

Use it, improve it, and make it yours.
