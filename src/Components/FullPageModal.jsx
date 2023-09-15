import React, { useEffect, useState } from "react";
import { Modal, Input, Form, Button, message } from "antd";
import DraggerComponent from "./DraggerComponent";
import RadioGroup from "./RadioGroup";
import CheckBox from "./CheckBox";
import Payment from "./payment";
import CouponSection from "./CouponSection";
import "./FullPageModal.css";
const FullPageModal = ({
  data,
  setData,
  userDetailsSetOne,
  setUserDetailsSetOne,
  visible,
  onClose,
}) => {
  const [section, setSection] = useState(1);
  const [Saved, setSaved] = useState(false);

  const options = [
    "Captial Infusion",
    "Captial Withdrawal",
    "Related Party Transaction",
  ];

  const Documents = [
    "Bank Statements",
    "Credit Card Statements",
    "Form 10991",
    "Form 940/941",
    "EIN Certificate",
    "IRS Acceptance Letter of S-Corp",
    "Financials (if prepared).",
  ];

  const onFinish = (values) => {
    console.log(userDetailsSetOne);
  };

  const handleSubmit = () => {
     if(!userDetailsSetOne.FinalCheckbox.length){
      message.error("Select any options to save")
    }
    else if(userDetailsSetOne.transactionCheckbox.length!==userDetailsSetOne.transactionDocuments.length){
      message.error("Upload the selected number of documents of transactions of 2022")
    }
     else if(userDetailsSetOne.FinalCheckbox.length!==userDetailsSetOne.FinalDocuments.length){
      message.error("Upload the selected number of documents in the Following list")
    }
    else if(!userDetailsSetOne.paid){
      message.error("Kindly make payment :)")
    }
    else {
      setData((prev)=>([...prev ,userDetailsSetOne]))
      setUserDetailsSetOne((prev)=>({
      email: "",
      fileReturnRadio: "",
      fileReturnDocuments: [],
      sCorpRadio: "",
      sCorpDocuments: [],
      ownerShipRadio: "",
      shareHoldDocuments: [],
      transactionCheckbox: [],
      transactionDocuments: [],
      FinalCheckbox: [],
      FinalDocuments: [],
      paid: false,
      couponCode: "",
    }))
      onClose()
      
    }
    
  };

  const handleSave = () => {

    const emailRegex = userDetailsSetOne.email.includes("@");
    let check = true;

    if (!userDetailsSetOne.email || !emailRegex) {
      check = false;
    }
    if (userDetailsSetOne.fileReturnRadio === "yes") {
      if (userDetailsSetOne.fileReturnDocuments.length < 1) {
        check = false;
        setSaved(false);
      }
    }
    if (userDetailsSetOne.sCorpRadio === "yes") {
      if (userDetailsSetOne.sCorpDocuments.length < 1) {
        check = false;
        setSaved(false);
      }
    }
    if (userDetailsSetOne.ownerShipRadio === "yes") {
      if (userDetailsSetOne.shareHoldDocuments.length < 1) {
        check = false;
        setSaved(false);
      }
    }
    if (!check) {
      message.error("Check the form to fill the required fields");
    } else {
      setSaved(true);
      message.success("Saved Successfully");
    }
  };

  const handleNext = () => {


    if (userDetailsSetOne.fileReturnRadio === "yes") {
      if (!userDetailsSetOne.fileReturnDocuments.length ) {

        setSaved(false);
      }
    }
    if (userDetailsSetOne.sCorpRadio === "yes") {
      if (userDetailsSetOne.sCorpDocuments.length) {
  
        setSaved(false);
      }
    }
    if (userDetailsSetOne.ownerShipRadio === "yes") {
      if (!userDetailsSetOne.shareHoldDocuments.length) {

        setSaved(false);
      }
    }

    if (!Saved) {
      message.error("Enter the details and Save your progress");
    } else {
      setSection(2);
    }
  };

  const handleSecondSave = () =>{
    if(userDetailsSetOne.FinalCheckbox.length === userDetailsSetOne.FinalDocuments.length){
    message.success("Saved Successfully")
    }
    else if(!userDetailsSetOne.FinalCheckbox.length){
      message.error("Select any options to save")
    }
    else if(userDetailsSetOne.transactionCheckbox.length!==userDetailsSetOne.FinalCheckbox.length){
      message.error("Upload the selected number of documents in 2022")
    }
     else if(userDetailsSetOne.FinalCheckbox.length!==userDetailsSetOne.FinalDocuments.length){
      message.error("Upload the selected number of documents in the Following list")
    }
  }

  const handleBack = () => {
    setSection(1);
  };

  const handleRadioChange = (e) => {
    const value = e.target.value;

    if (e.target.name === "question1") {
      setUserDetailsSetOne((prevDetails) => ({
        ...prevDetails,
        fileReturnRadio: value,
      }));
    }
    if (e.target.name === "question2") {
      setUserDetailsSetOne((prevDetails) => ({
        ...prevDetails,
        sCorpRadio: value,
      }));
    }
    if (e.target.name === "question3") {
      setUserDetailsSetOne((prevDetails) => ({
        ...prevDetails,
        ownerShipRadio: value,
      }));
    }
  };

 
  useEffect(() => {
    const errorElement = document.querySelector(".ant-form-item-explain-error");
    if (errorElement) {
      if (userDetailsSetOne.fileReturnDocuments.length > 0) {
        errorElement.classList.add("hidden");
      } else {
        errorElement.classList.remove("hidden");
      }
    }
  }, [userDetailsSetOne]);

  const handleFileChange = (info) => {
    setUserDetailsSetOne((prevDetails) => ({
      ...prevDetails,
      fileReturnDocuments: [
        ...prevDetails.fileReturnDocuments,
        info.file.originFileObj,
      ],
    }));
  };

  return (
    <Modal
      title="File Your Tax Form With Us"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width="100%"
      style={{ top: 0 }}
      bodyStyle={{
        height: "calc(97.7vh - 56px)",
        overflowY: "scroll",
        overflowX: "scroll",
      }}
      maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="custom-modal"
    >
      <Form onFinish={onFinish} layout="vertical">
        {/* Section 1 */}

        {section === 1 && (
          <>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email address" },
              ]}
            >
              <Input
                style={{ maxWidth: "300px" }}
                type="email"
                placeholder="Enter your email address"
                onChange={(e) =>
                  setUserDetailsSetOne((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </Form.Item>

            <Form.Item
              label="Did you file the returns last year?"
            >
              <RadioGroup
                value={userDetailsSetOne.fileReturnRadio}
                name="question1"
                handleRadioChange={handleRadioChange}
              />
            </Form.Item>

            {userDetailsSetOne.fileReturnRadio === "yes" && (
              <Form.Item
                label="Upload Last Year's Files"
                name="files"
                valuePropName="fileList"
                getValueFromEvent={handleFileChange}
                rules={[
                  {
                    required: !userDetailsSetOne.fileReturnDocuments.length,
                    message: "Please Upload the Last years files",
                  },
                ]}
              >
                <DraggerComponent
                  userState={userDetailsSetOne.fileReturnDocuments}
                  onChange={handleFileChange}
                  userDetailsSetOne={userDetailsSetOne}
                  setUserDetailsSetOne={setUserDetailsSetOne}
                />
              </Form.Item>
            )}
            <Form.Item
              label="Did you file the returns last year?"
            >
              <RadioGroup
                value={userDetailsSetOne.sCorpRadio}
                name="question2"
                handleRadioChange={handleRadioChange}
              />
            </Form.Item>

            {userDetailsSetOne.sCorpRadio === "yes" && (
              <Form.Item
                label="Please Upload the Incorporation Documents"
                name="files"
                valuePropName="fileList"
                getValueFromEvent={handleFileChange}
                rules={[
                  {
                    required: !userDetailsSetOne.sCorpDocuments.length,
                    message: "Please Upload the Incorporate Documents",
                  },
                ]}
              >
                <DraggerComponent
                  userState={userDetailsSetOne.sCorpDocuments}
                  onChange={handleFileChange}
                  userDetailsSetOne={userDetailsSetOne}
                  setUserDetailsSetOne={setUserDetailsSetOne}
                />
              </Form.Item>
            )}

            <Form.Item label="Was there any changes in Ownership Structure in 2022?">
              <RadioGroup
                value={userDetailsSetOne.ownerShipRadio}
                name="question3"
                handleRadioChange={handleRadioChange}
              />
            </Form.Item>

            {userDetailsSetOne.ownerShipRadio === "yes" && (
              <Form.Item
                label="Upload latest Shareholding pattern"
                name="files"
                valuePropName="fileList"
                getValueFromEvent={handleFileChange}
                rules={[
                  {
                    required: !userDetailsSetOne.shareHoldDocuments.length,
                    message: "Please Upload the latest shareholding pattern",
                  },
                ]}
              >
                <DraggerComponent
                  userState={userDetailsSetOne.shareHoldDocuments}
                  onChange={handleFileChange}
                  userDetailsSetOne={userDetailsSetOne}
                  setUserDetailsSetOne={setUserDetailsSetOne}
                />
              </Form.Item>
            )}

            <Form.Item style={{ textAlign: "right", paddingRight: "8px" }}>
              <Button
                className="custom_button"
                style={{ marginRight: 8 }}
                htmlType="submit"
                onClick={handleSave}
              >
                Save
              </Button>
              <Button className="custom_button" htmlType="submit" onClick={handleNext}>
                Next
              </Button>
            </Form.Item>
          </>
        )}

        {/* Section 2 */}

        {section === 2 && (
          <>
            <Form.Item
              name="checkboxGroup"
              initialValue={[]}
              label="Were there any transactions in 2022?"
            >
              <CheckBox
                options={options}
                userDetailsSetOne={userDetailsSetOne}
                setUserDetailsSetOne={setUserDetailsSetOne}
                handleStorage="transactionCheckbox"
              />
            </Form.Item>

            {userDetailsSetOne.transactionCheckbox.length > 0 && (
              <Form.Item
                label="Upload Documents for the same"
                name="files"
                valuePropName="fileList"
                getValueFromEvent={handleFileChange}
              >
                <DraggerComponent
                  userState={userDetailsSetOne.transactionDocuments}
                  onChange={handleFileChange}
                  userDetailsSetOne={userDetailsSetOne}
                  setUserDetailsSetOne={setUserDetailsSetOne}
                />
              </Form.Item>
            )}

            <Form.Item
              name="checkboxGroup"
              initialValue={[]}
              label="Please Upload the Following Documents:"
            >
              <CheckBox
                options={Documents}
                userDetailsSetOne={userDetailsSetOne}
                setUserDetailsSetOne={setUserDetailsSetOne}
                handleStorage="FinalCheckbox"
              />
            </Form.Item>

            {userDetailsSetOne.FinalCheckbox.length > 0 && (
              <Form.Item
                label="Upload Documents for the same"
                name="files"
                valuePropName="fileList"
                getValueFromEvent={handleFileChange}
                rules={[
                  {
                    required:
                      userDetailsSetOne.FinalCheckbox.length !==
                      userDetailsSetOne.FinalDocuments.length,
                    message:
                      "Please Upload the number of documents that you have selected above",
                  },
                ]}
              >
                <DraggerComponent
                  userState={userDetailsSetOne.FinalDocuments}
                  onChange={handleFileChange}
                  userDetailsSetOne={userDetailsSetOne}
                  setUserDetailsSetOne={setUserDetailsSetOne}
                />
              </Form.Item>
            )}
            <div className="payment">
              Please complete the payment. We will prepare the draft tax return
              within 48 hours!
            </div>

            <Payment
              userDetailsSetOne={userDetailsSetOne}
              setUserDetailsSetOne={setUserDetailsSetOne}
            />
            <hr />

            <CouponSection userDetailsSetOne={userDetailsSetOne}
              setUserDetailsSetOne={setUserDetailsSetOne}/>

            <Form.Item style={{ textAlign: "right", paddingRight: "8px" }}>
              <div className="button_top">
                <div>
                  <Button className="custom_button" onClick={handleBack}>
                    Back
                  </Button>
                </div>
                <div>
                  <Button className="custom_button" onClick={handleSecondSave} htmlType="submit">
                    Save
                  </Button>
                  <Button
                    className="custom_button"
                    style={{ marginRight: 8 }}
                    onClick={handleSubmit}
                    htmlType="button"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form.Item>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default FullPageModal;
