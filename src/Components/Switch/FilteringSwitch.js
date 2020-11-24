import React, { useContext } from "react";
import { UsersContext } from "../../Context/userContext";
import "./Switch.css";

function FilteringSwitch(props) {
  const { SwitchOn, setSwitchOn } = useContext(UsersContext);
  return (
    <div className="main-wrapper">
      <h3>Филтрирај по категорија</h3>
      <label className="switch" >
        <input type="checkbox"             
        onClick={() => setSwitchOn(!SwitchOn)}/>
        <span className="slider round">
          <span className="cube"></span>
        </span>
      </label>
    </div>
  );
}

export default FilteringSwitch;
