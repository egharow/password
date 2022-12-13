import './App.css';
import { useState } from 'react';
import Password from './password';

function App() {
  const [pass, setPass] = useState()
  function handlePass(p){
    setPass(p.target.value)
  }

  return (
    <div className="App">
      Enter Password:
      <input type= "password" value= {pass} onChange = {handlePass}/>
      <button>Sumbit</button>
      <Password pass={pass} />

    </div>
    );
}

export default App;
