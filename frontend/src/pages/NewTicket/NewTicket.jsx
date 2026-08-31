import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import "./NewTicket.css";

function NewTicket() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      // Pega o usuário logado que foi salvo no login

      await axios.post("http://localhost:3000/api/tickets", {
        title: formData.title,
        category: formData.category,
        priority: formData.priority,
        description: formData.description,
        userId: user.id,
        // Envia o id do usuário pra saber quem criou o chamado
      });

      navigate("/dashboard");
      // Se deu certo, volta pro dashboard
    } catch (err) {
      setError("Erro ao criar chamado. Preencha todos os campos.");
    }
  };

  return (
    <div className="new-ticket">
      <Sidebar type="client" />

      <main className="new-ticket-main">
        <h1 className="new-ticket-title">Título do chamado</h1>
        <input
          type="text"
          name="title"
          className="new-ticket-input"
          placeholder="Ex: Computador não liga após queda de energia"
          value={formData.title}
          onChange={handleChange}
        />

        <div className="new-ticket-grid">
          <div>
            <label className="new-ticket-label">Categoria</label>
            <select
              name="category"
              className="new-ticket-select"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Selecione a categoria</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="Rede">Rede</option>
              <option value="Acesso / Permissões">Acesso / Permissões</option>
            </select>
          </div>

          <div>
            <label className="new-ticket-label">Prioridade</label>
            <select
              name="priority"
              className="new-ticket-select"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="">Selecione a prioridade</option>
              <option value="Baixa">Baixa</option>
              <option value="Média">Média</option>
              <option value="Alta">Alta</option>
              <option value="Crítica">Crítica</option>
            </select>
          </div>
        </div>

        <label className="new-ticket-label">Descrição do problema</label>
        <textarea
          name="description"
          className="new-ticket-textarea"
          placeholder="Descreva o problema com o máximo de detalhes: o que aconteceu, quando começou, mensagens de erro que apareceram..."
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label className="new-ticket-label">Anexo (opcional)</label>
        <div className="new-ticket-upload">
          <p>Arraste um arquivo ou <span className="upload-link">clique aqui</span></p>
          <span className="upload-hint">PNG, JPG ou PDF até 5MB</span>
        </div>

        {error && <p className="new-ticket-error">{error}</p>}

        <div className="new-ticket-buttons">
          <button className="btn-cancel" onClick={() => navigate(-1)}>Cancelar</button>
          <button className="btn-submit" onClick={handleSubmit}>Enviar chamado</button>
        </div>
      </main>
    </div>
  );
}

export default NewTicket;