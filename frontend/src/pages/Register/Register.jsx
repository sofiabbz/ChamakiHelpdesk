import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import estrela from "../../assets/estrela.png";
import PasswordStrength from "../../components/PasswordStrength/PasswordStrength";
import axios from "axios";
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

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "A senha deve ter pelo menos um caractere especial (!@#$%...)";
    }
    return null;
  };

  const handleSubmit = async () => {
    setError("");

    if (!formData.name || !formData.email || !formData.cpf || !formData.password) {
      setError("Preencha todos os campos obrigatórios!");
      return;
    }

    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

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

      navigate("/login");
    } catch (err) {
      setError("Erro ao cadastrar. E-mail ou CPF já cadastrado.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <img src={estrela} alt="" className="register-star" />

        <h2 className="register-title">Área de Cadastro</h2>
        <div className="register-divider"></div>

        {error && <p className="register-error">{error}</p>}

        <div className="register-grid">
          <div>
            <label className="register-label">Nome Completo *</label>
            <input
              type="text"
              name="name"
              className="register-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="register-label">CPF *</label>
            <input
              type="text"
              name="cpf"
              className="register-input"
              value={formData.cpf}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="register-label">E-mail *</label>
            <input
              type="email"
              name="email"
              className="register-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="register-label">Senha *</label>
            <input
              type="password"
              name="password"
              className="register-input"
              value={formData.password}
              onChange={handleChange}
            />
            <PasswordStrength password={formData.password} />
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
            <label className="register-label">Confirmar Senha *</label>
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