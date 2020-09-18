import React, { Component } from "react";

import "../../containers/sidebar/sidebar.css";
import { FILTER_TYPE_YEAR } from "../../shared/constants";
import Filters from "../../components/filter";

class Sidebar extends Component {
  componentDidMount() {}

  render() {
    return (
      <aside className="sidebar">
        <Filters filtertype={FILTER_TYPE_YEAR} />
      </aside>
    );
  }
}
export default Sidebar;
