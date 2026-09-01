import { Link, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdAdd,
  MdPerson,
  MdBarChart,
  MdSettings,
  MdLogout,
  MdList,
} from "react-icons/md";
import logo from "../../assets/logo-chamaki.png";
import logoTec from "../../assets/logo-tec.png";
import "./Sidebar.css";

function Sidebar({ type }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

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

      {user && (
        <div className="sidebar-user">
          <span className="sidebar-user-name">
            Olá, {user.name.split(" ")[0]}
          </span>
        </div>
      )}

      <nav className="sidebar-menu">
        {type === "tech" ? (
          <>
            <Link to="/dashboard-tecnico" className="sidebar-item">
              <MdDashboard className="sidebar-icon" /> Dashboard
            </Link>
            <Link to="/novo-chamado" className="sidebar-item">
              <MdAdd className="sidebar-icon" /> Novo Chamado
            </Link>
            <Link to="/relatorios" className="sidebar-item">
              <MdBarChart className="sidebar-icon" /> Relatórios
            </Link>
            <Link to="/configuracoes" className="sidebar-item">
              <MdSettings className="sidebar-icon" /> Configurações
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="sidebar-item">
              <MdList className="sidebar-icon" /> Meus Chamados
            </Link>
            <Link to="/novo-chamado" className="sidebar-item">
              <MdAdd className="sidebar-icon" /> Novo Chamado
            </Link>
            <Link to="/perfil" className="sidebar-item">
              <MdPerson className="sidebar-icon" /> Meu Perfil
            </Link>
          </>
        )}
      </nav>

      <button className="sidebar-logout" onClick={handleLogout}>
        <MdLogout className="sidebar-icon" /> Sair
      </button>
    </aside>
  );
}

export default Sidebar;
