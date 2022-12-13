import { useState,useEffect } from "react"; 

function Password(props){
    const {pass} = props
    const [passLevel, setPassLevel] = useState("Weak")

    useEffect(()=>{
        if(pass.length<3)
        setPassLevel("weak")
        if(pass.length>2 && pass.length<7)
        setPassLevel("Medium")
        if(pass.length>6)
        setPassLevel("High")
    },[setPassLevel, pass])

    return (
        <div>
            <p>{passLevel}</p>
        </div>

    )
    }
export default Password;