import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length < 3) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length < 2) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I am a React APP</h1>
      <p className={assignedClasses.join(" ")}> THis is really working</p>

      <button className={btnClass} onClick={props.clicked}>
        Change Name
      </button>
    </div>
  );
};

export default cockpit;
