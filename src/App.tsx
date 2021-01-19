// import React from 'react';

import { useState } from "react";
import { TextField } from "./TextField";
import { Counter } from "./Counter";

// function App(){
//   return(
//     <h1>Byye</h1>
//   )
// }

const App: React.FC = () =>{
  return <div>
    <Counter>
      {(count, setCount) => (
      <div>
        {count}
        <button onClick={() => setCount(count +1)}>+</button>
        </div>
      )}      
    </Counter>
  </div>
}

export default App;
 