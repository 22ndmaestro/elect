import { useState } from "react";
import React from "react";

const Calc = ({ value, setValue }) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue((prevState) => ({ ...prevState, notCalced: true }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Calculated Values</p>
      {value.energy !== 0 ? (
        <div>
          <label className="label">Power (KWP): </label>
          <label className="Output">{value.energy} </label>
          <p></p>
        </div>
      ) : (
        ""
      )}
      {value.value !== 0 ? (
        <div>
          <label className="label">Cost (CAD): </label>
          <label className="Output">{value.value} </label>
          <p></p>
        </div>
      ) : (
        ""
      )}

      <input type="submit" className="submit" value="Recalculate Value" />
    </form>
  );
};

export default Calc;
