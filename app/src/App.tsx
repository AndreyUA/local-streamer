import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Player from "./pages/Player";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
};

export default App;
