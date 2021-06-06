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
