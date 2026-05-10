
import { useState } from "react";
export default function LikeButton(){
    
    let [isLiked,setisLiked]=useState(false);
    let [Clicks,setClicks]=useState(0);
    let toggleLike=()=>{
        setisLiked(!isLiked);
        setClicks(Clicks+1);
    }
    let styles={color:"red"};
    return(
        <div>
            <p>click={Clicks}</p>
            <p onClick={toggleLike}>
                {
                    isLiked ?
                    (<i style={styles} className="fa-etch fa-solid fa-heart"></i>

                    ): (
                     <i className="fa-solid fa-heart"></i>
                    )
                }    
            </p>
            
        </div>
    )
}