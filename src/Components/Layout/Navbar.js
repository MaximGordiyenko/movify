import style from './Navbar.module.css';
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { logoUrl } from "../../constants";

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Logo logoUrl="/" logoImg={logoUrl}/>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <SignedInLinks/>
      <SignedOutLinks/>
    </nav>
  );
};
