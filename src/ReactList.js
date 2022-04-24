import React from "react";

function ReactList() {
  const data = [
    { name: "Daniel", age: 25 },
    { name: "John", age: 24 },
    { name: "Jen", age: 31 },
  ];

  return data.map((person) => (
    <div>
      <li>
        <span>
          {person.name}
          {` `}
        </span>
        <span>{person.age}</span>
      </li>
    </div>
  ));
}

export default ReactList;
