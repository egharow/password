import './App.css';
import { useState } from 'react';
import Password from './password';
 
function App() {
  const [pass, setPass] = useState('')
  const[allowSumbit, setAllowSubmit] = useState(true)

  function handlePass(p){
    setPass(p.target.value)
  }

  return (
    <div className="App">
      Enter Password:
      <input type= "password" value= {pass} onChange = {handlePass}></input>
      <button disabled= {allowSumbit}>Submit</button>
      <Password pass={pass} allow= {setAllowSubmit}></Password>

    </div>
    );
}
export default App;
