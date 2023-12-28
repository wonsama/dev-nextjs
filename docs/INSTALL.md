# INSTALL

> since 23.12.28
> nextjs(14), react(18), tailwindcss, shadcn-ui, typescript, eslint

## PC

- macOS : 16-inch, 2019
  - AMD Radeon Pro 5500M 4 GB
  - Intel UHD Graphics 630 1536 MB
  - 16GB 2667 MHz DDR4
  - sonoma 14.2
- nodejs 20.10.0 LTS

## 의존성 설치

> [see more](https://ui.shadcn.com/docs/installation/next)

```bash
# 설치 시 모든 항목은 기본값으로 설정되어 있습니다.
npx create-next-app@latest dev-nextjs --typescript --tailwind --eslint
cd dev-nextjs
npx shadcn-ui@latest init
```

## application 폴더 구조

```txt
.
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## button 컴포넌트 설치 및 테스트

```bash
# install component
npx shadcn-ui@latest add button
```

```tsx
// app/page.tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

```bash
# run dev server : http://localhost:3000
npm run dev
```

## 참조

- [Tailwind CSS Full Course 2023 | Build and Deploy a Nike Website | Tailwind CSS Tutorial](https://www.youtube.com/watch?v=27JtRAI3QO8)
- [Tailwind playground](https://play.tailwindcss.com/)
- [flowbite - breadcrumb](https://flowbite.com/docs/components/breadcrumb/)
