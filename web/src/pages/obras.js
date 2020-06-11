import React from 'react';
import { Form } from "@unform/web";
import Input from "../components/input";

export default function obras(){

    function handleSubmit(data, { reset }) {
        console.log(data);
    
        reset();
    }

    return(
    <div>
        <h2>Cadastro de Obras</h2>
    

    <Form onSubmit={handleSubmit}>
     
      <Input name="rua" label="Rua" />
      <Input name="bairro" label="Bairro" />

      <button type="submit">Save</button>
    </Form>
    </div>
    );
};