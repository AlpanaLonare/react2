import React,{useState} from "react";
import Form from 'react';
import {Form} from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap/Form';

function BMIForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formHeight">
        <Form.Label>Height</Form.Label>
        <Form.Control type="text" placeholder="Height in M" />
      </Form.Group>
<Button varient="primary" type="submit">
    GetBMI
</Button>
      </Form>
  )
}