import React from "react";
import Benefits from "./components/Benefits/Benefits";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Promo from "./components/Promo/Promo";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Benefits />
      <Feedback />
      <Promo />
      <Footer />
    </>
  );
}

export default App;
