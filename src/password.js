import { useState,useEffect } from "react"; 

function Password(props){
    const {pass, /*allowSumbit*/} = props
    const [passLevel, setPassLevel] = useState("Weak")

    useEffect(()=>{
        if(pass.length<3){
        setPassLevel("weak")
        /*allowSumbit(false)}*/}
        if(pass.length>2 && pass.length<7){
            setPassLevel("Medium")
            /*allowSumbit(true)}*/}
        if(pass.length>6){
            setPassLevel("High")
            /*allowSumbit(true)}*/}
    },[setPassLevel, pass,/*allowSumbit*/])
  
    return (
        <div>
            <p>{passLevel}</p>
        </div>
 
    )
    }
export default Password;