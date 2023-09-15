import React from "react";
import "./payment.css";
import Logo from "../logo.svg";
import { Checkbox } from "antd";

const Payment = ({ userDetailsSetOne, setUserDetailsSetOne }) => {
  const handleChange = (e) => {
    setUserDetailsSetOne((prev) => {
      return { ...prev, paid: e.target.checked };
    });
  };
  return (
    <div className="payment_top">
      <div className="paid">
        <div className="paidbox">
          <Checkbox checked={userDetailsSetOne.paid} onChange={handleChange} />
          <img
            src={Logo}
            alt="Company Logo"
            style={{ width: "80px", height: "80px" }}
          />
          <h4>EazyTaxes</h4>
        </div>
        <div className="amount">
          <strong>$349</strong>
        </div>
        
      </div>
    
    </div>
  );
};

export default Payment;
