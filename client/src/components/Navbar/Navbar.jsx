import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import Switch from "@mui/material/Switch";

function Navbar(props) {
  let isLoggedIn = true;

  function LoginButton({ isLoggedIn }) {
    return isLoggedIn ? (
      <form action="/" method="post">
        <button>Logout</button>
      </form>
    ) : (
      <form action="/" method="post">
        <button>Login</button>
      </form>
    );
  }
  


  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src="/images/NoShelfControl.png" alt="webpage banner" />
      </Link>
      <nav>
        <Switch defaultChecked onClick={props.themeSwitch} />
        <NavLink exact="true" activeclassname="active" to="/">
          <LoginButton isLoggedIn={isLoggedIn} />
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
