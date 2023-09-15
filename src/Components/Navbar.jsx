import React, { useState } from "react";
import { Layout, Menu, Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "../logo.svg";
import "./NavbarStyle.css";

const { Header } = Layout;

const Navbar = ({  showModal }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Button
          style={{
            padding: "0.2rem 2rem",
            background: "#55bb53",
            fontWeight: "600",
            textTransform: "uppercase",
            color: "White",
          }}
          onClick={showModal}
        >
          Fill the Form
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "White",
        height: "100px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={Logo}
          alt="Company Logo"
          style={{ width: "80px", height: "80px", marginRight: "10px" }}
        />
      </div>
      <div className="mobile-button">
        <Dropdown overlay={menu} placement="bottomCenter" trigger={["click"]}>
          <Button
            style={{ background: "#55bb53", color: "White" }}
            onClick={toggleCollapsed}
          >
            <MenuOutlined />
          </Button>
        </Dropdown>
      </div>
      <Button
        style={{
          padding: "0.2rem 2rem",
          background: "#55bb53",
          fontWeight: "600",
          textTransform: "uppercase",
          color: "White",
        }}
        onClick={showModal}
        className="desktop-button"
      >
        Fill the Form
      </Button>
    </Header>
  );
};

export default Navbar;
