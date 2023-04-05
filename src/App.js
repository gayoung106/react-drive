import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Find from "./components/find/Find";
import Typical from "./components/typical/Typical";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Typical />
    </div>
  );
}

export default App;
