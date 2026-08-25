import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-chamaki.png";
import estrela from "../../assets/estrela.png";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  // navigate (navegar) — função que muda de página pelo código

  const handleLogin = () => {
    navigate("/dashboard");
    // Quando clicar em Entrar, vai pro dashboard do cliente
  };
  return (
    <div className="login-page">
      {/* Lado esquerdo — brand */}
      <div className="login-brand">
        <div className="login-brand-top">
          <img src={logo} alt="Chamaki" className="login-logo" />
        </div>

        <img src={estrela} alt="" className="login-star" />

        <p className="login-brand-phrase">
          Precisa de um suporte no seu computador? Nós podemos te ajudar com
          isso!
        </p>
      </div>

      {/* Lado direito — formulário */}
      <div className="login-form-container">
        <h2 className="login-title">Área de Login</h2>
        <div className="login-divider"></div>

        <label className="login-label">Nome de usuário ou e-mail</label>
        <input type="text" className="login-input" />

        <label className="login-label">Senha</label>
        <input type="password" className="login-input" />

        <div className="login-options">
          <label className="login-remember">
            <input type="checkbox" />
            Lembrar de mim
          </label>
          <a href="#" className="login-forgot">
            Esqueceu sua senha?
          </a>
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Entrar
        </button>

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
