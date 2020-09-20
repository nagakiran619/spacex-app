import React from "react";
import "../../components/card/card.css";

const card = (props) => {
  const cardlist = props.carddata.map((val, idx) => {
    return (
      <div key={val.flight_number} className="Card">
        <div className="Card-img">
          <img src={val.links.mission_patch_small} alt="spacex-img" />{" "}
        </div>
        <h4 className="mission-name">{val.mission_name}</h4>
        <div className="card-info">
          <span className="card-subtitle">Mission Ids :</span>
          <span>
            {val.mission_id.length > 0 ? val.mission_id.toString() : "NA"}
          </span>
        </div>
        <div className="card-info">
          <span className="card-subtitle">Launch Year :</span>
          <span className="card-subtitle-value">{val.launch_year}</span>
        </div>
        <div className="card-info">
          <span className="card-subtitle">Successful Launch :</span>
          <span className="card-subtitle-value">
            {val.launch_success ? "true" : "false"}
          </span>
        </div>
        <div className="card-info">
          <span className="card-subtitle">Successfull Landing :</span>
          <span className="card-subtitle-value">
            {val.launch_landing ? val.launch_success : "NA"}
          </span>
        </div>
      </div>
    );
  });
  return cardlist;
};

export default card;
