import facade from "./apiFacade.js";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function GetContact(props) {
  let contactObj = {
    id: "X",
    name: "John",
    email: "Doe",
    company: "Unknown",
    jobtitle: "Unknown",
    phone: "xxxxxxxx",
  };

  const [contact, setContact] = useState(contactObj);

  const handleChange = (evt) => {
    setContact({
      ...contact,
      [evt.target.id]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(contact.id);
    facade.findContact(contact.id).then((data) => setContact(data));
  };

  return (
    <div>
      <form onChange={handleChange}>
        <p>
          Name: {contact.name}, Email: {contact.email}, Company:{" "}
          {contact.company}, Jobtitle: {contact.jobtitle}, Phone:
          {contact.phone}
        </p>
        <p>Enter ID:</p>
        <input
          onChange={handleChange}
          type="text"
          id="id"
          value={contact.id}
          placeholder={contact.id}
        />
        <button onClick={handleSubmit}>Find</button>
      </form>
    </div>
  );
}

export default GetContact;
