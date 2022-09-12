import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Organism/pages/HomePage";
import SampleDom from "./components/Organism/pages/SampleDom";

const user = {
  name: "Abul Qasim",
  title: "Software Engineer",
};
function App() {
  let reactElem = React.createElement("div", { user }, "Hello, " + user.name);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sampleDom" element={<SampleDom />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
