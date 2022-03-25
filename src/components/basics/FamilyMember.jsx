import React from "react";

const FamilyMember = ({ name, surname }) => {
  return (
    <p>
      {name} <strong>{surname}</strong>
    </p>
  );
};

export { FamilyMember };
