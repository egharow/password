import './App.css';
import Counter from './Counter';
import { useState} from 'react';


function App() {
  const [delta, setDelta] = useState(1)
  const [max, setMax] = useState(10)
  const [restart, setReset] = useState(false)
  
  function handleDelta (event){
  console.log(event);
  setDelta(Number(event.target.value))
  } 
  
  function handleMax (m){
    console.log(m);
    setMax((m.target.value))}
 
    function getReset(data){
    console.log(data)
    setReset(data)
  }
  return (
    <div className="App">
      Delta
      <input type= "number" value= {delta} onChange = {handleDelta}/>
      <p/>Maximum Number
      <input type= "number" value= {max} onChange={handleMax} />
      <Counter delta = {delta} max ={max} getReset={getReset} needToReset={restart}/>
      <Counter delta = {delta} max ={max} getReset={getReset} needToReset={restart}/>
    </div>
    
  );
}

export default App;
