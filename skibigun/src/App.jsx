import { useState } from "react";
import "./App.css";
import Section from "@components/Section";

import logo from "@assets/logo.png";
import first_slogan from "@assets/slogans/first_slogan.png";

import skibishosk_bg from "./assets/bg/skibishosk_bg.png";

function App() {
   return (
      <div className="main">
         <Section>
            <img src={logo} alt="" width="100%" />
            <img src={first_slogan} alt="" width="100%" />
         </Section>
      </div>
   );
}

export default App;
