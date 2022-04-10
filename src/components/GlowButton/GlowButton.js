import { Link } from "@material-ui/core";
import classes from './GlowButton.module.css';

export const GlowButton = ({ text, type, to }) => {
  return (
    <div className={classes.container}>
      <Link to={to} type={type} component="button"
            className={classes.links}>
        <span className={classes.btnName}>
          {text}
        </span>
      </Link>
    </div>
  );
};
