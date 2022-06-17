import { FaBaby } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui inverted menu">
      <div className="item">
        <Link to="/">
          <FaBaby />
        </Link>
      </div>
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/food" className="item">
        Activity
      </Link>
      <div className="right menu">
        <Link to="/login" className="item">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
