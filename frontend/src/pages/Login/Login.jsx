import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-chamaki.png";
import estrela from "../../assets/estrela.png";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/login", {
        email: formData.email,
        password: formData.password,
      });
      // Envia email e senha pro backend verificar

      const user = response.data;
      // response.data — dados do usuário que o backend devolveu

      localStorage.setItem("user", JSON.stringify(user));
      // Salva o usuário no localStorage (memória do navegador)
      // Assim as outras páginas sabem quem tá logado

      if (user.role === "tech") {
        navigate("/dashboard-tecnico");
      } else {
        navigate("/dashboard");
      }
      // Se for técnico, vai pro dashboard do técnico
      // Se for cliente, vai pro dashboard do cliente
    } catch (err) {
      setError("Email ou senha incorretos!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-brand">
        <div className="login-brand-top">
          <img src={logo} alt="Chamaki" className="login-logo" />
        </div>

        <img src={estrela} alt="" className="login-star" />

        <p className="login-brand-phrase">
          Precisa de um suporte no seu computador? Nós podemos te ajudar
          com isso!
        </p>
      </div>

      <div className="login-form-container">
        <h2 className="login-title">Área de Login</h2>
        <div className="login-divider"></div>

        {error && <p className="login-error">{error}</p>}

        <label className="login-label">Nome de usuário ou e-mail</label>
        <input
          type="text"
          name="email"
          className="login-input"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="login-label">Senha</label>
        <input
          type="password"
          name="password"
          className="login-input"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="login-options">
          <label className="login-remember">
            <input type="checkbox" />
            Lembrar de mim
          </label>
          <a href="#" className="login-forgot">Esqueceu sua senha?</a>
        </div>

        <button className="login-btn" onClick={handleLogin}>Entrar</button>

        <div className="login-divider-text">
          <span>OU</span>
        </div>

        <div className="login-social">
          <button className="login-social-btn">G</button>
          <button className="login-social-btn">f</button>
        </div>

        <p className="login-register">
          Ainda não possui uma conta?{" "}
          <Link to="/cadastro" className="login-register-link">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;