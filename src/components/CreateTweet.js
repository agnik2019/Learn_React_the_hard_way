import React,{useState} from 'react'
import "./tweet.css"

function CreateTweet() {

    const [textInput, setTextInput] = useState("");
    // functions
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    }
    return (
        <div className="create">
        <form>
            <textarea onChange={userInputHandler} cols="50" rows="5"></textarea>
            <button>Submit</button>
            <h1 onClick={() => setTextInput(" ")}>{textInput}</h1>
        </form>
        </div>
    )
}

export default CreateTweet;
