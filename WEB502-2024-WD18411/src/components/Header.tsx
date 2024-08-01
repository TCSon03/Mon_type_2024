import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import logo from "../assets/user";
import logo from "../assets/logo.png";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Link to="">
        <img src={logo} alt="" />
      </Link>

      <ul className="navmenu">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">Page</a>
        </li>
        <li>
          <a href="">Docs</a>
        </li>
      </ul>
      <div className="nav-icon">
        <Link to="">
          <img src="" alt="" />
        </Link>
        <Link to="">
          <img src="" alt="" />
        </Link>
        <Link to="">
          <img src="" alt="" />
        </Link>
        <div className="bx bx-menu" id="menu-icon"></div>
      </div>
    </header>
  );
};

export default Header;
