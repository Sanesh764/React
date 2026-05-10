
import { useState } from "react";
export default function LudoBoard (){
    let [Moves,setMoves]=useState({blue:0 ,red:0,yellow:0,green:0});
    let [arr,setArr]=useState(["no moves"]);
    let updateBlue=()=>{
        console.log(`Moves.blue= ${Moves.blue}`);
        // setMoves((prevMoves)=>{
        //     return {...prevMoves,blue:prevMoves.blue+1};
        // });
        arr.push("blue moves");
        setArr((preArr)=> {
            return [...arr,"blue moves"];
        });
        console.log(arr);
    };

    let updateyellow=()=>{
        console.log(`Moves.yellow= ${Moves.yellow}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:prevMoves.yellow+1};
        });
    }
    let updategreen=()=>{
        console.log(`Moves.green= ${Moves.green}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green+1};
        });
    }
    let updatered=()=>{
        console.log(`Moves.red= ${Moves.red}`);
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red+1};
        });
    }
    return(
        <div>
        <p>Game begins!</p>
        <>{arr}</>
        <div className="board">
            <p>Blue moves={Moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

            <p>Yellow moves={Moves.yellow}</p>
            <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateyellow}>+1</button>

            <p>Green moves={Moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>
            <p>Red moves={Moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
        </div>
        </div>
    )
}