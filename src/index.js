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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
