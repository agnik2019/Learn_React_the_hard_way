import './App.css';
import SwitchTheme from './SwitchTheme';
import React,{useContext} from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import RefExample from "./components/RefExample";
import Stopwatch from "./components/stopWatch";
// import Demo2 from "./components/demo2";
// import Demo3 from "./components/Demo3";
// import Demo4 from "./components/Demo4";
// import Demo5 from "./components/Demo5";
import Demo7 from "./components/Demo7";
import {TreesContext} from "./"





function App() {
  const name = "Agnik";
  const message= "React is awesome!!!!";

  const {trees} = useContext(TreesContext);

  return (
   <div className="App">
     <div className="main">
     <SwitchTheme/>
      {/* <CreateTweet/>
      <TweetList name={name} message={message}/>   */}
     {/* <RefExample/> */}
     {/* <Stopwatch/> */}
     {/* <Demo2 /> */}
     {/* <Demo3 /> */}
    {/* <div>
      <h1>Trees I have heard of </h1>
      <ul>
        {trees.map((tree) => (
          <li key= {tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div> */}
    <Demo7 login="agnik2019"/>
      </div>
   </div>
  );
}

export default App;
