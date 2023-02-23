import logo from './logo.svg';
import './App.css';
import './Components/Action';
import Counter from './Components/Counter';
import React, { useState } from "react";
import {Action} from './Components/Action';
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="Appa">
      <h1><Counter cont={counter} text="Contador: "/>
      </h1>
      <br/>
      <Action cont={counter} setCounter={setCounter} action="Resta"/>
      <Action cont={counter} setCounter={setCounter} action="Suma"/>
    </div>
  );
}
export default App;
