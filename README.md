# Product details sample
Just a sample for e-commerce product details page using Next.js framework

## Demo
https://product-details-sample.vercel.app/

## Setup project
To run the development server:
```bash
npm i
npm run dev
# or
yarn
yarn dev
# Then open http://localhost:3000
```

## Compile project
```bash
npm run build
# or
yarn build
```

## Run Test project
```bash
npm run dev
npm run test
# or
yarn dev
yarn test
```

## Build to production
The easiest way to deploy project to production is to use the Vercel platform from the creators of Next.js
https://vercel.com/

For other options of host
https://nextjs.org/docs/deployment#other-hosting-options

## Project structure
```
product-details-sample
├─ src
│  ├─ app.d.ts
│  ├─ components
│  │  ├─ layout.tsx
│  │  ├─ product-details
│  │  │  ├─ images-preview.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ size.tsx
│  │  │  ├─ styled.ts
│  │  │  └─ types.ts
│  │  └─ styled
│  │     ├─ index.ts
│  │     └─ theme.ts
│  ├─ pages
│  │  ├─ _app.tsx
│  │  ├─ _document.tsx
│  │  ├─ api
│  │  │  └─ product
│  │  │     └─ [id].ts
│  │  └─ index.tsx
│  └─ utils
│     ├─ app-context.ts
│     ├─ consts.ts
│     └─ helper.ts
├─ __tests__
│  └─ e2e
│     └─ index.test.js
├─ public
│  ├─ favicon.png
│  ├─ fonts
│  │  ├─ Helvetica-Bold.ttf
│  │  ├─ Helvetica-BoldOblique.ttf
│  │  ├─ Helvetica-Compressed.otf
│  │  ├─ Helvetica-Light.ttf
│  │  ├─ Helvetica-Oblique.ttf
│  │  ├─ Helvetica-Regular.ttf
│  │  └─ helvetica-RoundedBold.otf
│  ├─ images
│  │  ├─ Capri-Triple-White-1.jpg
│  │  ├─ Capri-Triple-White-2.jpg
│  │  └─ Capri-Triple-White-3.jpg
├─ package.json
├─ .babelrc
├─ .eslintrc.json
├─ .gitignore
├─ .next
├─ .prettierignore
├─ .prettierrc
├─ LICENSE
├─ README.md
├─ jest-puppeteer.config.js
├─ next-env.d.ts
├─ tsconfig.json
└─ yarn.lock
```

## What's inside project
The main component is `product-details` inside `src/components`, it's contain **images previewer** and structure of product details: title, price, sizes, and description of product.

The app simulate product api `[URL]/api/product/[id]`

### Features of project structure
- Using Next.js, a framework that support server side rendering, pre-rendering, react.js, and node.js for backend.
- Using main directories: Components, Pages, Utils
- Using Typescript, Styled-components, Custom fonts
- Project have setup for code style and testing tools: eslint, prettier, jest, and puppeteer
- All links inside project use absolute paths instead of nested like `../../..`
  Paths available: 
  - `"@assets": "./src/assets",`
  - `"@components": "./src/components",`
  - `"@pages": "./src/pages",`
  - `"@utils": "./src/utils",`
  - `"@images": "./src/assets/images",`
  - `"@styled": "./src/components/styled"`
- Project using **theming** feature of styled-components and could activate dark mode style or other theming.
  Please check `src/components/styled/theme.ts` and `src/pages/_app.tsx`

### For work of 4 hours
The project built within 4 hours time frame, If I have more time to invest I want to add these features

- More work on design and css
- Activate zoom feature to enlarge images of product
- Activate dark mode
- Enhance accessibility
- Add more tests like: snapshots, coverage code, and unit testing
- Enhance header and footer

### What could be enhanced!
- Real product API that return these details:
```javascript
title: string,
price: number,
size: number[],
images: [
  {
    alt: string,
    url: string,
  },
  ...
],
desc: string
```
- To have a full sample of e-commerce site, the project needs full design, and these pages: Home, Search, Login/Signup, Listing products, Cart, Checkout, Profile, Client Dashboard, static pages like about/contact us.
- Product details could have reviews and more sophisticated details


