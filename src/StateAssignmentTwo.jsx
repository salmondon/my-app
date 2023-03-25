import React, { useState } from "react";

function StateAssignmentTwo() {
  const [numbers, setNumbers] = useState([]);

  function handleClick() {
    const newNumber = Math.floor(Math.random() * 10);
    setNumbers([...numbers, newNumber]);
  }

  return (
    <section>
      <button onClick={handleClick}>Click me!</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </section>
  );
}

export default StateAssignmentTwo;
