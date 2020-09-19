import React from "react";

import Button from "../button/button";

import {
  FILTER_TYPE_YEAR,
  FILTER_YEAR_VALUES,
  FILTER_TYPE_LAUNCH,
  FILTER_TYPE_LANDING,
  FILTER_SUCCESSFUL_LAUNCH,
  FILTER_SUCCESSFUL_LANDING,
} from "../../shared/constants";

const Filters = (props) => {
  let filtervalue = null;
  switch (props.filtertype) {
    case FILTER_TYPE_YEAR:
      filtervalue = FILTER_YEAR_VALUES.map((val, ind) => {
        return <Button key={val.year} name={val.year} />;
      });
      return filtervalue;
    case FILTER_TYPE_LAUNCH:
      filtervalue = FILTER_SUCCESSFUL_LAUNCH.map((val, ind) => {
        return <Button key={val.value} name={val.value} />;
      });
      return filtervalue;
    case FILTER_TYPE_LANDING:
      filtervalue = FILTER_SUCCESSFUL_LANDING.map((val, ind) => {
        return <Button key={val.value} name={val.value} />;
      });
      return filtervalue;
    default:
      return filtervalue;
  }
};

export default Filters;
