
import React,{useState,useRef} from 'react';

const RefExample = () => {
    const [myNum, setMyNum] = useState(0);
    const inputOne = useRef();
    const inputTwo = useRef();
    const getNumBox = () => {
        console.log("Hello");
        inputOne.current.style.width="400px"
    }
    const getTextBox = () => {
        console.log("World");
        console.log(inputTwo.current)
    }


    const countRef = useRef(0);
    
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log('I rendered!');
    return (
        <>
            <h2>LearnCodeOnline</h2>
            <input 
            style={{width:"100px"}}
            ref = {inputOne}
            value={myNum}
            type="number"
            onChange= {(e) => setMyNum(e.target.value)}/>

            <input value={myNum}
            ref= {inputTwo}
            type="text"
            onChange= {(e) => setMyNum(e.target.value)}/>
            <h3>Value is : {myNum}</h3>

            <button onClick= {()=> getNumBox()}>Rupees</button>
            <button onClick = {()=> getTextBox()}>Dollars</button>



         <button onClick={handle}>Click me</button>
         </>
    );
}

export default RefExample;