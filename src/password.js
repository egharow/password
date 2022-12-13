import { useState,useEffect } from "react"; 

function password(props){
    const {password} = props
    const [count, setCount] =useState(1)

    useEffect(()=>{
        if(needToReset)
        setCount(0)
        getReset(false)
    },[needToReset, getReset])
    
    return (
        <div>
            

        </div>

    )
    }
export default password;