import { Link, useNavigate } from "react-router-dom";
import estrela from "../../assets/estrela.png";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-page">
      <div className="register-container">
        <img src={estrela} alt="" className="register-star" />

        <h2 className="register-title">Área de Cadastro</h2>
        <div className="register-divider"></div>

        <div className="register-grid">
          <div>
            <label className="register-label">Nome Completo</label>
            <input type="text" className="register-input" />
          </div>

          <div>
            <label className="register-label">CPF</label>
            <input type="text" className="register-input" />
          </div>

          <div>
            <label className="register-label">E-mail</label>
            <input type="email" className="register-input" />
          </div>

          <div>
            <label className="register-label">Senha</label>
            <input type="password" className="register-input" />
          </div>

          <div>
            <label className="register-label">Telefone</label>
            <input type="text" className="register-input" />
          </div>

          <div>
            <label className="register-label">Confirmar Senha</label>
            <input type="password" className="register-input" />
          </div>
        </div>

        <button className="register-btn">Criar Conta</button>

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