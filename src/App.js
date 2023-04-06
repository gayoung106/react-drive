import React from "react";
import Navbar from "./components/navbar/Navbar";
import Find from "./components/find/Find";
import Typical from "./components/typical/Typical";
import Signiture from "./components/signiture/Signiture";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Find />
      <Typical />
      <Signiture />
      <Footer />
    </div>
  );
}

export default App;
