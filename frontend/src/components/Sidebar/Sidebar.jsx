import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-chamaki.png";
import logoTec from "../../assets/logo-tec.png";
import "./Sidebar.css";

function Sidebar({ type }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="sidebar">
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
            <Link to="/novo-chamado" className="sidebar-item">+ Novo Chamado</Link>
            <Link to="#" className="sidebar-item">Meu Perfil</Link>
          </>
        )}
      </nav>

      <button className="sidebar-logout" onClick={handleLogout}>→] Sair</button>
    </aside>
  );
}

export default Sidebar;