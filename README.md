# Getting Started with React

I am learning React. Here are my notes.

```javascript

  //state
  const [colorTheme, setColorTheme] = useState('theme-white');

  //effect
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if(currentThemeColor){
      setColorTheme(currentThemeColor);
    }
  },[]);

```
In that example, we are seeing that usestate is used for storing and updating the state of a component.
useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

 **useEffect() — the hook that manages side-effects in functional React components.**
```javascript
 function Greet({ name }) {
  const message = `Hello, ${name}!`; // Calculates output

  // Bad!
  document.title = 'Greetings page'; // Side-effect!

  return <div>{message}</div>;       // Calculates output
}
```
How to decouple rendering from the side-effect? Welcome useEffect() — the hook that runs side-effects independently of rendering.
```javascript
import { useEffect } from 'react';

function Greet({ name }) {
  const message = `Hello, ${name}!`;   // Calculates output

  useEffect(() => {
    // Good!
    document.title = 'Greetings page'; // Side-effect!
  }, []);

  return <div>{message}</div>;         // Calculates output
}
```
### useEffect() hook accepts 2 arguments:
```javascript
useEffect(callback[, dependencies]);
```
- callback is the callback function containing side-effect logic. useEffect() executes the callback function after React has committed the changes to the screen.
- dependencies is an optional array of dependencies. useEffect() executes callback only if the dependencies have changed between renderings.
Put your side-effect logic into the callback function, then use the dependencies argument to control when you want the side-effect to run. That’s the sole purpose of useEffect().

## The dependencies of useEffect()
dependencies argument of useEffect(callback, dependencies) lets you control when the side-effect runs. When dependencies are:

**A) Not provided: the side-effect runs after every rendering.**
```javascript
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });  
}
```
**B) An empty array []: the side-effect runs once after the initial rendering.**
```javascript
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}
```
**C) Has props or state values [prop1, prop2, ..., state1, state2]: the side-effect runs only when any depenendecy value changes.**
```javascript
import { useEffect, useState } from 'react';

function MyComponent({ prop }) {
  const [state, setState] = useState('');
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
  }, [prop, state]);
}
```
Let’s detail into the cases B) and C) since they’re used often.

## The side-effect on component did mount
To invoke a side-effect once after the component mounting, use an empty dependencies array:
```javascript
import { useEffect } from 'react';

function Greet({ name }) {
  const message = `Hello, ${name}!`;

  useEffect(() => {
    // Runs once, after mounting
    document.title = 'Greetings page';
  }, []);

  return <div>{message}</div>;
}
```
useEffect(..., []) was supplied with an empty array as a dependencies argument. When configured in such a way, the useEffect() is going to execute the callback just once, after initial mounting.

Even if the component re-renders with different name property, the side-effect runs only once after the first render:
```javascript
// First render
<Greet name="Eric" />   // Side-effect RUNS

// Second render, name prop changes
<Greet name="Stan" />   // Side-effect does NOT RUN

// Third render, name prop changes
<Greet name="Butters"/> // Side-effect does NOT RUN
```

# UseRef hook

UseState is used for rerendering the component whenever the value of the state changes. However, keep in mind that useRef doesn't notify you when its content changes. Mutating the .current property doesn't cause a re-render. If you want to run some code when React attachs or detaches a ref to a DOM node, you may want to use a callback ref instead.

```javascript
const refContainer = useRef(initialValue)
```
useRef returns a mutable ref object whose .current property is initialized to the passed argument(initialValue). The returned object will persist for the full lifetime of the component.

reference.current accesses the reference value, and reference.current = newValue updates the reference value. Pretty simple.

**There are 2 rules to remember about references:**

1. The value of the reference is persisted (stays the same) between component re-renderings;
2. Updating a reference doesn’t trigger a component re-rendering.


# useContext
```javascript
import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const TreesContext = createContext();

const trees = [
  {id:"1", type:"Mapple"},
  {id:"2", type:"Oak"},
  {id:"3", type:"Apple"},
  {id:"4", type:"Mango"},

]

ReactDOM.render(
  <React.StrictMode>
    <TreesContext.Provider value = {{trees}}>
    <App />
    </TreesContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

```

```javascript
import {TreesContext} from "./"

function App() {

  const {trees} = useContext(TreesContext);

  return (
   <div className="App">
      <h1>Trees I have heard of </h1>
      <ul>
        {trees.map((tree) => (
          <li key= {tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

