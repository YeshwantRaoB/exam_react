// Child.js
import React from "react";

function Child(props) {
  return <h2>Hello, {props.name}!</h2>;
}

export default Child;

// Parent.js
// import React from "react";
// import Child from "./Child";

// function Parent() {
//   return (
//     <div>
//       <h1>This is the Parent Component</h1>
//       <Child name="Yeshwant" />   {/* Passing props */}
//     </div>
//   );
// }

// export default Parent;
