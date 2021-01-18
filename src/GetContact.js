import facade from "./apiFacade.js";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function GetContact() {
  let contactObj = {
    id: "",
    name: "John",
    email: "Doe",
    company: "Unknown",
    jobtitle: "Unknown",
    phone: "xxxxxxxx",
  };

  let opportunityObj = {
    name: "",
    amount: "",
    closeDate: "",
  };

  const [opportunity, setOpportunity] = useState(opportunityObj);
  const [contact, setContact] = useState(contactObj);

  const handleChangeContact = (evt) => {
    setContact({
      ...contact,
      [evt.target.id]: evt.target.value,
    });
  };

  const handleChangeOpportunity = (evt) => {
    setOpportunity({
      ...opportunity,
      [evt.target.id]: evt.target.value,
    });
  };

  const handleSubmitContact = (evt) => {
    evt.preventDefault();
    console.log(contact.id);
    facade.findContact(contact.id).then((data) => setContact(data));
  };

  const handleSubmitOpportunity = (evt) => {
    evt.preventDefault();
    console.log(opportunity);
    facade.addOpportunity(opportunity, contact.id);
  };

  return (
    <div>
      <form onChange={handleChangeContact}>
        <p>
          Name: {contact.name}, Email: {contact.email}, Company:{" "}
          {contact.company}, Jobtitle: {contact.jobtitle}, Phone:
          {contact.phone}
        </p>
        <p>Enter ID:</p>
        <input
          onChange={handleChangeContact}
          type="text"
          id="id"
          value={contact.id}
          placeholder="Enter ID"
        />
        <button onClick={handleSubmitContact}>Find</button>
      </form>
      <br />
      <form onChange={handleChangeOpportunity}>
        <input
          type="text"
          id="name"
          value={opportunity.name}
          placeholder="Enter name"
        />
        <input
          type="text"
          id="amount"
          value={opportunity.amount}
          placeholder="Enter amount"
        />
        <input
          type="text"
          id="closeDate"
          value={opportunity.closeDate}
          placeholder="Enter close date"
        />
        <button onClick={handleSubmitOpportunity}>Add Opportunity</button>
      </form>
    </div>
  );
}

export default GetContact;
