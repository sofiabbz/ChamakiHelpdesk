import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import "./TechDashboard.css";

function TechDashboard() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tickets");
        setTickets(response.data);
        // Técnico vê TODOS os chamados, não filtra
      } catch (err) {
        console.log("Erro ao buscar chamados");
      }
    };

    fetchTickets();
  }, []);

  const counters = {
    total: tickets.length,
    andamento: tickets.filter((t) => t.status === "Em andamento").length,
    resolvidos: tickets.filter((t) => t.status === "Resolvido").length,
    abertos: tickets.filter((t) => t.status === "Aberto").length,
    criticos: tickets.filter((t) => t.priority === "Crítica").length,
  };

  // Conta por status
  const statusData = {
    aberto: tickets.filter((t) => t.status === "Aberto").length,
    andamento: tickets.filter((t) => t.status === "Em andamento").length,
    resolvido: tickets.filter((t) => t.status === "Resolvido").length,
    fechado: tickets.filter((t) => t.status === "Fechado").length,
  };

  // Conta por categoria
  const categoryData = {
    hardware: tickets.filter((t) => t.category === "Hardware").length,
    software: tickets.filter((t) => t.category === "Software").length,
    rede: tickets.filter((t) => t.category === "Rede").length,
    acesso: tickets.filter((t) => t.category === "Acesso / Permissões").length,
  };

  // Conta por prioridade
  const priorityData = {
    critica: tickets.filter((t) => t.priority === "Crítica").length,
    alta: tickets.filter((t) => t.priority === "Alta").length,
    media: tickets.filter((t) => t.priority === "Média").length,
    baixa: tickets.filter((t) => t.priority === "Baixa").length,
  };

  // Calcula porcentagem pra largura das barras
  const maxStatus = Math.max(...Object.values(statusData), 1);
  const maxCategory = Math.max(...Object.values(categoryData), 1);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };

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
            <span className="tech-counter-number blue">{counters.total}</span>
            <span className="tech-counter-label">Total</span>
          </div>
          <div className="tech-counter">
            <span className="tech-counter-number pink">{counters.andamento}</span>
            <span className="tech-counter-label">Em andamento</span>
          </div>
          <div className="tech-counter">
            <span className="tech-counter-number green">{counters.resolvidos}</span>
            <span className="tech-counter-label">Resolvidos</span>
          </div>
          <div className="tech-counter">
            <span className="tech-counter-number yellow">{counters.abertos}</span>
            <span className="tech-counter-label">Abertos</span>
          </div>
          <div className="tech-counter">
            <span className="tech-counter-number red">{counters.criticos}</span>
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
                  <div className="chart-bar-fill" style={{ width: `${(statusData.aberto / maxStatus) * 100}%`, backgroundColor: "#F59E0B" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label purple">Em andamento</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: `${(statusData.andamento / maxStatus) * 100}%`, backgroundColor: "#8B5CF6" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label green">Resolvidos</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: `${(statusData.resolvido / maxStatus) * 100}%`, backgroundColor: "#10B981" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label gray">Fechado</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: `${(statusData.fechado / maxStatus) * 100}%`, backgroundColor: "#64748B" }}></div>
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
                  <div className="chart-bar-fill" style={{ width: `${(categoryData.hardware / maxCategory) * 100}%`, backgroundColor: "#992802" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label blue">Software</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: `${(categoryData.software / maxCategory) * 100}%`, backgroundColor: "#3B82F6" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label yellow">Rede</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: `${(categoryData.rede / maxCategory) * 100}%`, backgroundColor: "#F59E0B" }}></div>
                </div>
              </div>
              <div className="chart-bar-item">
                <span className="chart-bar-label green">Acesso</span>
                <div className="chart-bar-track">
                  <div className="chart-bar-fill" style={{ width: `${(categoryData.acesso / maxCategory) * 100}%`, backgroundColor: "#10B981" }}></div>
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
                  <span>{priorityData.critica}</span>
                </div>
                <span className="chart-circle-label">Crítica</span>
              </div>
              <div className="chart-circle-item">
                <div className="chart-circle yellow-border">
                  <span>{priorityData.alta}</span>
                </div>
                <span className="chart-circle-label">Alta</span>
              </div>
              <div className="chart-circle-item">
                <div className="chart-circle blue-border">
                  <span>{priorityData.media}</span>
                </div>
                <span className="chart-circle-label">Média</span>
              </div>
              <div className="chart-circle-item">
                <div className="chart-circle green-border">
                  <span>{priorityData.baixa}</span>
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

            {tickets.length === 0 && (
              <p className="table-empty">Nenhum chamado encontrado.</p>
            )}

            {tickets.map((ticket) => (
              <div
                className="tech-table-row"
                key={ticket.id}
                onClick={() => navigate(`/chamado/${ticket.id}`)}
              >
                <span className="table-id">#{String(ticket.id).padStart(3, "0")}</span>
                <span>{ticket.title}</span>
                <span>{ticket.user?.name || "—"}</span>
                <span>{ticket.category}</span>
                <span>
                  <span className={`badge badge-${ticket.status.toLowerCase().replace(" ", "-")}`}>
                    {ticket.status}
                  </span>
                </span>
                <span>{formatDate(ticket.createdAt)}</span>
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