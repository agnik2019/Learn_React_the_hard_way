import React,{useRef} from 'react';


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

export default Demo5;
