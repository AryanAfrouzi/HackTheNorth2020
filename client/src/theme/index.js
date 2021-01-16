import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "red",
        margin: "10px",
        "&:hover": {
          backgroundColor: "green",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#123123",
    },
    secondary: {
      main: "#123123",
    },
  },
});
