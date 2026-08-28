import Sidebar from "../../components/Sidebar/Sidebar";
import "./TechDashboard.css";
import { useNavigate } from "react-router-dom";

function TechDashboard() {
  const tickets = [
    { id: "#001", title: "Computador com memória cheia.", requester: "Maria Rodrigues Melo", category: "Hardware", status: "Aberto", date: "17/08/26", priority: "Alta" },
    { id: "#002", title: "Instalação do Java", requester: "Pedro Souza Santos", category: "Software/Acesso", status: "Resolvido", date: "17/08/26", priority: "Baixa" },
  ];
  const navigate = useNavigate();

  return (
    <div className="tech-dashboard">
      <Sidebar type="tech" />

      <main className="tech-main">
        <div className="tech-top">
          <div>
            <h1 className="tech-title">Dashboard</h1>
            <p className="tech-subtitle">Visão geral dos chamados.</p>
          </div>
        </div>

        {/* 5 Contadores */}
        <div className="tech-counters">
          <div className="tech-counter">
            <span className="tech-counter-number blue">1</span>
            <span className="tech-counter-label">Total</span>
          </div>
          <div className="tech-counter">
            <span className="tech-counter-number pink">3</span>
            <span className="tech-counter-label">Em andamento</span>
          </div>
          <div className="tech-counter">
            <span className="tech-counter-number green">2</span>
            <span className="tech-counter-label">Resolvidos</span>
          </div>
          <div className="tech-counter">
            <span className="tech-counter-number yellow">6</span>
            <span className="tech-counter-label">Abertos</span>
          </div>
          <div className="tech-counter">
            <span className="tech-counter-number red">8</span>
            <span className="tech-counter-label">Críticos</span>
          </div>
        </div>

        {/* 3 Gráficos */}
        <div className="tech-charts">
          {/* Por Status */}
          <div className="tech-chart-card">
            <h3 className="tech-chart-title">Por status</h3>
            <div className="chart-bar-group">
              <div className="chart-bar-item">
                <span className="chart-bar-label yellow">Aberto</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: "55%", backgroundColor: "#F59E0B" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label purple">Em andamento</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: "38%", backgroundColor: "#8B5CF6" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label green">Resolvidos</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: "85%", backgroundColor: "#10B981" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label gray">Fechado</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: "15%", backgroundColor: "#64748B" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Por Categoria */}
          <div className="tech-chart-card">
            <h3 className="tech-chart-title">Por categoria</h3>
            <div className="chart-bar-group">
              <div className="chart-bar-item">
                <span className="chart-bar-label red">Hardware</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: "75%", backgroundColor: "#992802" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label blue">Software</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: "58%", backgroundColor: "#3B82F6" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label yellow">Rede</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: "38%", backgroundColor: "#F59E0B" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label green">Acesso</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: "25%", backgroundColor: "#10B981" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Por Prioridade */}
          <div className="tech-chart-card">
            <h3 className="tech-chart-title">Por prioridade</h3>
            <div className="chart-circles">
              <div className="chart-circle-item">
                <div className="chart-circle red-border">
                  <span>4</span>
                </div>
                <span className="chart-circle-label">Crítica</span>
              </div>
              <div className="chart-circle-item">
                <div className="chart-circle yellow-border">
                  <span>7</span>
                </div>
                <span className="chart-circle-label">Alta</span>
              </div>
              <div className="chart-circle-item">
                <div className="chart-circle blue-border">
                  <span>9</span>
                </div>
                <span className="chart-circle-label">Média</span>
              </div>
              <div className="chart-circle-item">
                <div className="chart-circle green-border">
                  <span>5</span>
                </div>
                <span className="chart-circle-label">Baixa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela de chamados recentes */}
        <div className="tech-table-container">
          <h3 className="tech-table-title">CHAMADOS RECENTES</h3>

          <div className="tech-table">
            <div className="tech-table-header">
              <span>ID</span>
              <span>Título</span>
              <span>Requerente</span>
              <span>Categoria</span>
              <span>Status</span>
              <span>Data</span>
              <span>Prioridade</span>
            </div>

            {tickets.map((ticket) => (
              <div className="tech-table-row" key={ticket.id} onClick={() => navigate("/chamado/1")}>
                <span className="table-id">{ticket.id}</span>
                <span>{ticket.title}</span>
                <span>{ticket.requester}</span>
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
        </div>
      </main>
    </div>
  );
}

export default TechDashboard;