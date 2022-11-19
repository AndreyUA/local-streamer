import { FC, ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import Header from "./Header";
import Footer from "./Footer";

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContainer = styled(Container)`
  flex: 1 1 auto;
`;

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <StyledPaper>
      <Header />
      <StyledContainer>{children}</StyledContainer>
      <Footer />
    </StyledPaper>
  );
};

export default Wrapper;
