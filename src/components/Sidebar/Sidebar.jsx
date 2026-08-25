import { Link } from "react-router-dom";
import logo from "../../assets/logo-chamaki.png";
import estrela from "../../assets/estrela.png";
import logoTec from "../../assets/logo-tec.png";
import "./Sidebar.css";

function Sidebar({ type }) {
  // type (tipo) — "client" ou "tech"
  // Muda o menu dependendo de quem está logado

  return (
    <aside className="sidebar">
      {/* aside (ao lado) — barra lateral do site */}

<div className="sidebar-header">
  <img
    src={type === "tech" ? logoTec : logo}
    alt="Chamaki"
    className="sidebar-logo-img"
  />
</div>
      <nav className="sidebar-menu">
        {type === "tech" ? (
          <>
            <Link to="/dashboard-tecnico" className="sidebar-item">Dashboard</Link>
            <Link to="/novo-chamado" className="sidebar-item">Novo Chamado</Link>
            <Link to="#" className="sidebar-item">Relatórios</Link>
            <Link to="#" className="sidebar-item">Configurações</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="sidebar-item">Meus Chamados</Link>
            <Link to="/novo-chamado" className="sidebar-item">Novo Chamado</Link>
            <Link to="#" className="sidebar-item">Meu Perfil</Link>
          </>
        )}
      </nav>

      <Link to="/" className="sidebar-logout">→] Sair</Link>
      {/* Volta pra landing page ao sair */}
    </aside>
  );
}

export default Sidebar;