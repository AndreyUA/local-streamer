import { Navigate, Route, Routes } from "react-router-dom";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";

import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Player from "./pages/Player";
import theme from "./theme";

const App = () => {
  return (
    <CssVarsProvider theme={theme}>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Wrapper>
    </CssVarsProvider>
  );
};

export default App;
