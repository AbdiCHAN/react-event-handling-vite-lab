// src/SubmitButton.jsx
import React from "react";

/**
 * SubmitButton component
 * Renders a button that logs mouse events
 */
export default function SubmitButton() {
  // Called when mouse enters the button
  const handleEnter = () => {
    console.log("Mouse Entering"); // Logs hover event
  };

  // Called when mouse leaves the button
  const handleLeave = () => {
    console.log("Mouse Exiting"); // Logs mouse leave
  };

  return (
    <div>
      <button
        onMouseEnter={handleEnter} // Triggered when hovering
        onMouseLeave={handleLeave} // Triggered when leaving
      >
        Submit Password
      </button>
    </div>
  );
}
