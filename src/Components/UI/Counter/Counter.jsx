import React from 'react';
import {useState} from "react";

const Counter = () => {


    const [likes, setLikes] = useState(10)

    let inc=()=>{   setLikes(likes + 1);}
    let dec=()=>{   setLikes(likes - 1);}

    return (
        <div>

            <h1>{likes}</h1>
            <button onClick={()=>inc()} >Increment</button>
            <button onClick={()=>dec()}>Decrement</button>
            
        </div>
    );
};

export default Counter;