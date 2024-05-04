import React from "react";
import styles from "./Slide.module.scss";

const Slide = ({ image }) => {
   return (
      <img className={styles.slide} src={image} alt="something went wrong" />
   );
};

export default Slide;
