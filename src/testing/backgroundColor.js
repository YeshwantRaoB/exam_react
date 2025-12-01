import { useState } from "react";

function App() {
  const colors = ["white", "lightblue", "lightgreen", "lightpink"];
  const [bg, setBg] = useState(0);

  return (
    <div style={{ backgroundColor: colors[bg], height: "100vh", textAlign: "center" }}>
      <h1>Change the Background Color</h1>
      <button onClick={() => setBg((bg + 1) % colors.length)}>
        Change Color
      </button>
    </div>
  );
}

export default App;
