import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./Components/Hero";
import './App.css';

const App = () => {
  const [cursorActive, setCursorActive] = useState(false);

  return (
    <>
      <CustomCursor isActive={cursorActive} />
      <Navbar setCursorActive={setCursorActive} />
      < Hero />
   
    </>
  );
}

export default App;
