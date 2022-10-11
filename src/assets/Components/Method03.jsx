import { useState } from "react";
import React from "react";

const Method03 = ({ value, setValue }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let energy = eval(inputs.budget / (3.5 * 1000));

    setValue((prevState) => ({
      ...prevState,
      notCalced: false,
      energy: energy.toFixed(2),
      value: 0,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="input">
        <div>Budget (CAD):</div>
        <input
          type="number"
          name="budget"
          value={inputs.budget || ""}
          onChange={handleChange}
          className="field"
          placeholder="Budget (CAD)"
        />
      </label>
      <p></p>
      <input type="submit" className="submit" value="Calculate" />
    </form>
  );
};

export default Method03;
