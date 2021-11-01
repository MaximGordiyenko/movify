import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles(() => ({
  loading: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 300,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}));