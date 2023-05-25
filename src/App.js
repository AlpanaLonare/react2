import { useState } from "react";
import'./App.css';
import BMIForm from'./bmicomponent/BMIForm';
import BMISCore from "./bmicomponent/BMIScore";

function App() {

  const [bmi,setBmi]=useState(18);
  const [miType,setMitype]=useState("Overweight");
   return (
   <div className="App">
    <h2>Welcome to REACT</h2>
     <h4>BMI: {bmi}</h4>
     <button onClick={()=>setBmi(bmi+5)}>Click</button>
  <BMIForm/>
   <BMISCore Mybmi={bmi} miType={MyType}/>

   </div>
     );
}

export default App;




