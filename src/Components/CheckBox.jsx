import React from 'react';
import { Checkbox } from 'antd';
import "./CheckBox.css"
const CheckBox = ({ options, userDetailsSetOne, setUserDetailsSetOne, handleStorage }) => {
  const handleCheckboxChange = (option) => {
    setUserDetailsSetOne((prevDetails) => {
      const updatedCheckbox = prevDetails[handleStorage].includes(option)
        ? prevDetails[handleStorage].filter(item => item !== option)
        : [...prevDetails[handleStorage], option];
      return {
        ...prevDetails,
        [handleStorage]: updatedCheckbox
      };
    });
  };

  return (
    <>
      {options.map((option, index) => (
        <div key={index}>
          <Checkbox
            checked={userDetailsSetOne[handleStorage].includes(option)}
            onChange={() => handleCheckboxChange(option)}
          >
            {option}
          </Checkbox>
        </div>
      ))}
    </>
  );
};

export default CheckBox;
