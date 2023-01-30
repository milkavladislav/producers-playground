import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";

interface INavLink {
  title: string;
  link: string;
}

const navLinks: INavLink[] = [
  { title: "Sound", link: "#sounds" },
  { title: "Skills", link: "#skills" },
  { title: "Plugins", link: "#plugins" },
  { title: "Studio", link: "#studio" },
  { title: "Community", link: "#community" },
  { title: "Blog", link: "#blog" },
  { title: "Pricing", link: "#pricing" },
];

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        <img src={Logo} alt="logo" />
      </a>
      <nav>
        <ul>
          {navLinks.map(({ title, link }) => (
            <li>
              <a href={"/" + link}>{title}</a>
            </li>
          ))}
        </ul>

        <div className="login-sign-up-buttons">
          <button className="login-button">Login</button>
          <button className="sign-up-button">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
