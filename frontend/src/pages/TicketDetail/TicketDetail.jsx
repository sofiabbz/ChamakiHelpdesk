import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import "./TicketDetail.css";

function TicketDetail() {
  const { id } = useParams();
  // useParams — pega o :id da URL (ex: /chamado/1 → id = 1)

  const [ticket, setTicket] = useState(null);
  // Começa null até carregar do banco

  const [newComment, setNewComment] = useState("");
  const [status, setStatus] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchTicket();
  }, []);

  const fetchTicket = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/tickets/${id}`);
      setTicket(response.data);
      setStatus(response.data.status);
    } catch (err) {
      console.log("Erro ao buscar chamado");
    }
  };

  const handleStatusChange = async (newStatus) => {
    try {
      await axios.put(`http://localhost:3000/api/tickets/${id}`, {
        status: newStatus,
      });
      setStatus(newStatus);
      // Atualiza o status no banco e na tela
    } catch (err) {
      console.log("Erro ao atualizar status");
    }
  };

  const handleSendComment = async () => {
    if (newComment.trim() === "") return;

    try {
      await axios.post(`http://localhost:3000/api/tickets/${id}/comments`, {
        text: newComment,
        userId: user.id,
      });
      setNewComment("");
      fetchTicket();
      // Recarrega o chamado pra mostrar o novo comentário
    } catch (err) {
      console.log("Erro ao enviar comentário");
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!ticket) {
    return (
      <div className="ticket-detail">
        <Sidebar type={user?.role === "tech" ? "tech" : "client"} />
        <main className="ticket-main">
          <p>Carregando...</p>
        </main>
      </div>
    );
  }
  // Enquanto não carregou, mostra "Carregando..."

  return (
    <div className="ticket-detail">
      <Sidebar type={user?.role === "tech" ? "tech" : "client"} />

      <main className="ticket-main">
        <Link
          to={user?.role === "tech" ? "/dashboard-tecnico" : "/dashboard"}
          className="ticket-back"
        >
          ← <span>Voltar aos chamados</span>
        </Link>

        <span className="ticket-id">#{String(ticket.id).padStart(3, "0")}</span>
        <h1 className="ticket-title">{ticket.title}</h1>

        <div className="ticket-badges">
          <span className={`badge badge-${status.toLowerCase().replace(" ", "-")}`}>
            {status}
          </span>
          <span className="badge badge-alta">{ticket.priority}</span>
          <span className="badge badge-hardware">{ticket.category}</span>
        </div>

        <div className="ticket-content">
          <div className="ticket-left">
            {/* Informações */}
            <div className="ticket-card">
              <h3 className="ticket-card-title">INFORMAÇÕES</h3>
              <div className="ticket-info-grid">
                <div>
                  <span className="info-label">Requerente</span>
                  <span className="info-value">{ticket.user?.name || "—"}</span>
                </div>
                <div>
                  <span className="info-label">E-mail</span>
                  <span className="info-value">{ticket.user?.email || "—"}</span>
                </div>
                <div>
                  <span className="info-label">Telefone</span>
                  <span className="info-value">{ticket.user?.phone || "—"}</span>
                </div>
                <div>
                  <span className="info-label">Data da abertura</span>
                  <span className="info-value">{formatDate(ticket.createdAt)}</span>
                </div>
                <div>
                  <span className="info-label">Última atualização</span>
                  <span className="info-value">{formatDate(ticket.updatedAt)}</span>
                </div>
              </div>

              <h3 className="ticket-card-title">DESCRIÇÃO</h3>
              <p className="ticket-description">{ticket.description}</p>
            </div>

            {/* Comentários */}
            <div className="ticket-card">
              <h3 className="ticket-card-title">Histórico / Comentários</h3>

              <div className="ticket-comments">
                {ticket.comments?.length === 0 && (
                  <p className="comment-empty">Nenhum comentário ainda.</p>
                )}

                {ticket.comments?.map((comment) => (
                  <div className="comment-item" key={comment.id}>
                    <div className="comment-header">
                      <span className="comment-author">{comment.user?.name}</span>
                      <span className="comment-time">{formatDate(comment.createdAt)}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                ))}
              </div>

              <div className="comment-input-area">
                <input
                  type="text"
                  className="comment-input"
                  placeholder="Adicionar comentário..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendComment()}
                />
                <button className="comment-send" onClick={handleSendComment}>
                  Enviar
                </button>
              </div>
            </div>
          </div>

          <div className="ticket-right">
            {/* Alterar Status */}
            <div className="ticket-card">
              <h3 className="ticket-card-title">ALTERAR STATUS</h3>
              <div className="status-buttons">
                <button
                  className={`status-btn ${status === "Aberto" ? "active" : ""}`}
                  onClick={() => handleStatusChange("Aberto")}
                >
                  ● Aberto
                </button>
                <button
                  className={`status-btn ${status === "Em andamento" ? "active" : ""}`}
                  onClick={() => handleStatusChange("Em andamento")}
                >
                  ● Em andamento
                </button>
                <button
                  className={`status-btn ${status === "Resolvido" ? "active" : ""}`}
                  onClick={() => handleStatusChange("Resolvido")}
                >
                  ● Resolvido
                </button>
                <button
                  className={`status-btn ${status === "Fechado" ? "active" : ""}`}
                  onClick={() => handleStatusChange("Fechado")}
                >
                  ○ Fechado
                </button>
              </div>
            </div>

            {/* Detalhes */}
            <div className="ticket-card">
              <h3 className="ticket-card-title">DETALHES</h3>
              <div className="detail-item">
                <span className="info-label">Categoria</span>
                <span className="info-value">{ticket.category}</span>
              </div>
              <div className="detail-item">
                <span className="info-label">Prioridade</span>
                <span className="info-value priority-alta">{ticket.priority}</span>
              </div>
              <div className="detail-item">
                <span className="info-label">Criado em</span>
                <span className="info-value">{formatDate(ticket.createdAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TicketDetail;