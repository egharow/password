import { useState,useEffect } from "react"; 

function Password(props){
    const {pass, allow} = props;
    const [passLevel, setPassLevel] = useState('Weak')

    useEffect(()=>{
        if(pass.length<3){
        setPassLevel("weak")
        allow(true)
        }

        else if(pass.length>2 && pass.length<7){
            setPassLevel("Medium")
            allow(false)
            }
 
        else if(pass.length>6){
            setPassLevel("High")
            allow(false)
            }
    },[setPassLevel,pass.length]) 
 
    return (
        <div>
            <p>{passLevel}</p>
        </div>
 
    )
    }
export default Password;