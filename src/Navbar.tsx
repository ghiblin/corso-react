import { Link } from "react-router-dom";

interface LinkProps {
  label: string;
  path: string;
}

const links: LinkProps[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Movies",
    path: "/movies",
  },
  {
    label: "Todos",
    path: "/todos",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
