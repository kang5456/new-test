import React, { useState } from "react";
import BusinessCard from "./BusinessCard";

const ParentComponent = () => {
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleClick = (index) => {
    setClickedIndex(clickedIndex === index ? -1 : index);
  };

  return (
    <div>
        <BusinessCard
        title="B.TechFIN"
        onHandleClick={handleClick}
        index={0}
        />
        <BusinessCard
        title="B.ISP"
        onHandleClick={handleClick}
        index={1}
        />
    </div>
  );
};

export default ParentComponent;
