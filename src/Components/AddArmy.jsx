import React, { Component } from "react";
import "../Style/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const AddArmy = (props) => {
  let history = useHistory();
  const [Armyname, setarmyname] = useState("");
  const [Armyid, setarmyid] = useState("");
  const [strategy, setattacktype] = useState("");
  const [NoOfPerson, setNoofPerson] = useState(0);
  const SubmitChanges = (e) => {
    e.preventDefault();
    if (Armyname || Armyid || NoOfPerson) {
      if (NoOfPerson >= 80) {
        props.add(Armyname, Armyid, NoOfPerson,strategy);
        history.push("/");
      } else {
        alert("Units Is Less Than 80");
      }
    } else {
      alert("Some Data is Missing !! ");
    }
  };
  return (
    <div>
      <div className="container">
        <div id="contact">
          <h3>Add Army Data</h3>
          <fieldset>
            <input
              placeholder="Army name"
              type="text"
              name="name"
              required
              onChange={(e) => setarmyname(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Army Id"
              type="text"
              name="Id"
              onChange={(e) => setarmyid(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Number of Persons"
              type="number"
              name="NoOfPerson"
              onChange={(e) => setNoofPerson(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Strategy"
              type="text"
              name="attackType"
              onChange={(e) => setattacktype(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              onClick={(e) => SubmitChanges(e)}
            >
              Submit
            </button>
          </fieldset>
          <p className="copyright">
            <Link to="/">{"<-"} back to Battle page</Link>
          </p>
        </div>
      </div>
      <div className="strategy App">
         <h2>Strategies Types : </h2>
      <p>Weakest</p>
      <p>Strongest</p>
      <p>Random</p>
      </div>
    </div>
  );
};

export default AddArmy;
