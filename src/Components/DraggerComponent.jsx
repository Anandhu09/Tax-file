import React from "react";
import { Upload, message, List } from "antd";
import {
  CloudUploadOutlined,
  FileOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import "./DraggerComponent.css";
const DraggerComponent = ({
  userState,
  userDetailsSetOne,
  setUserDetailsSetOne,
  onChange,
}) => {
  const handleRemove = (file) => {
    if (userState === userDetailsSetOne.fileReturnDocuments) {
      const newFileList = userDetailsSetOne.fileReturnDocuments.filter(
        (item) => item !== file
      );
      setUserDetailsSetOne((prevDetails) => ({
        ...prevDetails,
        fileReturnDocuments: newFileList,
      }));
    }
    if (userState === userDetailsSetOne.sCorpDocuments) {
      const newFileList = userDetailsSetOne.sCorpDocuments.filter(
        (item) => item !== file
      );
      setUserDetailsSetOne((prevDetails) => ({
        ...prevDetails,
        sCorpDocuments: newFileList,
      }));
    }
    if (userState === userDetailsSetOne.shareHoldDocuments) {
      const newFileList = userDetailsSetOne.shareHoldDocuments.filter(
        (item) => item !== file
      );
      setUserDetailsSetOne((prevDetails) => ({
        ...prevDetails,
        shareHoldDocuments: newFileList,
      }));
    }
    if (userState === userDetailsSetOne.transactionDocuments) {
      const newFileList = userDetailsSetOne.transactionDocuments.filter(
        (item) => item !== file
      );
      setUserDetailsSetOne((prevDetails) => ({
        ...prevDetails,
        transactionDocuments: newFileList,
      }));
    }
    if (userState === userDetailsSetOne.FinalDocuments) {
      const newFileList = userDetailsSetOne.FinalDocuments.filter(
        (item) => item !== file
      );
      setUserDetailsSetOne((prevDetails) => ({
        ...prevDetails,
        FinalDocuments: newFileList,
      }));
    }
  };

  const props = {
    multiple: true,
    beforeUpload: (file) => {
      if (userState === userDetailsSetOne.fileReturnDocuments) {
        setUserDetailsSetOne((prevDetails) => ({
          ...prevDetails,
          fileReturnDocuments: [...prevDetails.fileReturnDocuments, file],
        }));
      }
      if (userState === userDetailsSetOne.sCorpDocuments) {
        setUserDetailsSetOne((prevDetails) => ({
          ...prevDetails,
          sCorpDocuments: [...prevDetails.sCorpDocuments, file],
        }));
      }
      if (userState === userDetailsSetOne.shareHoldDocuments) {
        setUserDetailsSetOne((prevDetails) => ({
          ...prevDetails,
          shareHoldDocuments: [...prevDetails.shareHoldDocuments, file],
        }));
      }
      if (userState === userDetailsSetOne.transactionDocuments) {
        setUserDetailsSetOne((prevDetails) => ({
          ...prevDetails,
          transactionDocuments: [...prevDetails.transactionDocuments, file],
        }));
      }
      if (userState === userDetailsSetOne.FinalDocuments) {
        setUserDetailsSetOne((prevDetails) => ({
          ...prevDetails,
          FinalDocuments: [...prevDetails.FinalDocuments, file],
        }));
      }
      message.success(`${file.name} file added`);
      return false;
    },
  };

  return (
    <>
      <Upload.Dragger
        {...props}
        showUploadList={false}
        rules={[{ required: true, message: "Please upload a file" }]}
      >
        <p className="ant-upload-drag-icon">
          <CloudUploadOutlined />
        </p>
        <p className="ant-upload-text">
          <strong>Browse Files </strong>
        </p>
        <p className="ant-upload-hint">
          <strong>Drag and drop files here</strong>
        </p>
      </Upload.Dragger>
      {
        <List
          size="small"
          dataSource={userState}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<FileOutlined />}
                title={
                  <a
                    href={URL.createObjectURL(item)}
                    download={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                }
              />
              <span
                style={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
                onClick={() => handleRemove(item)}
              >
                <DeleteFilled /> Remove
              </span>
            </List.Item>
          )}
          locale={{ emptyText: "" }}
        />
      }
    </>
  );
};

export default DraggerComponent;
