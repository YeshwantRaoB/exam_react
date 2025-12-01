// Form.js
import React, { useState } from "react";

function Form() {
  // State for input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div>
      <h2>React Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
