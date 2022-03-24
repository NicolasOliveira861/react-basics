import React from "react";
import "./styles.css";

const Card = ({ title, color, children }) => {
  const styles = {
    backgroundColor: color || "#F00",
    borderColor: color || "#F00",
  };

  return (
    <div className="Card">
      <span className="Title" style={styles}>
        {title}
      </span>
      <div className="Content">{children}</div>
    </div>
  );
};

export default Card;
