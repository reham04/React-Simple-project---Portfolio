import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa"; // أيقونة السلة

export default function Header() {
    const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header>
      <nav>
        {/* Left side: Search + Logo */}
        <div className="nav-left">
          <div className="logo">
            <img src={logo} alt="Edusion Logo" />
          </div>
        </div>
         {/* Nav Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
         {/* Right side */}
        <div className="nav-right">
          {/* Search icon */}
          <div className="search-container">
            <button className="search-btn" onClick={toggleSearch}>🔍</button>
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            )}
          </div>

       

          <FaShoppingCart className="cart-icon" />
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}
