import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "@mui/material";
import { usersAction } from "../../redux/actions/users.action";

export const HomePage = () => {
  const dispatch = useDispatch();
  
  const { user } = useSelector(state => state?.authentication);
  
  useEffect(() => {
    dispatch(usersAction.getAll());
  }, [dispatch]);
  console.log(user);
  return (
    <div className="col-md-6 col-md-offset-3">
      <h1>Hi {user.username}!</h1>
      <p>You're logged in with React & JWT!!</p>
      <h3>Users from secure api end point:</h3>
      {user.loggedIn && <em>Loading users...</em>}
      {user.error && <span className="text-danger">ERROR: {user.error}</span>}
      <p>
        <Link type='button' to="/SignOut">Logout</Link>
      </p>
    </div>
  );
};