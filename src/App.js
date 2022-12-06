import './App.css';
import Counter from './Counter';
import { useState} from 'react';


function App() {
  const [delta, setDelta] = useState(1)
  const [max, setMax] = useState(10)
  const [restart, setReset] = useState(false)
  const [highest, sethighest] =useState(1)

  
  function handleDelta (event){
  console.log(event);
  setDelta(Number(event.target.value))
  } 
  
  function handleMax (m){
    console.log(m);
    setMax((m.target.value))}
 
  function getRset(data){
  console.log(data)
  setReset(data)
  }
  
  function saveHighest(high){
    sethighest(high)    
  }

  return (
    <div className="App">
      Delta
      <input type= "number" value= {delta} onChange = {handleDelta}/>
      <p/>Maximum Number
      <input type= "number" value= {max} onChange={handleMax} />
      <p>Highest Value is {highest}</p>
      <Counter delta = {delta} max ={max} getReset={getRset} needToReset={restart} saveHighest={saveHighest} highest ={highest}/>
      <Counter delta = {delta} max ={max} getReset={getRset} needToReset={restart} saveHighest={saveHighest} highest ={highest}/>
    </div>
    
  );
}

export default App;
