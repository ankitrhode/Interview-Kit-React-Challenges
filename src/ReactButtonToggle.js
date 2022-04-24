import React, { useState } from "react";

function ReactButtonToggle() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h2>ReactButtonToggle</h2>

      <button onClick={handleToggle}>{toggle ? "ON" : "OFF"}</button>
    </div>
  );
}

export default ReactButtonToggle;
