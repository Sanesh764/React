
export default function MsgBox({userName,textColour}){
    let styles={color:textColour};
    return(
        <h1 style={styles}>hello,{userName}</h1>
    )
}