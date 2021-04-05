import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const styleMenu = {
    right: menu ? 0 : "-100%",
  };

  return (
    <nav>
      <Link to="/" className="logo">
        Mendoza
      </Link>

      <div className="menu" onClick={() => setMenu(!menu)}>
        <i className="fas fa-bars"></i>
      </div>

      <ul style={styleMenu}>
        <li>
          <Link to="/" onClick={() => setMenu(!menu)}>
            <i className="fas fa-home"></i>&nbsp;Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenu(!menu)}>
            <i className="fas fa-mountain"></i>&nbsp;About Us
          </Link>
        </li>
        <li>
          <Link to="/wines" onClick={() => setMenu(!menu)}>
            <i className="fas fa-wine-bottle"></i>&nbsp;Wines
          </Link>
        </li>
        <li>
          <Link to="/customers" onClick={() => setMenu(!menu)}>
            <i className="far fa-laugh-beam"></i>&nbsp;Customers
          </Link>
        </li>
        <li>
          <Link to="/newcustomers" onClick={() => setMenu(!menu)}>
            <i className="fas fa-user-plus"></i>&nbsp;New Customers
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenu(!menu)}>
            <i className="far fa-paper-plane"></i>&nbsp;Contact
          </Link>
        </li>
        <li className="cruz" onClick={() => setMenu(!menu)}>
          <i className="fas fa-times"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
