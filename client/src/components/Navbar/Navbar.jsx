import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import Switch from "@mui/material/Switch";

function Navbar(props) {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src="/images/NoShelfControl.png" alt="webpage banner" />
      </Link>
      <nav>
        <Switch defaultChecked onClick={props.themeSwitch} />
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faSignOutAlt} color="#000" />
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
