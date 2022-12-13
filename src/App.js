import './App.css';
import { useState, useEffect } from 'react';
import password from './password';

 function App() {
  const [pass , setPass] = useState("")

  function checkPass(event){
    console.log(event)
    /*setStrength(event.target.value)*/
  }
  return(
    <div className="App">
      Enter Password:
    <input type="password" /*value={pass}*/ onChange= {checkPass} /> 
    
    <button>Submit</button>
    </div>
    );
}

export default App;
