import estrela from "../../assets/estrela.png";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home">
      {/* section (seção) — divide a página em blocos */}

      <div className="hero-content">
        {/* Lado esquerdo — logo e frase */}

        <div className="hero-brand">
          <h2 className="hero-brand-name">Chamaki</h2>
          <p className="hero-brand-sub">seu serviço de helpdesk.</p>
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