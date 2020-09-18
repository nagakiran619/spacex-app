import React, { Component } from "react";

import { DEVELOPER_NAME } from "./../../shared/constants";

class Footer extends Component {
  render() {
    return (
      <footer>
        <h1>Developed by: {DEVELOPER_NAME} </h1>
      </footer>
    );
  }
}

export default Footer;
