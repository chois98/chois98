import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Tv />} />
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
