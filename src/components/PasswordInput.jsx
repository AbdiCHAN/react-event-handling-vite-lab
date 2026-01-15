// src/PasswordInput.jsx
import React, { useState } from "react";

/**
 * PasswordInput component
 * Renders an input of type password
 * Tracks typing and prints console log on change
 */
export default function PasswordInput() {
  // State to store the input value
  const [password, setPassword] = useState("");

  // Called every time user types in the input
  const handleChange = (e) => {
    setPassword(e.target.value); // Update state with typed value
    console.log("Entering password..."); // Log message exactly as required by tests
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"            // Ensures input is hidden
        id="password"
        value={password}           // Controlled input
        onChange={handleChange}    // Tracks typing
        placeholder="Enter your password"
      />
    </div>
  );
}
