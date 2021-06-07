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
```javascript
function Demo2() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(`http://api.github.com/users`)
        .then((response) => response.json())
        .then(setData)
    },[]);
    if(data){
    return (
        <div>
            <ul>
                {data.map((user)=> (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
            <button onClick={()=> setData([])}>Remove me</button>
        </div>
    );
    }
    return <p>No Users</p>
}
```

# UseReducer hook
```javascript
function Demo3() {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            <input
            type="checkbox"
            value = {checked}
            onClick={()=> setChecked((checked)=> !checked)}/>
           {checked ? "checked": "not Checked"}
        </div>
    )
}
```
using useReducer hook 
```javascript
function Demo3() {
    const [checked, toggle] = useReducer(
        (checked)=> !checked,false);
    return (
        <div>
            <input
            type="checkbox"
            value = {checked}
            onClick={toggle}/>
           {checked ? "checked": "not Checked"}
        </div>
    )
}
```
```javascript
import React,{useReducer} from 'react'
const initialState = {
    message:"hello"
};
function reducer(state, action)
{
    switch(action.type){
        case "yell":
            return {
                message:`hey!! THE MESSAGE IS ${state.message}`
            };
        case "whisper":
            return{
                message:`Excuse me !!! The message is ${state.message}`
            }
    }
}
function Demo4() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Message : {state.message}</p>
            <button onClick={()=> dispatch({type:"yell"})}>Yell</button>
            <button onClick={()=> dispatch({type:"whisper"})}>Whisper</button>

        </div>
    )
}

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


```javascript
function Demo5() {
    const sound = useRef();
    const color = useRef();

    const submit = (e) => {
        e.preventDefault();
        const SoundVal = sound.current.value;
        const ColorVal = color.current.value;
        alert(`${SoundVal} sounds like ${ColorVal}`);
        sound.current.value = "";
        color.current.value = "";
    }
    return (
        <form onSubmit = {submit}> 
            <input 
                ref= {sound}
                type="text" 
                placeholder="sound"/>
            <input 
                ref = {color}
                type="color" />
            <button>ADD</button>

        </form>
    )
}

```


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

# Create your custom hook
```javascript
import {useState, useEffect} from "react";

export function useFetch(uri){
    const [data,setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        if(!uri) return;
        fetch(uri)
            .then((data)=> data.json())
            .then(setData)
            .then(()=> setLoading(false))
            .catch(setError)
    },[uri]);

    return {loading, data, error};

}
```

```javascript
import {useFetch} from "./useFetch"
function Demo7({login}){
    const {loading, data, error} = 
        useFetch(`https://api.github.com/users/${login}`);

    if(loading) return <h1>Loading...</h1>
    if(error)
        return(<pre>{JSON.stringify(error,null,2)}</pre>);
    return (
<div>
    <img src={data.avatar_url} alt={data.login} />
    <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}

    </div>
</div>
    );

}
```

```javascript
<Demo7 login="agnik2019"/>
```

```javascript
import {useState} from "react";

export function UserInput(initialValue){
    const [value, setValue] = useState(initialValue);
    return [
        {
            value, 
            onChange: (e) => setValue(e.target.value)
        },
        ()=> setValue(initialValue)
    ];
}
```

If we dont want to use our own custom hook the code will be like below

```javascript
import React,{useState} from 'react';
// controlled component

function Demo6() {
    const [sound, setSound] = useState();
    const [color,setColor] = useState();

    const submit = (e) => {
        e.preventDefault();
        alert(`${sound} sounds like ${color}`);
        setSound("");;
        setColor("#000000");
    }
    return (
        <form onSubmit = {submit}> 
            <input 
                value= {sound}
                type="text" 
                placeholder="sound"
                onChange= {(e) => setSound(e.target.value)}/>
            <input 
                value = {color}
                type="color" 
                onChange= {(e) => setColor(e.target.value)}/>
                
            <button>ADD</button>

        </form>
    )
}

export default Demo6;

```
By using custom hook we can increase reusability of code.
```javascript
import React from 'react';
import {UserInput} from "./userInput"

function Demo6() {
    const [titleProps, resetTitle] = UserInput("");
    const [colorProps,resetColor] = UserInput("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`${titleProps.value} sounds like ${colorProps.value}`);
        resetTitle();
        resetColor();
    }
    return (
        <form onSubmit = {submit}> 
            <input 
               {...titleProps}
                type="text" 
                placeholder="sound"
                />
            <input 
            {...colorProps}
                type="color" 
                />
                
            <button>ADD</button>

        </form>
    )
}

export default Demo6;

```
