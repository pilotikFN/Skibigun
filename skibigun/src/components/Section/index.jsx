import React from "react";
import styles from "./Section.module.scss";

const Section = ({ background, children }) => {
   return (
      <div className={styles.section}>
         {background && (
            <img src={background} alt="" className={styles.background} />
         )}
         <div className={styles.content}>{children}</div>
      </div>
   );
};

export default Section;
