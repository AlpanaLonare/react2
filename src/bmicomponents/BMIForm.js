import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BMIForm({getData}) {
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
const onSubmit = (e)=>
 e.preventDefault();
if(isNaN(weight)||isNaN(height))
{
    console.log("Wrong input");
}
else
getData(weight,height)


  return (
    <div>
      BMIForm for user input
      <Form className="formbmi" onSubmit={onSubmit}>
        <Form.Group className="FormInput" controlId="formHeight">
          <Form.Control 
          type="text"
           placeholder="Height in M" 
           value={height}
           onChange={(e)=>setHeight(e.target.value)}
           className="form-control"
           />
        </Form.Group>
        <Form.Group className="FormInput" controlId="formWeight">
          <Form.Control 
          type="text" 
          placeholder="Weight in Kg" 
          value={weight}
          onChange={(e)=>setWeight(e.target.value)}
          className="form-control"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Get BMI
        </Button>
      </Form>
    </div>
       
  );
}

export default BMIForm;
