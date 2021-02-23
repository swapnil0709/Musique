import React from "react";
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <h1>Musicque</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
