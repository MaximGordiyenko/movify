import style from './Navigation.module.css';
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { logoUrl } from "../../constants";

export const Navigation = ({ isAllowed }) => (
  <nav className={style.nav}>
    <Link className={style.link} to="home">
      <Logo logoImg={logoUrl}/>
    </Link>
    <Link to="/home">Home</Link>
    <Link to="/movies">Movies</Link>
    <Link to="/notes">Notes</Link>
    <Link to="/crypto">Crypto</Link>
    {isAllowed
      ? <Link to="/login">logout</Link>
      : <Link to="/login">Login</Link>
    }
  </nav>
);