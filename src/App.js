import React from "react";
import Navbar from "./components/nabar/Navbar";
import Hero from "./components/hero/Hero";
import Categories from "./components/category/Categories"
import Recents from "./components/recents/Recents";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories/>
      <Recents/>
    </>
  );
};

export default App;
