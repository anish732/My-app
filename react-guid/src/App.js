import React, { Component } from "react";
import "./App.css";
import Radium from "radium";
import Person from "./Peson/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asd1", name: "Himani", age: 18 },
      { id: "qwe2", name: "Anish", age: 16 },
      { id: "lkj3", name: "Ravi", age: 48 },
      { id: "dfg4", name: "Shital", age: 45 }
    ],
    showPerson: false
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = [];

    if (this.state.persons.length < 3) {
      classes.push("red");
    }
    if (this.state.persons.length < 2) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I am a React APP</h1>
        <p className={classes.join(" ")}> THis is really working</p>

        <button style={style} onClick={this.togglePersonHandler}>
          Change Name
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
