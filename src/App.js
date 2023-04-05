import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Find from "./components/find/Find";
import Typical from "./components/typical/Typical";
import Signiture from "./components/signiture/Signiture";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Typical />
      <Signiture />
      <Footer />
    </div>
  );
}

export default App;
