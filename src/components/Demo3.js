import React,{useReducer} from 'react'

// function Demo3() {
//     const [checked, setChecked] = useState(false);
//     return (
//         <div>
//             <input
//             type="checkbox"
//             value = {checked}
//             onClick={()=> setChecked((checked)=> !checked)}/>
//            {checked ? "checked": "not Checked"}
//         </div>
//     )
// }


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
export default Demo3
