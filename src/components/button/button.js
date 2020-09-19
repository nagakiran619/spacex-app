import React from "react";

import "../button/button.css";

const button = (props) => {
  return <button className="button button-success"> {props.name} </button>;
};

export default button;
