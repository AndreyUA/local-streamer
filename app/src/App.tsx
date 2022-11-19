import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Player from "./pages/Player";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="player" element={<Player />} />
    </Routes>
  );
};

export default App;
