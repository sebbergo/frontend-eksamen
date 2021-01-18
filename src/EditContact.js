import facade from "./apiFacade.js";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function EditContact(props) {
  const handleChange = (evt) => {
    props.setContact({
      ...props.contact,
      [evt.target.id]: evt.target.value,
    });
    console.log(props.contact);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    facade.editContact(props.contact);
    console.log(props.contact);
  };

  return (
    <div>
      <form onChange={handleChange}>
        <p>Edit contact:</p>
        <input type="text" id="id" placeholder={props.contact.id} />
        <input type="text" id="name" placeholder={props.contact.name} />
        <input type="text" id="email" placeholder={props.contact.email} />
        <input type="text" id="company" placeholder={props.contact.company} />
        <input type="text" id="jobtitle" placeholder={props.contact.jobtitle} />
        <input type="text" id="phone" placeholder={props.contact.phone} />
        <button onClick={handleSubmit}>Edit</button>
      </form>
    </div>
  );
}

export default EditContact;
