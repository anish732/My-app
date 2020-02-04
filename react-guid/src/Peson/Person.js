import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px #cccccc;
  padding: 16px;
  text-align: center
   @media(min-width: 500px): {
    width: 450px;
  }
`;

const person = props => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <h3 onClick={props.click}>
        Hello React!!! I am {props.name} and I am {props.age} years old.
      </h3>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </StyledDiv>
  );
};

export default person;
