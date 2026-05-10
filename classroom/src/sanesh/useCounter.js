
import { useState } from "react";
function useCounter(x=0){
    const [count,setCount]=useState(x);

    function increase(){
        setCount(count+1);
    } [count,increase];
    return
}
export default useCounter;