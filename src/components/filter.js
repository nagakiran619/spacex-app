import React from "react";

import {
  FILTER_TYPE_YEAR,
  FILTER_YEAR_VALUES,
} from "../../src/shared/constants";

const Filters = (props) => {
  let filtervalue = null;
  switch (props.filtertype) {
    case FILTER_TYPE_YEAR:
      filtervalue = FILTER_YEAR_VALUES.map((val, ind) => {
        return <div key={val.year}>{val.year}</div>;
      });
      return filtervalue;
    default:
      return filtervalue;
  }
};

export default Filters;
