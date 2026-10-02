import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import logo from "../../assets/2.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo bazar" />
          <span>Bazar Gourmet</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};