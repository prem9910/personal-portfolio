import {
    Button,
    Card,
    Divider,
    Flex,
    Pagination,
    Progress,
    Tag,
    Typography
} from "antd";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import PageTitle from "../../components/PageTitle/PageTitle";
import { userData } from "../../data/userData";
import "./Projects.css";

const { Title, Text } = Typography;

const Projects = () => {
  const { projects } = userData;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

 

  return (
    <>
      <PageTitle pageTitle="Projects" />
      <div
        className="Projects"
        style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
      >
        {paginatedProjects.map((project, index) => (
          <Card
            key={index}
            style={{ background: project.bg, flex: "1 1 calc(33.33% - 16px)" }}
          >
            <Flex gap={10} vertical>
              <Flex align="center" justify="space-between">
                <Text type="secondary">{project.startDate}</Text>
                <Tag color={project.color}>{project.time}</Tag>
              </Flex>

              <Flex vertical align="center" justify="center">
                <Title level={3}>{project.title}</Title>
                <Text>{project.description}</Text>
              </Flex>
              <Flex vertical>
                <Text>Progress</Text>
                <Progress percent={project.progress} status="active" />
              </Flex>

              <Divider />

              <Flex align="center" justify="space-between" gap={10}>
                
                  <a
                    href={project.githubLink}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "black",
                      hover: {
                        color: "blue",
                      },
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  <Button
                    icon={<FaDisplay />}
                    size="medium"
                    type="primary"
                    className="project-btn"
                  >
                    Preview
                  </Button>
                
                
              </Flex>
            </Flex>
          </Card>
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={projects.length}
        onChange={handlePageChange}
        style={{
          margin: "20px",
          textAlign: "center",
          justifyContent: "center",
        }}
      />
    </>
  );
};

export default Projects;
