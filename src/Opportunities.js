import facade from "./apiFacade.js";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Opportunities() {
  const [x, setX] = useState({ id: "" });
  const [opportunities, setOpportunities] = useState([]);

  const handleChange = (evt) => {
    setX({
      ...x,
      [evt.target.id]: evt.target.value,
    });
    console.log(x.id);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(x.id);
    facade
      .getOpportunitiesFromContact(x.id)
      .then((data) => setOpportunities(data));
  };

  return (
    <div>
      <Table table table-striped table-bordered table-condensed>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Close Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((x) => (
            <tr>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.amount}</td>
              <td>{x.closeDate}</td>
              <td>{x.opportunityStatusDTO}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <form onChange={handleChange}>
        <p>Find opportunities:</p>
        <input type="text" id="id" placeholder="Enter ID for Contact" />
        <button onClick={handleSubmit}>Find</button>
      </form>
    </div>
  );
}

export default Opportunities;
