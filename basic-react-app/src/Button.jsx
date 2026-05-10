

function printHello(){
    console.log("hello sanesh!");
}
function printBye(){
    console.log("Bye sanesh!");
}
function handleHover(){
    console.log("Hover");
}
// export default function Button(){
//     return (
//         <div>
//             <button onClick={printHello}>click me</button>
//              <p onClick={printBye}>this parah is for event demo</p>
//         </div>
//     )
// }

export default function Button(){
    return (
        <div>
            <button onMouseOver={handleHover}>click me</button>
             <p onClick={printBye}>this parah is for event demo</p>
        </div>
    )
}