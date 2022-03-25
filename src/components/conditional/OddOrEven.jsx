import React from "react";

const OddOrEven = ({ number }) => {
  const isEven = number % 2 === 0;

  return (
    <div>
      <h2>{`${number} - ${isEven ? "Even" : "Odd"}`}</h2>
    </div>
  );
};

export { OddOrEven };
