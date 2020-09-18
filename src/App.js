import React, { Component } from "react";

import Header from "../src/containers/header/header";
import Footer from "../src/containers/footer/footer";
import Sidebar from "../src/containers/sidebar/sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;
