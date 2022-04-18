import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../redux/actions/auth.action";
import { Link, useNavigate } from "react-router-dom";
import classnames from 'classnames';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  
  // const { user } = useSelector(state => state?.authUser);
  const { isAuthenticated } = useSelector(state => state?.authUser);
  const { error } = useSelector(state => state?.authError);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);
  
  const onChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  
  const onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: state.email,
      password: state.password
    };
    dispatch(authAction.loginUser(userData));
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Login</b>
            </h4>
            <p className="grey-text text-darken-1">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={state.email}
                error={error?.email}
                name="email"
                id="email"
                type="email"
                className={classnames("", {
                  invalid: error?.email || error?.emailnotfound
                })}
              />
              <label htmlFor="email">Email</label>
              <span className="red-text">{error?.email} {error?.emailnotfound}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={state.password}
                error={error?.password}
                name="password"
                id="password"
                type="password"
                className={classnames("", {
                  invalid: error?.password || error?.passwordincorrect
                })}
              />
              <label htmlFor="password">Password</label>
              <span className="red-text">{error?.password} {error?.passwordincorrect}</span>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};