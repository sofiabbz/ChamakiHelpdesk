import estrela from "../../assets/estrela.png";
import logo from "../../assets/logo-all.png";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      {/* section (seção) — divide a página em blocos */}

      <div className="hero-content">
        {/* Lado esquerdo — logo e frase */}

        <div className="hero-brand">
          <img src={logo} alt="Logo da Chamaki" className="hero-logo" />
        </div>

        <p className="hero-phrase">
          Precisa de um suporte no seu computador? Nós podemos te ajudar com isso!
        </p>

        <img className="hero-star" src={estrela} />    
      </div>

      <div className="hero-text">
        {/* Lado direito — título e descrição */}

        <h1 className="hero-title">
          Seu computador com problemas? Nós resolvemos para você!
        </h1>

        <p className="hero-description">
          A Chamaki oferece suporte técnico rápido e confiável para o seu
          computador. Diagnóstico, manutenção, formatação e muito mais, e o
          melhor: tudo isso sem você sair de casa.
        </p>
      </div>

      <button className="hero-btn" onClick={() => navigate("/login")}>Solicitar Suporte</button>
    </section>
  );
}

export default Hero;