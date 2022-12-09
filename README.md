# Autocomplete sample component

An autocomplete component using storybook and cypress!

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see an example usage of this component.

## Run with docker

You can run the app using docker running those commands:

```
docker build -t autocomplete-component-test .
docker run -p 3000:3000 autocomplete-component-test
```

then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storybook

Run

```
yarn storybook
```

to open a new browser tab with your Storybook on http://localhost:6006.

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

- Run

```
yarn cypress
```

to run e2e tests with cypress in interactive mode using the dev server. NOTE: it must be opened in another terminal!

- Run

```
yarn e2e
```
