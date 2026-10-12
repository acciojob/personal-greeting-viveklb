
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  return (
    <div className="greeting-app">
      <main className="greeting-panel">
        <label className="greeting-label" htmlFor="name">
          Your name
        </label>
        <input
          className="greeting-input"
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
        {name.trim() && <p className="greeting-message">Hello, {name}!</p>}
      </main>
    </div>
  );
};

export default App;
