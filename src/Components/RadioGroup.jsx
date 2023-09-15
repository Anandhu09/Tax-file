import React from "react";
import { Radio } from "antd";
const RadioGroup = ({ value,name, handleRadioChange }) => {
  return (
    <Radio.Group  value={value} name={name} onChange={handleRadioChange}>
      <div className="custom-Radio">
        <Radio value="yes">Yes</Radio>
      </div>
      <div className="custom-Radio">
        <Radio value="no">No</Radio>
      </div>
    </Radio.Group>
  );
};

export default RadioGroup;
