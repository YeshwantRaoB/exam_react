import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component Mounted"); // runs only once when component loads
  }, []); // empty dependency array = run only on mount

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Check the Console</h1>
      <p>Open your browser console to see the message.</p>
    </div>
  );
}

export default App;
