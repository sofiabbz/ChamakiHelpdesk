import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./TicketDetail.css";

function TicketDetail() {
  const [status, setStatus] = useState("aberto");
  // Controla qual status está selecionado

  const [comments, setComments] = useState([
    { author: "Maria Rodrigues", text: "Chamado aberto pelo cliente.", time: "17/08 às 09:30" },
    { author: "Carlos Mendes", text: "Vou verificar a fonte de alimentação. Agendar visita para amanhã.", time: "17/08 às 14:00" },
  ]);
  // Lista de comentários existentes

  const [newComment, setNewComment] = useState("");
  // Guarda o texto do novo comentário

  const handleSendComment = () => {
    // Função que adiciona um novo comentário
    if (newComment.trim() === "") return;
    // trim() remove espaços — se estiver vazio, não faz nada

    setComments([
      ...comments,
      // ... (spread) copia todos os comentários antigos
      { author: "Suporte TI", text: newComment, time: "Agora" },
    ]);
    setNewComment("");
    // Limpa o campo após enviar
  };

  return (
    <div className="ticket-detail">
      <Sidebar type="tech" />

      <main className="ticket-main">
        <Link to="/dashboard-tecnico" className="ticket-back">
          ← <span>Voltar aos chamados</span>
        </Link>

        <span className="ticket-id">#001</span>
        <h1 className="ticket-title">Computador com memória cheia</h1>

        <div className="ticket-badges">
          <span className="badge badge-aberto">Aberto</span>
          <span className="badge badge-alta">Alta</span>
          <span className="badge badge-hardware">Hardware</span>
        </div>

        <div className="ticket-content">
          {/* Lado esquerdo */}
          <div className="ticket-left">
            {/* Informações */}
            <div className="ticket-card">
              <h3 className="ticket-card-title">INFORMAÇÕES</h3>
              <div className="ticket-info-grid">
                <div>
                  <span className="info-label">Requerente</span>
                  <span className="info-value">Maria Rodrigues</span>
                </div>
                <div>
                  <span className="info-label">E-mail</span>
                  <span className="info-value">maria@email.com</span>
                </div>
                <div>
                  <span className="info-label">Telefone</span>
                  <span className="info-value">(61) 99999-0001</span>
                </div>
                <div>
                  <span className="info-label">Data da abertura</span>
                  <span className="info-value">17/08/2026</span>
                </div>
                <div>
                  <span className="info-label">Técnico responsável</span>
                  <span className="info-value">Carlos Mendes</span>
                </div>
                <div>
                  <span className="info-label">Última atualização</span>
                  <span className="info-value">18/08/2026</span>
                </div>
              </div>

              <h3 className="ticket-card-title">DESCRIÇÃO</h3>
              <p className="ticket-description">
                Após uma queda de energia, o computador não liga mais.
                Ao apertar o botão de ligar, nada acontece. Já tentei
                trocar a tomada e o cabo de energia, sem sucesso.
              </p>
            </div>

            {/* Histórico / Comentários */}
            <div className="ticket-card">
              <h3 className="ticket-card-title">Histórico / Comentários</h3>

              <div className="ticket-comments">
                {comments.map((comment, index) => (
                  <div className="comment-item" key={index}>
                    <div className="comment-header">
                      <span className="comment-author">{comment.author}</span>
                      <span className="comment-time">{comment.time}</span>
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
                  // onKeyDown — ao pressionar uma tecla
                  // Se a tecla for Enter, envia o comentário
                />
                <button className="comment-send" onClick={handleSendComment}>
                  Enviar
                </button>
              </div>
            </div>
          </div>

          {/* Lado direito */}
          <div className="ticket-right">
            {/* Alterar Status */}
            <div className="ticket-card">
              <h3 className="ticket-card-title">ALTERAR STATUS</h3>
              <div className="status-buttons">
                <button
                  className={`status-btn ${status === "aberto" ? "active" : ""}`}
                  onClick={() => setStatus("aberto")}
                >
                  ● Aberto
                </button>
                <button
                  className={`status-btn ${status === "andamento" ? "active" : ""}`}
                  onClick={() => setStatus("andamento")}
                >
                  ● Em andamento
                </button>
                <button
                  className={`status-btn ${status === "resolvido" ? "active" : ""}`}
                  onClick={() => setStatus("resolvido")}
                >
                  ● Resolvido
                </button>
                <button
                  className={`status-btn ${status === "fechado" ? "active" : ""}`}
                  onClick={() => setStatus("fechado")}
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
                <span className="info-value">Hardware</span>
              </div>
              <div className="detail-item">
                <span className="info-label">Prioridade</span>
                <span className="info-value priority-alta">Alta</span>
              </div>
              <div className="detail-item">
                <span className="info-label">Tempo aberto</span>
                <span className="info-value">2 dias</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TicketDetail;