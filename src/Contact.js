import facade from "./apiFacade.js";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Contact(props) {
  let contactObj = {
    id: "",
    name: "",
    email: "",
    company: "",
    jobtitle: "",
    phone: "",
  };

  const [load, setLoad] = useState(false);
  const [contact, setContact] = useState(contactObj);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    facade.fetchContacts().then((data) => setContactList(data));
    setLoad(false);
  }, [load]);

  const handleSubmitEdit = (evt) => {
    evt.preventDefault();
    facade.findContact(evt.target.id).then((data) => setContact(data));
    setLoad(true);
  };

  const handleSubmitDelete = (evt) => {
    evt.preventDefault();
    facade.deleteContact(evt.target.id).then((data) => setContact(data));
    setLoad(true);
  };

  return (
    <div>
      <Table table table-striped table-bordered table-condensed>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Jobtitle</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((x) => (
            <tr>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>{x.company}</td>
              <td>{x.jobtitle}</td>
              <td>{x.phone}</td>
              <td>
                <form>
                  <button id={x.id} onClick={handleSubmitEdit}>
                    Edit
                  </button>
                </form>
                <form>
                  <button id={x.id} onClick={handleSubmitDelete}>
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <props.AddContact setLoad={setLoad} />
      <br />
      <props.GetContact />
      <br />
      <props.EditContact contact={contact} setContact={setContact} />
    </div>
  );
}

export default Contact;
