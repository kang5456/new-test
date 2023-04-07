import React from "react";
import styles from "./TitleSection.module.css";

const TitleSection = ({ title }) => {
  return (
    <div className={styles.titleSection}>
      <h2>{title}</h2>
    </div>
  );
};

export default TitleSection;
