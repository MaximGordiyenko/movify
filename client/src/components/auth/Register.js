import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authAction } from "../../redux/actions/auth.action";
import classnames from 'classnames';

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  
  const { user } = useSelector(state => state?.authUser);
  const { error } = useSelector(state => state?.error);
  
  useEffect(() => {
    if (user.email) {
      navigate('/login');
    }
  }, [user.email, navigate]);
  
  const onChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  
  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
      password2: state.password2
    };
    dispatch(authAction.registerUser(newUser));
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
              <b>Register</b>
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={state.name}
                error={error?.name}
                name="name"
                id="name"
                type="text"
                className={classnames("", {
                  invalid: error?.name
                })}
              />
              <label htmlFor="name">Name</label>
              <span className="red-text">{error?.name}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={state.email}
                error={error?.email}
                name="email"
                id="email"
                type="email"
                className={classnames("", {
                  invalid: error?.email
                })}
              />
              <label htmlFor="email">Email</label>
              <span className="red-text">{error?.email}</span>
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
                  invalid: error?.password
                })}
              />
              <label htmlFor="password">Password</label>
              <span className="red-text">{error?.password}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={onChange}
                value={state.password2}
                error={error?.password2}
                name="password2"
                id="password2"
                type="password"
                className={classnames("", {
                  invalid: error?.password2
                })}
              />
              <label htmlFor="password2">Confirm Password</label>
              <span className="red-text">{error?.password2}</span>
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
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};