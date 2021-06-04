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
