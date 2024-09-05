import { Flex } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import About from "./pages/About/About";

const App = () => {
  return (
    <Flex gap={20} className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<About />} />
          <Route path="projects" element={<h1>Projects</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
        </Route>
      </Routes>
      <ProfileCard />
    </Flex>
  );
};

export default App;
