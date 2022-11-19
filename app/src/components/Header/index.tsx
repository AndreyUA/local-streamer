import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

const StyledBox = styled(Box)`
  flex: 0 1 auto;
`;

const Header = () => {
  return (
    <StyledBox>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Home stream service&nbsp;
            <FavoriteIcon />
          </Typography>
        </Toolbar>
      </AppBar>
    </StyledBox>
  );
};

export default Header;
