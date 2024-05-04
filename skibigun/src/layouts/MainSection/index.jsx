import React from "react";
import styles from "./MainSection.module.scss";
import Slide from "../Slide";

import _1 from "../../assets/slides/eng/1.png";
import _2 from "../../assets/slides/eng/2.png";
import _3 from "../../assets/slides/eng/3.png";
import _4 from "../../assets/slides/eng/4.png";
import _5 from "../../assets/slides/eng/5.png";

const MainSection = () => {
   return (
      <div className={styles.root}>
         <Slide image={_1} />
         <Slide image={_2} />
         <Slide image={_3} />
         <Slide image={_4} />
         <Slide image={_5} />
      </div>
   );
};

export default MainSection;
