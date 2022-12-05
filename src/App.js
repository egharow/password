import './App.css';
import Counter from './Counter';
import { useState } from 'react';


function App() {
  const [delta, setDelta] = useState(1)
  function handleDelta (event){
  console.log(event);
  setDelta(Number(event.target.value))
  } 
  const [max, setMax] = useState(1)
  function handleMax (m){
    console.log(m);
    setMax(Number(m.target.value))}

  return (
    <div className="App">
      Delta
      <input type= "number" value= {delta} onChange = {handleDelta}/>
      <p/>Maximum Number
      <input type= "number" value= {max} onChange={handleMax} />
      <Counter delta = {delta} max ={max}/>
      <Counter delta = {delta} max ={max}/>
    </div>
    
  );
}

export default App;
