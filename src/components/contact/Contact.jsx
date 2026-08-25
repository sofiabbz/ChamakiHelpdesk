import estrela from "../../assets/estrela.png";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  return (
    <section className="contact" id="contato">
      {/* id="contato" — o link do navbar rola até aqui */}

      <h2 className="contact-title">
        Precisa de alguma ajuda?
        <br />
        {/* br = break (quebra de linha) */}
        Fale com a gente!
      </h2>

      <div className="contact-content">
        {/* Lado esquerdo — frase */}
        <div className="contact-phrase">
          <p>
            Entre em contato conosco e resolveremos o problema do seu
            computador o mais rápido possível
          </p>
        </div>

        {/* Lado direito — informações */}
        <div className="contact-info">
          <h3>Informações de contato:</h3>
          <p>Telefone: (61) 99999-9999</p>
          <p>E-mail: contato@chamaki.com</p>
          <p>Horário: Segunda a Sexta, 8h às 18h</p>
        </div>
      </div>

      <button className="contact-btn" onClick={() => navigate("/login")}>Solicitar Suporte Agora</button>
    </section>
  );
}

export default Contact;