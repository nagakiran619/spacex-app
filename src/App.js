import React, { Component } from "react";

import "../src/App.css";
import axios from "../src/services/axios";

import Header from "../src/containers/header/header";
import Footer from "../src/containers/footer/footer";
// import Sidebar from "../src/containers/sidebar/sidebar";
import Card from "../src/components/card/card";

import {
  FILTER_YEAR_VALUES,
  FILTER_SUCCESSFUL_LANDING,
  FILTER_SUCCESSFUL_LAUNCH,
} from "../src/shared/constants";

import Button from "../src/components/button/button";

class App extends Component {
  state = null;

  constructor(props) {
    super(props);
    this.state = {
      carddata: [],
      FILTER_YEAR_VALUES,
      FILTER_SUCCESSFUL_LAUNCH,
      FILTER_SUCCESSFUL_LANDING,
      launch_year: 2006,
      launch_success: null,
      launch_land: null,
    };
  }

  componentDidMount() {
    axios
      .get
      //`&launch_success=${this.state.launch_success}&launch_year=${this.state.launch_year}`
      ()
      .then(
        (response) => {
          console.log(response.data);

          this.setState({ carddata: response.data });
          console.log(this.state);
        },
        (err) => {
          if (err) console.log("Error in making api call");
        }
      );
  }

  onClickYearHandler = (e, year, id) => {
    e.preventDefault();
    console.log(year);

    /// MAKDING THE FILTER ACTIVE STATE
    let yearHighlight = this.state.FILTER_YEAR_VALUES.map((v, idx) => {
      v.id === id ? (v.isHighlighted = true) : (v.isHighlighted = false);
      return v;
    });
    this.setState({ launch_year: year });
    axios
      .get(`&launch_year=${year}&launch_success=${this.state.launch_success}`)
      .then(
        (response) => {
          this.setState({ carddata: response.data });
          this.setState({ FILTER_YEAR_VALUES: yearHighlight });
          console.log(this.state);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  onClickLaunchHandler = (e, launchFlag, id) => {
    e.preventDefault();
    /// MAKDING THE LAUNCH FILTER ACTIVE STATE
    let launchHighlight = this.state.FILTER_SUCCESSFUL_LAUNCH.map((v, idx) => {
      v.id === id ? (v.isHighlighted = true) : (v.isHighlighted = false);
      return v;
    });
    this.setState({ launch_success: launchFlag });

    axios
      .get(
        `&launch_year=${this.state.launch_year}&launch_success=${launchFlag}`
      )
      .then(
        (response) => {
          this.setState({ carddata: response.data });
          this.setState({ FILTER_SUCCESSFUL_LAUNCH: launchHighlight });
          console.log(this.state);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  onClickLandingHandler = (e, landFlag, id) => {
    e.preventDefault();
    /// MAKDING THE LAUNCH FILTER ACTIVE STATE
    // let landingHighlight = this.state.FILTER_SUCCESSFUL_LANDING.map(
    //   (v, idx) => {
    //     v.id === id ? (v.isHighlighted = true) : (v.isHighlighted = false);
    //     return v;
    //   }
    // );
    // axios.get(`&land_success=${landFlag}`).then(
    //   (response) => {
    //     this.setState({ carddata: response.data });
    //     this.setState({ FILTER_SUCCESSFUL_LANDING: landingHighlight });
    //     console.log(this.state);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  };
  render() {
    return (
      <div className="App">
        <Header />
        {/* <div className="App-main"> */}
        <div className="App-sidebar">
          <div className="App-sidebar-section">
            <h2 className="App-sidebar-header"> Filter </h2>
            <h4 className="App-sidebar-item-header">Launch Year</h4>
            <div className="App-sidebar-item-list">
              {this.state.FILTER_YEAR_VALUES.map((v, i) => {
                return (
                  <Button
                    key={v.id}
                    click={(eve) => this.onClickYearHandler(eve, v.year, v.id)}
                    {...v}
                  />
                );
              })}
            </div>
            <h4 className="App-sidebar-item-header App-clear">
              {" "}
              Successful Launch{" "}
            </h4>
            <div className="App-sidebar-item-list">
              {this.state.FILTER_SUCCESSFUL_LAUNCH.map((v, ind) => {
                return (
                  <Button
                    key={v.value}
                    click={(eve) =>
                      this.onClickLaunchHandler(eve, v.value, v.id)
                    }
                    {...v}
                  />
                );
              })}
            </div>
            <h4 className="App-sidebar-item-header App-clear">
              {" "}
              Successful Landing{" "}
            </h4>
            <div className="App-sidebar-item-list">
              {this.state.FILTER_SUCCESSFUL_LANDING.map((v, ind) => {
                return (
                  <Button
                    key={v.value}
                    click={(eve) =>
                      this.onClickLandingHandler(eve, v.value, v.id)
                    }
                    {...v}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="App-content">
          {this.state.carddata && <Card carddata={this.state.carddata} />}
        </div>
        {/* </div> */}
        <Footer />
      </div>
    );
  }
}

export default App;
