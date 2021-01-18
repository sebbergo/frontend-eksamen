import facade from "./apiFacade.js";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function AddContact(props) {
  let contactObj = {
    name: "",
    email: "",
    company: "",
    jobtitle: "",
    phone: "",
  };

  const [contact, setContact] = useState(contactObj);

  const handleChange = (evt) => {
    setContact({
      ...contact,
      [evt.target.id]: evt.target.value,
    });
    console.log(contact);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    facade.createContact(contact);
    props.setLoad(true);
  };

  return (
    <div>
      <form onChange={handleChange}>
        <p>Create contact:</p>
        <input type="text" id="name" placeholder="Enter Name" />
        <input type="text" id="email" placeholder="Enter Email" />
        <input type="text" id="company" placeholder="Enter Company" />
        <input type="text" id="jobtitle" placeholder="Enter Jobtitle" />
        <input type="text" id="phone" placeholder="Enter Phone" />
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}

export default AddContact;
