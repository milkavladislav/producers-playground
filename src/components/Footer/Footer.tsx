import React from "react";
import "./Footer.css";

interface ILink {
  title: string;
  link: string;
}

interface IFooterLink {
  title: string;
  links: ILink[];
}

const footerLinks: IFooterLink[] = [
  {
    title: "Skills",
    links: [
      { title: "Features", link: "#" },
      { title: "Catalog", link: "#" },
    ],
  },
  {
    title: "Studio",
    links: [
      { title: "Features", link: "#" },
      { title: "About Splice Studio", link: "#" },
      { title: "Managing Your Production Library", link: "#" },
      { title: "Collaborating with Baewatch", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { title: "Ableton Live Projects", link: "#" },
      { title: "FL Studio Projects", link: "#" },
      { title: "Logic Pro X Projects", link: "#" },
      { title: "Garageband Projects", link: "#" },
      { title: "Remix Contests", link: "#" },
      { title: "Tiesto's Secrets", link: "#" },
    ],
  },
  {
    title: "Sounds",
    links: [
      { title: "Features", link: "#" },
      { title: "Catalog", link: "#" },
      { title: "How Jauz Uses Sounds", link: "#" },
      { title: "deadmau5's Chimaera", link: "#" },
      { title: "KSHMR Vol. 2", link: "#" },
    ],
  },
  {
    title: "Plugins",
    links: [
      { title: "Top VSTs", link: "#" },
      { title: "Serum", link: "#" },
      { title: "Rent to Own", link: "#" },
      { title: "Free Plugins", link: "#" },
      { title: "Top Manufacturers", link: "#" },
    ],
  },
  {
    title: "Beatmaker",
    links: [
      { title: "Create Your Own Beat", link: "#" },
      { title: "Wakapella", link: "#" },
      { title: "Just Blaze", link: "#" },
    ],
  },
];

const footerBottomLinks: ILink[] = [
  { title: "Terms of use", link: "#" },
  { title: "Privacy Policy", link: "#" },
  { title: "Jobs", link: "#" },
  { title: "Contact", link: "#" },
  { title: "Help", link: "#" },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer__links">
        {footerLinks.map(({ title, links }, index) => (
          <div className="footer__column" key={index}>
            <h5>{title}</h5>
            <ul>
              {links.map(({ link, title }, linkIndex) => (
                <li>
                  <a href={link} key={linkIndex}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <p className="copyright">© 2023 Splice.com All Rights Reserved</p>
        {footerBottomLinks.map(({ link, title }) => (
          <a href={link}>{title}</a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
