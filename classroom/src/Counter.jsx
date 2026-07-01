import { useState } from "react";

export function Counter(){
    let [counter,setCounter]=useState(0);

    function inc(){
        if(counter<15){
            setCounter(counter+1);
            console.log(counter);
        }
        
        
    }
     function dec(){
        if(counter>0){
            setCounter(counter-1);
            console.log(counter);
        }
       
        
    }
    return(
        <>
        <h1>counter={counter}</h1>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        </>
    )
}