import { createTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

export const logoUrl = 'https://www.freepnglogos.com/uploads/f-logo-orange-png-19.png';

//THEME
export const theme = createTheme({
  root: {
    danger: orange[500],
  },
});
