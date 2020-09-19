import React, { Component } from "react";

import "../src/App.css";
import axios from "../src/services/axios";

import Header from "../src/containers/header/header";
import Footer from "../src/containers/footer/footer";
import Sidebar from "../src/containers/sidebar/sidebar";
import Card from "../src/components/card/card";

class App extends Component {
  state = null;
  constructor(props) {
    super(props);
    this.state = {
      carddata: [],
    };
  }
  componentDidMount() {
    axios.get().then((response) => {
      this.setState({ carddata: response.data });
    });
  }
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <div className="App-main">
          <div className="App-sidebar">
            <Sidebar />
          </div>
          <div className="App-content">
            {this.state.carddata && <Card carddata={this.state.carddata} />}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
