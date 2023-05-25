import { useState } from "react";
import "./App.css";
import BMIForm from "./bmicomponents/BMIForm";
import BMISCore from "./bmicomponents/BMIScore";


function App() {
  const [bmi, setBmi] = useState(18);
  const [bmiType, setBmiType] = useState("Overweight");
  const onFormSubmit=(w,h)=>
  {
    console.log(w+":::"+h);
  }

  return (
    <div className="App">
      <h2>Welcome to REACT</h2>
      <BMIForm getData={onFormSubmit}/>
      <BMISCore />
    </div>
  );
}

export default App;




