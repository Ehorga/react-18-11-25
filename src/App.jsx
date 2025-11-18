import React from "react";
import "./App.css";
import Quote from "./components/Quote/Quote";
import Heading1 from "./components/Heading1/Heading1";

const App = () => {
  return (
    <div>
      <Heading1 />
      <Quote />
      <Quote />
    </div>
  );
};

export default App;
