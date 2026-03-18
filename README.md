# TanStack Blog

Personal blog built with **TanStack Start v2**, **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- **File-based routing** - Routes defined by file structure in `src/routes/`
- **Server-Side Rendering (SSR)** - Full SSR support with streaming
- **End-to-end Type Safety** - Full TypeScript across client and server
- **Modern stack** - React 19, TanStack Router, Vinxi build tool
- **Tailwind CSS** - Clean, responsive design
- **Deploy-ready** - Optimized for Cloudflare Pages, Vercel, or Node.js hosting

## 📁 Project Structure

```
tanstack-blog/
├── src/
│   ├── routes/
│   │   ├── __root.tsx          # Root layout
│   │   ├── index.tsx           # Home page
│   │   ├── about.tsx           # About page
│   │   ├── blog.tsx            # Blog listing
│   │   └── blog.$slug.tsx      # Individual post
│   ├── app.tsx                 # App entry
│   ├── router.tsx              # Router config
│   └── ssr.tsx                 # SSR handler
├── app.config.ts               # Vinxi config
├── tailwind.config.js          # Tailwind config
├── tsconfig.json               # TypeScript config
└── package.json
```

## 🛠️ Setup & Development

### Prerequisites

- Node.js 20+
- npm/pnpm/yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build
npm run build

# Start production server
npm run start
```

### Type Check

```bash
npm run typecheck
```

## 📝 Adding Blog Posts

To add new posts, edit `src/routes/blog.$slug.tsx` and add entries to the `posts` object:

```typescript
const posts = {
  "your-post-slug": {
    title: "Your Post Title",
    date: "2026-03-20",
    content: `
## Your Content

Write your blog post here with markdown-like syntax...
    `,
  },
};
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Layout

Modify `src/routes/__root.tsx` to change the header, footer, or overall layout.

## 🚀 Deployment

### Cloudflare Pages

1. Connect your GitHub repo to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `.output`
4. Deploy!

### Vercel

1. Import repo to Vercel
2. Framework preset: Node.js
3. Build command: `npm run build`
4. Deploy!

### Self-hosted (Node.js)

```bash
npm run build
npm run start
# Runs on port 3000
```

## 📄 License

MIT License - feel free to use for your own blog!

## 👤 Author

**Sam Kalammallah** - [@SamX23](https://github.com/SamX23)

---

Built with ❤️ using TanStack Start
