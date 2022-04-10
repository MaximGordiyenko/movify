import { useDispatch, useSelector } from "react-redux";
import { Route } from 'react-router-dom';
import { history } from '../../helpers/history';
import { alertActions } from '../../redux/actions/alert.actions';
import { PrivateRoute } from '../PrivateRoute';
import { HomePage } from '../HomePage/HomePage';
import { LoginPage } from '../LoginPage/LoginPage';

export const Main = () => {
  const dispatch = useDispatch();
  const { alert } = useSelector(state => state?.alert);
  
  history.listen((location, action) => {
    // clear alert on location change
    dispatch(alertActions.clear());
  });
  
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          {alert?.message &&
            <div className={`alert ${alert?.type}`}>{alert?.message}</div>
          }
          <Route history={history}>
            <div>
              <PrivateRoute path="/create" component={HomePage}/>
              <Route path="/login" component={LoginPage}/>
            </div>
          </Route>
        </div>
      </div>
    </div>
  );
};