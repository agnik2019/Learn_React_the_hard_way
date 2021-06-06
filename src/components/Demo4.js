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

export default Demo4
