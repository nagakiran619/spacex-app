import React, { Component } from "react";

import axios from "../src/services/axios";

import Header from "../src/containers/header/header";
import Footer from "../src/containers/footer/footer";
import Sidebar from "../src/containers/sidebar/sidebar";

class App extends Component {
  componentDidMount() {
    axios.get().then((response) => {
      console.log(response);
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Appcontent">
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
