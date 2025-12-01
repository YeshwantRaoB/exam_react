import React from "react";

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

//Main component
function App() {
    return (
        <div>
            <Greeting name="Yeshwant" />
            <Greeting name="Rahul" />
        </div>
    );
}

export default App;