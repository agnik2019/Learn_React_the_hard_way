import React,{useState, useEffect} from 'react'

function Demo2() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(`http://api.github.com/users`)
        .then((response) => response.json())
        .then(setData)
    },[]);
    if(data){
    return (
        <div>
            <ul>
                {data.map((user)=> (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
            <button onClick={()=> setData([])}>Remove me</button>
        </div>
    );
    }
    return <p>No Users</p>
}

export default Demo2;
