import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

const StyledBox = styled(Box)`
  flex: 0 1 auto;
`;
const HomeButton = styled(IconButton)`
  position: absolute;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToHomePage = (): void => {
    navigate("/");
  };

  return (
    <StyledBox>
      <AppBar position="static">
        <Toolbar>
          {location.pathname !== "/" && (
            <HomeButton
              onClick={navigateToHomePage}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HomeIcon />
            </HomeButton>
          )}

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
