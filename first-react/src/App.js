import './App.css';
import { useState } from 'react';
import Box from './component/Box';

function App() {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={() => {
        setCounter(counter += 1)
      }}>Click</button>
    </div>
  );
}

export default App;
