import { useState } from "react";
import React from "react";
import { options } from "./constants";

const MethodSelect = ({ method, setMethod }) => {
  const handleChange = (event) => {
    setMethod((method) => event.target.value);
  };

  return (
    <div>
      <p>Select Calculaton Method:</p>
      <select value={method} onChange={handleChange} className="dropdown">
        {
          //programmatically generate options
          options.map((method) => {
            return (
              <option name={method.option} value={method.option}>
                {" "}
                {method.name}{" "}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};

export default MethodSelect;
