import React from "react";

const RandomNumber = ({ min, max }) => {
  const randomize = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div>
      <h1>Random Number</h1>
      <p>Max: {max}</p>
      <p>Min: {min}</p>
      <p>
        <strong>Number returned: </strong> {randomize}
      </p>
    </div>
  );
};

export default RandomNumber;
