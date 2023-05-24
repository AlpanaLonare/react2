import { useState } from "react";
import'./App.css';
//import BMIForm from'./bmicomponent/BMIForm';
import BMISCore from "./bmicomponent/BMIScore";

function App() {

  const [bmi,setBmi]=useState(18);
   return (
   <div className="App">
    <h2>Welcome to REACT</h2>
     <h4>BMI: {bmi}</h4>
     <button onClick={()=>setBmi(bmi+5)}>Click</button>
  
   <BMISCore Mybmi={bmi}/>
   </div>
     );
}

export default App;




