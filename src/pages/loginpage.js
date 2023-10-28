import React from "react";
import Header from "../component/Header";
import Loginform from "../component/loginform";
import "../styles/header.css";
import Footer from "./footer";
import "../styles/footer.css";
function Loginpage() {
  return (
    <div>
      <Header />
      <Loginform />
      <Footer />
    </div>
  );
}

export default Loginpage;
