import { AppstoreOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const items = [
  {
    label: <Link to="/">About</Link>,
    key: "about",
    icon: <MailOutlined />,
  },
  {
    label: <Link to="/projects">Projects</Link>,
    key: "projects",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: "contact",
    icon: <MessageOutlined />,
  }
];
const Navbar = () => {
  const [current, setCurrent] = useState("about");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <div className="navbar">
      <Menu
        
        onClick={onClick}
        selectedKeys={[current]}
        mode={window.innerWidth <=800 ? "horizontal":"inline"}
        items={items}
      />
    </div>
  );
};

export default Navbar;
