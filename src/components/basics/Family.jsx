import React, { cloneElement } from "react";

const Family = (props) => {
  const { children } = props;

  return (
    <div>
      {children.map((child, idx) => {
        return cloneElement(child, { ...props, key: idx });
      })}
    </div>
  );
};

export { Family };
