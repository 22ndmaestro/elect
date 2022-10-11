import { useState } from "react";
import React from "react";

const Method02 = ({ value, setValue }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let kwp = eval((inputs.area * 0.75 * 450) / (2.5 * 1000));
    let cost = eval(kwp * 3.3);

    inputs.area <= 2.5
      ? alert(`Input an Area of atleast 2.5`)
      : setValue((prevState) => ({
          ...prevState,
          notCalced: false,
          energy: kwp.toFixed(2),
          value: cost.toFixed(2),
        }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="input">
        <div>Area(m):</div>
        <input
          type="number"
          name="area"
          value={inputs.area || ""}
          onChange={handleChange}
          className="field"
          placeholder="Area (m)"
        />
      </label>
      <p></p>
      <input type="submit" className="submit" value="Calculate" />
    </form>
  );
};

export default Method02;
