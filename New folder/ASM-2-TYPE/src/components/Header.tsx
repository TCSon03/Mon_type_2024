import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <Link className="logo" to="">
          <img src={logo} alt="" />
        </Link>

        <ul className="navmenu">
          <li>
            <Link className="a" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="a" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="a" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="a" to="/order">
              Orders
            </Link>
          </li>
          <li>
            <Link className="a" to="/login">
              Login
            </Link>
          </li>
        </ul>
        <div className="nav-icon">
          <Link to="">{/* <i className="bx bx-search"></i> */}</Link>
          <Link to="/login">
            <i className="bx bx-user"></i>
          </Link>
          <Link to="/cart">
            <i className="bx bx-cart-alt"></i>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
