import './App.css';
import { useState } from 'react';
import Password from './password';
 
function App() {
  const [pass, setPass] = useState()
  const[allowSumbit, setSubmit] = useState(true)

  function handlePass(p){
    setPass(p.target.value)
  }

  return (
    <div className="App">
      Enter Password:
      <input type= "password" value= {pass} onChange = {handlePass}/>
      <button>Submit</button>
      <Password pass={pass} />

    </div>
    );
}

export default App;
