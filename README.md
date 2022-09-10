---
marp: true
theme: gaia
style: |
  section.lead h1 {
  text-align: center;
  }
  section.middle li{
  text-align: center;
  }
---
<!-- headingDivider: 2 -->
<!--
theme: gaia
class: lead
-->

# React Essentials

## Why React?
* increasingly complex Apps, require more DOM manipulations resulting in a slower user experience. 
* React addresses performance issues using the concept of a virtual DOM, an in-memory representation of the DOM that only updates nodes that have changed and not the entire DOM itself. 
* Reusable components written entirely in JSX, an XML/HTML-like syntax that extends ECMAScript so that the code can coexist with JavaScript code.

## create react Apps
`npx create-react-app my-app`
* `npx` will install the latest version of `create-react-app` instead of us having to manually install it and use it.
* `create-react-app` will create a new directory called `my-app` and will create a new React app inside of it.
* `my-app` is the name of the directory that will be contain our react app
## start
`cd my-app`
`npm start`
* `npm start` will start the app in the current directory.
* a browser will open and the app will load.
## how it works transpile
Transpile is a process that takes JSX and converts it to JavaScript. 
* React uses Babel to transpile JSX to JavaScript.

## what is react DOM
* The react-dom package serves as the entry point to the DOM to render the JSX by using the virtual DOM. Why isn't that just included in the react package? Because React isn't confined to the browser. Paired with the right libraries, React can be used in native app development or even VR development!
* The react-dom package is a library that provides a bridge between React and the DOM.

## what is the virtual DOM
* The virtual DOM is a representation of the DOM that React uses to determine which nodes need to be updated.

## App.js
* The App.js file is the entry point to the React app.
* React components follow pascal case naming convention. example App.js, HelloWorld.js
* Imports: You need to import React in every component file. You can also import any images or CSS you want to use at the top.

## JSX and React.createElement
* JSX is a syntax extension to JavaScript that allows you to write HTML-like syntax in JavaScript. 
  * `<div user={user}>Hello, {user.name}</div>>` is JSX syntax.
* React.createElement is a function that takes two arguments: the tag name and the attributes.
  * `React.createElement('div', {user}, 'Hello, ' + user.name)` is equivalent to `<div user={user}>Hello, {user.name}</div>`
```jsx
  let reactElem = React.createElement('div', {user}, 'Hello, ' + user.name);
  return (
    <>
      From react: {reactElem}
      From JSX: <div user={user}>Hello, {user.name}</div>
    </>
  );
```

## Reusable Components
* A reusable component is a component that can be used in multiple places in your app.
* We will follow Atomic Design principles and create reusable components.
  * divide your app into Atomic levels
  * `Atoms` are the smallest components that can be reused, example a button, a text input, a card, etc.
  * `Molecules` are the components that are composed of multiple atoms, example a form, a list, a table, etc.
  * `Organisms` are the components that are composed of multiple molecules, example a page, a list of posts, a list of users, etc.
Create a Folder `src/components` and 3 folders: `Atoms`, `Molecules`, `Organisms`.

## key
* The key prop is used to uniquely identify each element in an array of elements.
* Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique. This helps React keep track of items in the virtual DOM.

## rendering elements
* `map` is a function that takes an array and returns an array of elements.
* we will use map to render list of items in the virtual DOM.
* we include the key prop to uniquely identify each item in the array.
* virtual dom will keep track of node changes and only update the changed nodes.
* map will return the list of items from the items array.
```jsx
const items = [{id: 1, name: 'item1'}, {id: 2, name: 'item2'}];
return (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);
```
## React Testing Library
* The React Testing Library, provides functions that will help
  * test React components, 
  * the capacity to render components and 
  * query functions that can return DOM elements.

* The jest-dom package, which is a library that extends Jest with custom matchers to enable inspection of various parts of the DOM.

## Testing React Components
`import { render, cleanup } from '@testing-library/react';`
* `render` is a function that takes a component and returns a render result.
* `cleanup` is a function that cleans up the render result i.e removes the DOM elements to prevent memory leaks.
`import '@testing-library/jest-dom/extend-expect';`
* `extend-expect` is a function that extends the expect function to add custom matchers.
* `@testing-library/jest-dom` is a library that provides custom matchers for DOM elements.

## Test Cycle
* import the components you want to test
* configure the test environment
* call cleanup after each test `afterEach(cleanup)`
* describe the test
```js
  afterEach(cleanup);
  
  describe('App', () => {
    it('renders without crashing', () => {
      const { getByText } = render(<App />);
      const linkElement = getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
```

## `asFragment`
* `asFragment` is a function that returns a serialized HTML representation of the component.
* we can use `asFragment` to test the component.
```jsx
  it('renders without crashing', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
```

