import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../redux/actions/user.actions";

export const LoginPage = () => {
  const dispatch = useDispatch();
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      submitted: true
    });
    
    if (state.susername && state.password) {
      dispatch(login(state.username, state.password));
    }
  };
  
  const loggingIn = true;
  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      <form name="form" onSubmit={handleSubmit}>
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
          <button className="btn btn-primary">Login</button>
          {loggingIn &&
            <img
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              alt={state.username}
            />
          }
        </div>
      </form>
    </div>
  );
};