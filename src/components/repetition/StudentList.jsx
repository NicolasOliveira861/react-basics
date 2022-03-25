import React from "react";
import { students } from "data/students";

const StudentList = (props) => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {students.map((student, idx) => {
          const { name, grade, id } = student;

          return (
            <li key={id}>
              {`${idx + 1})`} {name} - {grade}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { StudentList };
