import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "@mui/material";
import { getAll } from "../../redux/actions/users.action";

export const HomePage = () => {
  const dispatch = useDispatch();
  
  const { users } = useSelector(state => state?.users);
  const { user } = useSelector(state => state?.authentication?.user);
  
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);
  
  return (
    <div className="col-md-6 col-md-offset-3">
      <h1>Hi {user.firstName}!</h1>
      <p>You're logged in with React & JWT!!</p>
      <h3>Users from secure api end point:</h3>
      {users.loading && <em>Loading users...</em>}
      {users.error && <span className="text-danger">ERROR: {users.error}</span>}
      {users.items &&
        <ul>
          {users.items.map((user) =>
            <li key={user.id}>
              {user.firstName + ' ' + user.lastName}
            </li>
          )}
        </ul>
      }
      <p>
        <Link to="/SignOut">Logout</Link>
      </p>
    </div>
  );
};