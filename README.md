This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Storybook

Run

```
yarn storybook
```

to open a new browser tab with your Storybook on http://localhost:6006/.

## Unit tests

Run

```
yarn test
```

to run unit tests with jest.

Run

```
yarn test:coverage
```

To get a coverage report from jest.

## e2e tests

Run

```
yarn cypress
```

to run e2e tests with cypress in interactive mode.

To run headless run

```
yarn cypress:headless
```
