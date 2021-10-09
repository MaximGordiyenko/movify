import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
  btn: {
    color: 'lavender',
    '&:hover': {
      color: 'lightblue'
    }
  }
});
