import { Flex, Typography } from "antd";
import React from "react";
import { FaPhone } from "react-icons/fa"; // Add this import for the phone icon
import PageTitle from "../../components/PageTitle/PageTitle";
import Skills from "../../components/Skills/Skills"; // Add this import for the Skills component
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { userData } from "../../data/userData";

import { FaGlobe, FaLocationDot, FaMessage } from "react-icons/fa6";
import "./About.css";

const { Title, Text, Paragraph } = Typography;
const About = () => {
   const {education} = userData; 
  return (
    <>
      <PageTitle pageTitle="About Me" />
      <Flex gap={20} vertical>
        <Flex
          gap={20}
          align="center"
          className="gray-bg padding-10 user-personal"
        >
          <img
            src={userData.profile}
            alt={userData.name}
            className="user-image"
          />
          <Flex vertical gap={30}>
            <Flex gap={10} vertical className="user-details">
              <div className="user-details">
                <Title level={1} strong type="secondary">
                  {userData.name}
                </Title>
                <Text strong type="secondary">
                  {userData.role}
                </Text>
              </div>
            </Flex>
            <SocialMedia about={true} />
          </Flex>
        </Flex>

        <Flex gap={10} className="about-details">
          <Flex vertical gap={10} className="gray-bg padding-10">
            <Skills />

            <Flex className="padding-10" vertical gap={10}>
              <Flex align="center" gap={10}>
                <FaPhone className="about-icon" />
                <Text>{userData.phone}</Text>
              </Flex>

              <Flex align="center" gap={10}>
                <FaMessage className="about-icon" />
                <Text>{userData.email}</Text>
              </Flex>
              <Flex align="center" gap={10}>
                <FaLocationDot className="about-icon" />
                <Text>{userData.address}</Text>
              </Flex>
              <Flex align="center" gap={10}>
                <FaGlobe className="about-icon" />
                <Text>{userData.website}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex vertical gap={10} className="gray-bg padding-10">
            <Text type="secondary" strong>
              About
            </Text>
            <Paragraph>{userData.about}</Paragraph>
          </Flex>
        </Flex>

        <Flex vertical gap={10} className="gray-bg padding-10">
          <Text type="secondary" strong>
            Education
          </Text>
          <Flex gap={10} vertical className="padding-10">
            {education.map((edu, index) => (
              <Flex
                key={index}
                gap={10}
                align="center"
                justify="space-between"
                wrap="wrap"
              >
                <Flex>
                  <Text>{edu.university}</Text>
                  <Text>{edu.degree}</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
