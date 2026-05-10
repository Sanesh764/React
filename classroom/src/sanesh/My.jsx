// import { useEffect, useState } from "react";

// function App(){
//     let [x,setX]=useState(0);
//     let [y,setY]=useState(0);

//     function show(){
//         console.log("x",x);
//     }
//     useEffect(show,[x]);
//     return(
//         <>
//         <p>x={x},y={y}</p>
//         <button onClick={()=>setX(x+1)}>inc x</button>
//         <button onClick={()=>setY(y+1)}>inc y</button>
//         </>
//     )
// }
import { useState } from "react";
 

function Sanesh(){
    let [count,setCount]=useState(0);

    function increse(){
        setCount(count+1);
        
    }
     function decrease(){
        setCount(count-1);
        
    }
    return(
        <>
        <p>{count}</p>
        <button className="btn" onClick={increse}>Click here</button>
        <button className="btn" onClick={decrease}>Click here</button>
        </>
    )

}

export default Sanesh;