import { useDispatch } from "react-redux";
import { authAction } from "../../redux/actions/auth.action";

export const Dashboard = () => {
  const dispatch = useDispatch();
  
  const onLogoutClick = e => {
    e.preventDefault();
    dispatch(authAction.logout());
  };
  
  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            {/*<b>Hey there,</b> {user.name.split(" ")[0]}*/}
            <p className="flow-text grey-text text-darken-1">
              You are logged into a full-stack{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
            </p>
          </h4>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            onClick={onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};