import { useState } from "react";
import React from "react";

const Method01 = ({ value, setValue }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let kwp = eval(inputs.energy / 1035);
    let cost = eval(kwp * 3.3);
    setValue((prevState) => ({
      ...prevState,
      notCalced: false,
      energy: kwp.toFixed(2),
      value: cost.toFixed(2),
    }));

    alert(`energy: ${value.energy} value: ${value.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="input">
        <div>Energy Requirement:</div>
        <input
          type="number"
          name="energy"
          value={inputs.energy || ""}
          onChange={handleChange}
          className="field"
          placeholder="Energy Requirement"
        />
      </label>
      <p></p>
      <input type="submit" className="submit" value="Calculate" />
    </form>
  );
};

export default Method01;
