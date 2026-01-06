# Nova News Portal

A world-class, responsive news portal frontend built with React, Tailwind CSS, and Lucide icons. Inspired by the clean, information-dense layouts of Prothom Alo and the BBC. Live site: [Nova News](https://kporus.github.io/nova-news-portal-v2/)

## 🚀 Project Setup

This project is designed as a modern ES6 module application that runs directly in the browser using `esm.sh` for dependency management. No heavy build tools like Webpack or Vite are strictly required for local previewing, though it follows standard React patterns. This project is built with **Vite + React + TypeScript** and can be run with either **pnpm** or **npm**.

### Prerequisites

- Node.js installed
- Optionally, `pnpm` installed globally:
  ```bash
  npm install -g pnpm
  ```

---

## ▶️ Using pnpm

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Start the development server**

   ```bash
   pnpm dev
   ```

   Open the URL Vite prints (usually `http://localhost:5173`).[3][1]

3. **Production build**
   ```bash
   pnpm build
   pnpm preview
   ```

---

## ▶️ Using npm

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Production build**
   ```bash
   npm run build
   npm run preview
   ```

## 📁 Folder Structure

```text
/
├── components/
│   ├── Layout/          # Global UI components (Header, Footer)
│   ├── News/            # News-specific atoms (NewsCard, FeaturedHero, Skeletons)
│   └── Loader/          # Specific page loader with Skeletons (Home page, Article detail page)
├── context/             # Global state management (NewsContext)
├── pages/               # Top-level view components (Home, ArticleDetails)
├── App.tsx              # Main routing and layout wrapper
├── constants.ts         # Mock data and configuration constants
├── types.ts             # Shared TypeScript interfaces and types
├── index.tsx            # Application entry point
└── index.html           # Base HTML template & CDN configurations
```

## 🛠 Key Decisions & Architecture

### 1. Typography & Aesthetic

To achieve a "News Portal" feel, we utilized a dual-font strategy:

- **Merriweather (Serif)**: Applied to headlines and article content to provide a classic, trustworthy, and readable journalistic feel.
- **Inter (Sans-serif)**: Used for UI elements, navigation, and metadata to ensure modern clarity and high performance.

### 2. Polymorphic Component Design (`NewsCard`)

The `NewsCard` component accepts a `variant` prop (`vertical` | `horizontal` | `compact`).

- **Reasoning**: This drastically reduces code duplication. The same logic for date formatting and category display is shared, while the layout adapts to the specific visual requirements of the "Latest News" list vs. the "Trending" sidebar.

### 3. Responsive Layout Strategy

The layout uses a **Fluid Grid System**:

- **Mobile**: A single-column feed focusing on readability.
- **Tablet**: Introduces horizontal cards to better utilize screen width.
- **Desktop**: A sophisticated 12-column grid featuring a main news stream (8 columns) and a "Trending/Newsletter" sidebar (4 columns), mimicking high-end news portals.

### 4. Performance & UX

- **Skeleton Loaders**: Included custom `SkeletonHero`, `SkeletonArticleDetrailCard` and `SkeletonCard` components to prevent layout shift and improve perceived performance during "data fetching."
<!-- - **Image Handling**: Uses `aspect-video` and `aspect-[4/3]` utilities to maintain consistent image ratios across different screen sizes. -->
- **Search Integration**: A real-time filtering system that updates the news feed as the user types, providing instant feedback.

## ✨ Features at a Glance

- **Dynamic News Engine**: Real-time category filtering and full-text search.
- **Persistent Interactions**: Article-specific comment sections that persist during the session.
- **Journalistic UX**: Reading time estimates, author credits, and rich-text content rendering.
- **Responsive Grid**: Adapts seamlessly from 4-column desktop layouts to single-column mobile story feeds.
