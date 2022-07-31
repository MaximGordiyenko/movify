import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>Home Page</h4>
          <div className="col s6">
            <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue accent-3">
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};