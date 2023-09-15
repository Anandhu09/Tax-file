import React from "react";
import "./CouponSection.css";
import { Input, Button ,message} from "antd";

const CouponSection = ({userDetailsSetOne,setUserDetailsSetOne}) => {
const handleApply= ()=>{
  if(userDetailsSetOne.couponCode.length){
    message.success("Coupon code Applied")
  }else{
    message.error("Enter Coupon code to get the Offer")
  }
}
  return (
    <div className="coupon_top">
      <div className="coupon">
        <div className="couponbox">
          <div className="Enter_coupon">
            <strong>Enter Coupon </strong>
          </div>

          <div className="couply_apply">
            <Input
              style={{ maxWidth: "220px" }}
              placeholder="Enter Coupon Code"
              onChange={(e)=>{setUserDetailsSetOne((prev)=>({...prev,couponCode:e.target.value}))}}
            />
            <Button type="primary" onClick={handleApply}>Apply</Button>
          </div>
        </div>

        <div className="amount">
          <h4>Total</h4>
          <strong>$0.00</strong>
        </div>
      </div>
    </div>
  );
};

export default CouponSection;
