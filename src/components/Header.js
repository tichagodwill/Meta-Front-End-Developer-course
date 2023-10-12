import logo from "../assets/Logo.svg";
import basket from "../assets/Basket.svg";
import burger from "../assets/Burger.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Section from "./Section";
const Links = ["Home", "About", "Menu", "Reservations", "Order", "Login"];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBasket, setShowBasket] = useState(true);
  const location = useLocation();

  function NavLink({ children }) {
    const cname =
      location.pathname === "/" + children
        ? "navlink navlink_selected"
        : "navlink";
    return (
      <li className={cname}>
        <Link to={children}>{children}</Link>
      </li>
    );
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(false);
    setShowBasket(location.pathname !== "/Reservations");
  }, [location]);

  return (
    <Section as="header" nopadding={true}>
      <nav className="navbar desktop">
        <img src={logo} alt="Little Lemon Logo"></img>
        <menu className="navbar_menu">
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </menu>
        {showBasket ? (
          <img src={basket} alt="Basket icon"></img>
        ) : (
          <div
            style={{
              width: "46px",
              height: "47px",
            }}
          ></div>
        )}
      </nav>
      <nav className="navbar mobile">
        <div>
          <button aria-label="Options" onClick={() => handleClick()}>
            <img src={burger} alt="open menu icon" />
          </button>
          {isOpen && (
            <menu className="navbar_vmenu">
              {" "}
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}{" "}
            </menu>
          )}
        </div>
        <img src={logo} alt="Little Lemon Logo"></img>
        {showBasket ? (
          <img src={basket} alt="Basket icon"></img>
        ) : (
          <div
            style={{
              width: "46px",
              height: "47px",
            }}
          ></div>
        )}
      </nav>
    </Section>
  );
}

export default Header;
