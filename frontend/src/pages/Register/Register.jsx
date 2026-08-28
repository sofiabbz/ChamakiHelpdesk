import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import estrela from "../../assets/estrela.png";
import axios from "axios";
// axios — biblioteca pra fazer requisições HTTP pro backend
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  // formData — guarda os valores de todos os campos

  const [error, setError] = useState("");
  // error — guarda mensagem de erro se algo der errado

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Atualiza o campo que o usuário digitou
    // e.target.name = nome do campo (ex: "email")
    // e.target.value = valor digitado
  };

  const handleSubmit = async () => {
    // Função que roda quando clicar em "Criar Conta"

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/users/cadastro", {
        name: formData.name,
        email: formData.email,
        cpf: formData.cpf,
        phone: formData.phone,
        password: formData.password,
      });
      // Envia os dados pro backend

      navigate("/login");
      // Se deu certo, vai pra tela de login
    } catch (err) {
      setError("Erro ao cadastrar. Verifique os dados.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <img src={estrela} alt="" className="register-star" />

        <h2 className="register-title">Área de Cadastro</h2>
        <div className="register-divider"></div>

        {error && <p className="register-error">{error}</p>}
        {/* Se tiver erro, mostra a mensagem */}

        <div className="register-grid">
          <div>
            <label className="register-label">Nome Completo</label>
            <input
              type="text"
              name="name"
              className="register-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="register-label">CPF</label>
            <input
              type="text"
              name="cpf"
              className="register-input"
              value={formData.cpf}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="register-label">E-mail</label>
            <input
              type="email"
              name="email"
              className="register-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="register-label">Senha</label>
            <input
              type="password"
              name="password"
              className="register-input"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="register-label">Telefone</label>
            <input
              type="text"
              name="phone"
              className="register-input"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="register-label">Confirmar Senha</label>
            <input
              type="password"
              name="confirmPassword"
              className="register-input"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="register-btn" onClick={handleSubmit}>
          Criar Conta
        </button>

        <p className="register-login">
          Já possui uma conta?{" "}
          <Link to="/login" className="register-login-link">
            Entre aqui!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;