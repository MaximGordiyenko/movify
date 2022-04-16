import { useDispatch } from "react-redux";
import { useState } from "react";
import { userAction } from "../../redux/actions/user.action";
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
  
  const onChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  
  const onLogin = e => {
    e.preventDefault();
    setState({
      ...state,
      submitted: true,
    });
    
    if (state.username && state.password) {
      dispatch(userAction.login(state.username, state.password));
    }
    navigate('/home');
  };
  
  const onLogout = e => {
    e.preventDefault();
    setState({
      ...state,
      username: '',
      password: '',
      submitted: false,
    });
    dispatch(userAction.logout());
  };

  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      <form name="form">
        <div className={'form-group' + (state.submitted && !state.username ? ' has-error' : '')}>
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" name="username" value={state.username} onChange={onChange}/>
          {state.submitted && !state.username &&
            <div className="help-block">Username is required</div>
          }
        </div>
        <div className={'form-group' + (state.submitted && !state.password ? ' has-error' : '')}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" value={state.password}
                 onChange={onChange}/>
          {state.submitted && !state.password &&
            <div className="help-block">Password is required</div>
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary mr-3" onClick={onLogin}>Login</button>
          <button className="btn btn-primary" onClick={onLogout}>Logout</button>
        </div>
      </form>
    </div>
  );
};