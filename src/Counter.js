import { useState,useEffect } from "react"; 
function Counter(props){
    const {delta , max , getReset,needToReset} = props
    const [count, setCount] =useState(1)
    
    useEffect(()=>{
        if(needToReset)
        setCount(0)
        getReset(false)
    },[needToReset, getReset])
    
    function incr(){
        setCount(
            function(oldCount){
                if(oldCount + delta < max){
                    return oldCount +delta
                }
                return 1
            }
        )
    }

    function restart(){
        getReset(true)
        //setCount(0)
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>Counter is at {count}</p>
            <button onClick={incr}>Click to add {delta} to counter</button>
            <button onClick={restart}>Click to restart counter</button>

        </div>

    )
    }
export default Counter;