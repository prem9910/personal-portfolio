import { Button, Flex } from "antd";
import React from "react";

import { FaDownload } from "react-icons/fa";
import Skills from "../Skills/Skills";
import SocialMedia from "../SocialMedia/SocialMedia";
import UserInfo from "../UserInfo/UserInfo";
import "./ProfileCard.css";


const ProfileCard = () => {
  return (
    <Flex align="center" justify="center" vertical gap={10} className="profile-card">
      <UserInfo />
      <Skills/>
      <SocialMedia/>
      <Button
        icon={<FaDownload />}
        size="large"
        type="primary"
        className="user-btn"
      >
        Download CV
      </Button>
    </Flex>
  );
};

export default ProfileCard;
