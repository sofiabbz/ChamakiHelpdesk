import { Link } from "react-router-dom";
// Link — substitui o <a> pra navegar entre páginas sem recarregar

import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      {/* Lado esquerdo — brand */}
      <div className="login-brand">
        <div className="login-brand-top">
          <h1 className="login-brand-name">Chamaki</h1>
          <p className="login-brand-sub">seu serviço de helpdesk.</p>
        </div>
        <p className="login-brand-phrase">
          Precisa de um suporte no seu computador? Nós podemos te ajudar
          com isso!
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
          <a href="#" className="login-forgot">Esqueceu sua senha?</a>
        </div>

        <button className="login-btn">Entrar</button>

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