import facade from "./apiFacade.js";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function PlanetsArray() {
  let obj = {
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    population: "",
    residents: "",
    films: "",
    created: "",
    edited: "",
    url: "",
  };

  const [planet, setPlanet] = useState(obj);
  const [planetList, setPlanetList] = useState([]);

  useEffect(() => {
    facade.fetchStarwarsPlanets().then((data) => setPlanetList(data.results));
    //console.log(planetList);
  }, []);

  return (
    <div>
      <Table table table-striped table-bordered table-condensed>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Residents</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planetList.map((x) => (
            <tr>
              <td>{x.name}</td>
              <td>{x.rotation_period}</td>
              <td>{x.orbital_period}</td>
              <td>{x.diameter}</td>
              <td>{x.climate}</td>
              <td>{x.gravity}</td>
              <td>{x.terrain}</td>
              <td>{x.surface_water}</td>
              <td>{x.population}</td>
              <td>{x.created}</td>
              <td>{x.edited}</td>
              <td>{x.url}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PlanetsArray;
