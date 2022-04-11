import { useDispatch } from "react-redux";
import { useState } from "react";
import { login, logout } from "../../redux/actions/user.actions";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [state, setState] = useState({
      username: '',
      password: '',
      submitted: false
    }
  );
  
  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  
  const handleLogin = e => {
    e.preventDefault();
    setState({
      ...state,
      submitted: true,
    });
    
    if (state.username && state.password) {
      dispatch(login(state.username, state.password));
    }
    navigate('/movies');
  };
  
  const handleLogout = e => {
    e.preventDefault();
    setState({
      ...state,
      username: '',
      password: '',
      submitted: false,
    });
    dispatch(logout());
  };
  
  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      <form name="form">
        <div className={'form-group' + (state.submitted && !state.username ? ' has-error' : '')}>
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" name="username" value={state.username} onChange={handleChange}/>
          {state.submitted && !state.username &&
            <div className="help-block">Username is required</div>
          }
        </div>
        <div className={'form-group' + (state.submitted && !state.password ? ' has-error' : '')}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" value={state.password}
                 onChange={handleChange}/>
          {state.submitted && !state.password &&
            <div className="help-block">Password is required</div>
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </div>
  );
};