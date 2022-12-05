import { useState } from "react"; 
function Counter(props){
    const {delta , max} = props
    const [count, setCount] =useState(1)
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
        setCount(
            function(oldCount){
                return 1
            }
        )
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