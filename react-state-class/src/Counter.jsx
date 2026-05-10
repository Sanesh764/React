import { useState } from "react"
export default function Counter(){
    function init(){
        console.log("init was called");
        return Math.random();
    }
    let [count,setCount]=useState(init);//initialization
    console.log("component is rendered!");
    // console.log(`count=${count}`);
    let inCount=()=>{
        setCount((currCount)=>{
           return currCount +1;
        });
        // setCount((currCount)=>{
        //    return currCount +1;
        // });
        // setCount((currCount)=>{
        //    return currCount +1;
        // });
        // setCount(count+1);increase by 1
        // setCount(23); fixed 1 bar increse hoga bas
        
    }
    return(
        <div>
            <h3>count ={count}</h3>
            <button onClick={inCount}>increse count</button>
        </div>
    );
}