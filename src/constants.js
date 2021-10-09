import { createTheme } from '@material-ui/core/styles';

export const logoUrl = 'https://www.freepnglogos.com/uploads/f-logo-orange-png-19.png';

//THEME
export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(231,238,236,0.84)',
    },
  },
  typography: {
    fontFamily: 'Asap',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});
