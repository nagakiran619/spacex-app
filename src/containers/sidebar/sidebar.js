import React, { Component } from "react";

import "../../containers/sidebar/sidebar.css";
import {
  FILTER_TYPE_YEAR,
  FILTER_TYPE_LAUNCH,
  FILTER_TYPE_LANDING,
} from "../../shared/constants";
import Filters from "../../components/filter/filter";

class Sidebar extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="sidebar">
        <h2 className="sidebar-header"> Filter </h2>
        <h4 className="sidebar-item-header">Launch Year</h4>
        <div className="sidebar-item-list">
          <Filters filtertype={FILTER_TYPE_YEAR} />
        </div>
        <h4 className="sidebar-item-header"> Successful Launch </h4>
        <div className="sidebar-item-list">
          <Filters filtertype={FILTER_TYPE_LAUNCH} />
        </div>
        <h4 className="sidebar-item-header"> Successful Landing </h4>
        <div className="sidebar-item-list">
          <Filters filtertype={FILTER_TYPE_LANDING} />
        </div>
      </div>
    );
  }
}
export default Sidebar;
