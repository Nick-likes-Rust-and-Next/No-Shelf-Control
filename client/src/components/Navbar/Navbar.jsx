import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import Switch from "@mui/material/Switch";

function Navbar(props) {
  let isLoggedIn = false;

  function LoginButton({ isLoggedIn }) {
    return isLoggedIn ? (
      <NavLink to='/'>
        <button>Logout</button>
      </NavLink>
    ) : (
      <NavLink to='/login'>
        <button>Login</button>
      </NavLink>
    );
  }
  


  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src="/images/NoShelfControl.png" alt="webpage banner" />
      </Link>
      <nav>
        <NavLink to='/'>
          <a>Home</a>
        </NavLink>
        <Switch defaultChecked onClick={props.themeSwitch} />
        <LoginButton isLoggedIn={isLoggedIn} />
        
      </nav>
    </div>
  );
}

export default Navbar;
