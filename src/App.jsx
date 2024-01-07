import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
