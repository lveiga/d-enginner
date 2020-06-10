import React from 'react';
import '../App.css';
import { Scope } from "@unform/core";
import { Form } from "@unform/web";
import Input from "../components/input";


export default function lancamentos(){

    function handleSubmit(data, { reset }) {
        console.log(data);
    
        reset();
    }

    return(
        <div>
    <h1>Lançamentos</h1>
    <Form onSubmit={handleSubmit}>
     
      <Input name="name" label="Full name" />
      <Input name="email" label="E-mail" type="email" />

      <Scope path="address">
        <Input name="street" label="Street name" />
        <Input name="zipcode" label="ZIP code" />
      </Scope>

      <button type="submit">Save</button>
    </Form>
    </div>
    );
};