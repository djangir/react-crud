import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Crud from "./Crud/Crud";
function App () {
  return (
    <>
      <Router>
        <Header />
        <Crud />
      </Router>
      <Footer />
    </>
  );
}
export default App;
