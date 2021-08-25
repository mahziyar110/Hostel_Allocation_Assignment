import firebase from "firebase";
import logo from "../logo192.png";

function Nav(props) {
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <p>Hostel Allocation</p>
        </div>
        {props.isSignedIn && (
          <div className="dp">
            <img src={props.dp} alt="DP"></img>
            <p onClick={() => firebase.auth().signOut()}>Logout</p>
          </div>
        )}
      </header>
    </>
  );
}

export default Nav;
