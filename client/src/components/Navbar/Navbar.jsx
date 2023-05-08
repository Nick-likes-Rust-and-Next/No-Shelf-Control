import { Box } from "@mui/material";
import Lamp from "../Lamp/Lamp";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Navbar.scss';

function Navbar() {
  return (
    // <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"}>
    //   <img src="/images/Banner.png" height={100} alt="no shelf control" />
    //   <Lamp />
    // </Box>

    <div className="navbar">
      <Link className="logo" to='/'>
        <img src='/images/NoShelfControl.png' alt="webpage banner" />
      </Link>
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faSignOutAlt} color='#000' />
        </NavLink>
      </nav>

    </div>
  );
}

export default Navbar;
