import Sidebar from "../../components/Sidebar/Sidebar";
import "./NewTicket.css";
import { useNavigate } from "react-router-dom";

function NewTicket() {
  const navigate = useNavigate();

  return (
    <div className="new-ticket">
      <Sidebar type="client" />

      <main className="new-ticket-main">
        <h1 className="new-ticket-title">Título do chamado</h1>
        <input
          type="text"
          className="new-ticket-input"
          placeholder="Ex: Computador não liga após queda de energia"
        />

        <div className="new-ticket-grid">
          <div>
            <label className="new-ticket-label">Categoria</label>
            <select className="new-ticket-select">
              <option>Selecione a categoria</option>
              <option>Hardware</option>
              <option>Software</option>
              <option>Rede</option>
              <option>Acesso / Permissões</option>
            </select>
          </div>

          <div>
            <label className="new-ticket-label">Prioridade</label>
            <select className="new-ticket-select">
              <option>Selecione a prioridade</option>
              <option>Baixa</option>
              <option>Média</option>
              <option>Alta</option>
              <option>Crítica</option>
            </select>
          </div>
        </div>

        <label className="new-ticket-label">Descrição do problema</label>
        <textarea
          className="new-ticket-textarea"
          placeholder="Descreva o problema com o máximo de detalhes: o que aconteceu, quando começou, mensagens de erro que apareceram..."
        ></textarea>

        <label className="new-ticket-label">Anexo (opcional)</label>
        <div className="new-ticket-upload">
          <p>Arraste um arquivo ou <span className="upload-link">clique aqui</span></p>
          <span className="upload-hint">PNG, JPG ou PDF até 5MB</span>
        </div>

        <div className="new-ticket-buttons">
          <button className="btn-cancel" onClick={() => navigate(-1)}>Cancelar</button>
          <button className="btn-submit">Enviar chamado</button>
        </div>
      </main>
    </div>
  );
}

export default NewTicket;