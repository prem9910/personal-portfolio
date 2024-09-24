import { Flex } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import './index.css';
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";

const App = () => {
  return (
    <Flex gap={20} className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <ProfileCard />
    </Flex>
  );
};

export default App;
