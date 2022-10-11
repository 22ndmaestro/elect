import React from "react";
import { useState } from "react";
import { options } from "./constants";
import Method01 from "./Method01";
import Method02 from "./Method02";
import Method03 from "./Method03";
import MethodSelect from "./MethodSelect";
import Calc from "./Calc";

const Methods = () => {
  const [method, setMethod] = useState(options[0]);
  const [value, setValue] = useState({ value: 0, notCalced: true, energy: 0 });

  const handleChange = (event) => {
    setMethod((method) => event.target.value);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      {value.notCalced ? (
        <MethodSelect method={method} setMethod={setMethod} />
      ) : (
        ""
      )}

      {method === "method01" && value.notCalced ? (
        <Method01 value={value} setValue={setValue} />
      ) : (
        ""
      )}
      {method === "method02" && value.notCalced ? (
        <Method02 value={value} setValue={setValue} />
      ) : (
        ""
      )}
      {method === "method03" && value.notCalced ? (
        <Method03 value={value} setValue={setValue} />
      ) : (
        ""
      )}
      {!value.notCalced ? <Calc value={value} setValue={setValue} /> : ""}
    </div>
  );
};

export default Methods;
