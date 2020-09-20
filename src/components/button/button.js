import React from "react";

import "../button/button.css";

const button = (props) => {
  const btnClass = props.isHighlighted
    ? "button button-success button-highlight"
    : "button button-success ";
  return (
    <button className={btnClass} onClick={props.click}>
      {" "}
      {props.year || props.value}{" "}
    </button>
  );
};

export default button;
