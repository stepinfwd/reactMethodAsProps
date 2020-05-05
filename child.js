import React from "react";

export default function Child(props) {
  return (
    <div>
      <button onClick={() => props.handleNameChange("kiran")}>
        Show real name
      </button>
    </div>
  );
}
