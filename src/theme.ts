import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#005246",
    },
    secondary: {
      main: "#ff6600",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: false,
      },
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          backgroundColor: "white",
        }
      }
    },
    MuiToolbar:{
      styleOverrides:{
        root:{
          width: "100%"
        }
      }
    }
  },
});
