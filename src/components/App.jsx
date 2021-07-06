import React from "react";
import Greetings from "./Greetings";
import List from "./List";
import Welcome from "./Welcome";
import ColoredWelcome from "./ColoredWelcome";

function App() {
  return (
    <div>
      <Welcome />
      <Greetings />
      <ColoredWelcome />
      <List />
    </div>
  );
}

export default App;
