import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import "./ClientDashboard.css";

function ClientDashboard() {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([]);
  // Começa vazio, vai buscar do banco

  const user = JSON.parse(localStorage.getItem("user"));
  // Pega o usuário logado

  useEffect(() => {
    // useEffect — roda quando a página carrega
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tickets");
        // Busca todos os chamados do backend

        const myTickets = response.data.filter(
          (ticket) => ticket.userId === user.id
        );
        // Filtra só os chamados do usuário logado

        setTickets(myTickets);
      } catch (err) {
        console.log("Erro ao buscar chamados");
      }
    };

    fetchTickets();
  }, []);
  // [] vazio — roda só uma vez quando a página abre

  const counters = {
    abertos: tickets.filter((t) => t.status === "Aberto").length,
    andamento: tickets.filter((t) => t.status === "Em andamento").length,
    resolvidos: tickets.filter((t) => t.status === "Resolvido").length,
  };
  // Conta quantos chamados tem de cada status

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("pt-BR");
    // Converte a data do banco pra formato brasileiro (dd/mm/aaaa)
  };

  return (
    <div className="client-dashboard">
      <Sidebar type="client" />

      <main className="client-main">
        <div className="client-top">
          <div>
            <h1 className="client-title">Meus Chamados</h1>
            <p className="client-subtitle">Acompanhe o status dos seus pedidos.</p>
          </div>
          <button
            className="client-new-btn"
            onClick={() => navigate("/novo-chamado")}
          >
            + Novo Chamado
          </button>
        </div>

        <div className="client-counters">
          <div className="counter-card">
            <span className="counter-number green">{counters.abertos}</span>
            <span className="counter-label">Abertos</span>
          </div>
          <div className="counter-card">
            <span className="counter-number yellow">{counters.andamento}</span>
            <span className="counter-label">Em andamento</span>
          </div>
          <div className="counter-card">
            <span className="counter-number red">{counters.resolvidos}</span>
            <span className="counter-label">Resolvidos</span>
          </div>
        </div>

        <div className="client-table">
          <div className="table-header">
            <span>ID</span>
            <span>Título</span>
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
              className="table-row"
              key={ticket.id}
              onClick={() => navigate(`/chamado/${ticket.id}`)}
            >
              <span className="table-id">#{String(ticket.id).padStart(3, "0")}</span>
              <span>{ticket.title}</span>
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
      </main>
    </div>
  );
}

export default ClientDashboard;