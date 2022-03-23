import React from "react";

export default function ComParametro({ title, student, grade }) {
  const status = grade >= 7 ? "Approved" : "Disapproved";

  return (
    <div>
      <h2>{title}</h2>
      <p>
        <strong> {student} </strong>
        has grade
        <strong> {grade} </strong>and is
        <strong> {status}</strong>
      </p>
    </div>
  );
}
