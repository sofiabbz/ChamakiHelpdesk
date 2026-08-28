import Sidebar from "../../components/Sidebar/Sidebar";
import "./ClientDashboard.css";
import { useNavigate } from "react-router-dom";

function ClientDashboard() {
  const tickets = [
    { id: "#001", title: "Computador com memória cheia.", category: "Hardware", status: "Aberto", date: "17/08/26", priority: "Média" },
    { id: "#002", title: "Instalação do Java.", category: "Software", status: "Resolvido", date: "17/08/26", priority: "Baixa" },
    { id: "#003", title: "Troca de fonte.", category: "Hardware", status: "Andamento", date: "17/08/26", priority: "Alta" },
  ];
  // Dados fictícios dos chamados

  const navigate = useNavigate();

  return (
    <div className="client-dashboard">
      <Sidebar type="client" />
      {/* Passa type="client" pra sidebar saber qual menu mostrar */}

      <main className="client-main">
        {/* main — área principal ao lado da sidebar */}

        <div className="client-top">
          <div>
            <h1 className="client-title">Meus Chamados</h1>
            <p className="client-subtitle">Acompanhe o status dos seus pedidos.</p>
          </div>
          <button className="client-new-btn" onClick={() => navigate("/novo-chamado")}>
            + Novo Chamado
          </button>
        </div>

        {/* Contadores */}
        <div className="client-counters">
          <div className="counter-card">
            <span className="counter-number green">1</span>
            <span className="counter-label">Abertos</span>
          </div>
          <div className="counter-card">
            <span className="counter-number yellow">3</span>
            <span className="counter-label">Em andamento</span>
          </div>
          <div className="counter-card">
            <span className="counter-number red">2</span>
            <span className="counter-label">Resolvidos</span>
          </div>
        </div>

        {/* Tabela de chamados */}
        <div className="client-table">
          <div className="table-header">
            <span>ID</span>
            <span>Título</span>
            <span>Categoria</span>
            <span>Status</span>
            <span>Data</span>
            <span>Prioridade</span>
          </div>

          {tickets.map((ticket) => (
            <div className="table-row" key={ticket.id} onClick={() => navigate("/chamado/1")}>
              <span className="table-id">{ticket.id}</span>
              <span>{ticket.title}</span>
              <span>{ticket.category}</span>
              <span>
                <span className={`badge badge-${ticket.status.toLowerCase()}`}>
                  {ticket.status}
                </span>
              </span>
              <span>{ticket.date}</span>
              <span>{ticket.priority}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ClientDashboard;