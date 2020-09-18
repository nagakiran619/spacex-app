import React, { Component } from "react";

import "../../containers/footer/footer.css";
import { DEVELOPER_NAME } from "./../../shared/constants";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <h1>Developed by: {DEVELOPER_NAME} </h1>
      </footer>
    );
  }
}

export default Footer;
