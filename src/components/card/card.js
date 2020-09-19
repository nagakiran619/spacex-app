import React from "react";
import "../../components/card/card.css";

const card = (props) => {
  console.log(props.carddata);
  const cardlist = props.carddata.map((val, idx) => {
    console.log(val.launch_success);
    return (
      <div key={val.flight_number} className="Card">
        <img className="Card-img" alt="spacex-img" />
        <br />
        <span>{val.mission_name}</span>
        <br />
        <span>
          Mission Ids :
          {val.mission_id.length > 0 ? val.mission_id.toString() : "NA"}
        </span>
        <br />
        <span>Launch Year : {val.launch_year}</span>
        <br />
        <span>Successful Launch : {val.launch_success ? "true" : "false"}</span>
        <br />
        <span>
          Successfull Landing :{val.launch_landing ? val.launch_success : "NA"}
        </span>
      </div>
    );
  });
  return cardlist;
};

export default card;
