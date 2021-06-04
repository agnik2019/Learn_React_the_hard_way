import './App.css';
import SwitchTheme from './SwitchTheme';
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";


function App() {
  const name = "Agnik";
  const message= "React is awesome!!!!";

  
  return (
   <div className="App">
     <div className="main">
     <SwitchTheme/>
      <CreateTweet/>
      <TweetList name={name} message={message}/>  
      </div>
   </div>
  );
}

export default App;
