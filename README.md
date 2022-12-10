# Autocomplete sample component

An autocomplete component written in react and css modules, using storybook to drive UI changes and cypress for e2e tests!

This component should search the API https://api.publicapis.org/entries and enable an user to select an item.

There is an example application in nextjs to see the interaction.

## Description

This autocomplete component has:

- an uncontrolled input for text insertion
- use keyboard events to intercept Enter and Arrows keys on list results
- on click on results items
- highlight currently selected item
- a simple clear button to remove all text easily
- autofocus on mount of the input
- It should show a message if the search doesn't give any results
- min len of 3 chars on the input

I have used another parent component 'EntriesSearch' to segregate the 'business logic' of the search on the API, so the Autocomplete component and the other companion components are more generic and don't know any external requirements we can have.

EntriesSearch is the specialized component that solve the business logic requirements, the other components are UI components and more 'pure'.

The business logic rules are:

- min 3 chars to start a search on API
- non case sensitive text
- API search on https://api.publicapis.org/entries?title=<input>

## Styling

To make thinghs simple I have used CSS modules, that are already available on nextjs, without installing additional css processors like sass.

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see an example usage of this component.

## Storybook

Storybook is a tool that give us an UI to show off the components segregated from others. We can give different use cases and props so we can setup different UI scenarios to test thinghs easy.

Run

```
yarn storybook
```

to open a new browser tab with your Storybook on http://localhost:6006.

You could test the final component even without the dev server active here: http://localhost:6006/?path=/story/example-entriessearch--search

## Unit tests

I have used the common Jest to make unit tests, it's the one I saw more in reactjs projects.

a) Run

```
yarn test
```

to run unit tests with jest.

b) Run

```
yarn test:coverage
```

To get a coverage report from jest.

## End to End tests

I have used cypress that is a fantastic tool for e2e! With cypress we can make super fast e2e and testing the complete flow of the UI. I use the production build, so what is tested is the final output of nextjs build.

The beauty of cypress is that when running in interactive mode with the browser opened, you can see the test suite running on every change of the code!

### With dev server enabled

Run this command when you have the dev server (yarn dev) running:

```
yarn cypress
```

to run e2e tests with cypress in interactive mode using the dev server. NOTE: The dev server must be opened in another terminal and running or this will fail!

### Without the dev server enabled

Otherwise if you want to test without the dev server opened, you could run this command to make a production build, it will start a server then run cypress on it:

```
yarn cypress:production
```
