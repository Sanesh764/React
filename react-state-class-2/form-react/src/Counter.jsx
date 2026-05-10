import { useState ,useEffect} from "react"

export default function Counter(){
    let [countx,seCountx]=useState(0);
    let [county,seCounty]=useState(0);

    let incCountx=()=>{
        seCountx(currCount => currCount+1);
    }
    let incCounty=()=>{
        seCounty(currCount => currCount+1);
    }
    useEffect(function printHello(){
        console.log("this is the side -effect")
    },
    [countx,county]
);
    return(
        <div>
            <h3>countx={countx}</h3>
            <button onClick={incCountx} >+1</button>

             <h3>county={county}</h3>
            <button onClick={incCounty} >+1</button>
        </div>
    )
}