import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Chamaki</Link>
      {/* Link pro "/" volta pra landing page */}

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#sobre">Sobre nós</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <Link to="/login" className="navbar-btn">Entrar</Link>
      {/* Link pro "/login" leva pra página de login */}
    </nav>
  );
}

export default Navbar;