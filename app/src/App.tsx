import { Route, Routes } from "react-router-dom";

import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Player from "./pages/Player";

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
