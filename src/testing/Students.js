import React from "react";

function Students() {
  const studentNames = ["Rahul", "Anita", "Kiran", "Sita", "Arjun"];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {studentNames.map((name, index) => (
          <li key={index}>{name}</li>  // key = unique identifier
        ))}
      </ul>
    </div>
  );
}
export default Students;
