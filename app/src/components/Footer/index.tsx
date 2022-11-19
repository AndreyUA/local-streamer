import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)`
  flex: 0 1 auto;
`;
const StyledTypo = styled(Typography)`
  padding: 10px;
`;

const Footer = () => {
  return (
    <StyledBox>
      <AppBar position="relative">
        <StyledTypo variant="h6" noWrap align="center">
          Andrii Zhyhariev, 2022.
        </StyledTypo>
      </AppBar>
    </StyledBox>
  );
};

export default Footer;
