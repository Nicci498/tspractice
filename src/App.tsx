// import React from 'react';

import { useState } from "react";
import { TextField } from "./TextField"

// function App(){
//   return(
//     <h1>Byye</h1>
//   )
// }

const App: React.FC = () =>{
  return <div>
    <TextField text = 'hello' obj = {{firstName: '', lastName: ''}} />
  </div>
}

export default App;
 