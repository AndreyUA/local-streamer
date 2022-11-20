import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import { deepPurple, purple } from "@mui/material/colors";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: deepPurple[600],
        },
        secondary: {
          main: purple["A700"],
        },
        background: {
          paper: deepPurple[900],
        },
        text: {
          primary: purple["A700"],
        },
      },
    },
  },
});

export default theme;
