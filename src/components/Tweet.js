import React from 'react'
import "./tweet.css"
// const Tweet = (props) => {
//     return (
//         <div className="tweet">
//             <h2>Name {props.author}</h2>
//             <h3>{props.message}</h3>
//             <button>Delete</button>
//             <button>Like</button>
//         </div>
//     )
// }
//we actually dont require props

const Tweet = ({author, message}) => {
    return (
        <div className="tweet">
            <h2>Name {author}</h2>
            <h3>{message}</h3>
            <button>Delete</button>
            <button>Like</button>
        </div>
    )
}

export default Tweet
