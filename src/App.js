import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let Counter = 5;

  const [counter, SetCounter] = useState(Counter);


const addValue = () => {
  Counter = Counter+1;
  console.log(Counter);
  SetCounter(Counter)
}

  return (
    <div className="App">
     <h1>Welcome! </h1>
     <h2>Counter Value : {Counter} </h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <br />

     <button>Remove Value</button>
    </div>
  );
}

export default App;
