import React from "react";
import { randomize } from "utils/randomize";

const RandomNumber = ({ min, max }) => {
  return (
    <div>
      <h1>Random Number</h1>
      <p>Max: {max}</p>
      <p>Min: {min}</p>
      <p>
        <strong>Number returned: </strong> {randomize(min, max)}
      </p>
    </div>
  );
};

export default RandomNumber;
