import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  loading: {
    display: 'flex',
    justifyContent: 'space-around',
   
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 30,
  },
}));