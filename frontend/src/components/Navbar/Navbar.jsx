import { Link } from "react-router-dom";
import logo from "../../assets/logo-all.png";
// Importa a imagem do logo

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Chamaki" className="navbar-logo-img" />
        {/* src={logo} — usa a imagem importada */}
        {/* alt — texto alternativo, aparece se a imagem não carregar */}
      </Link>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#sobre">Sobre nós</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <Link to="/login" className="navbar-btn">Entrar</Link>
    </nav>
  );
}

export default Navbar;