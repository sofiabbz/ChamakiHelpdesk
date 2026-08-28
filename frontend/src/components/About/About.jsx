import "./About.css";

function About() {
  return (
    <section className="about" id="sobre">
      <h2 className="about-title">Sobre Nós</h2>

      <div className="about-content">
        <p className="about-text">
          A Chamaki nasceu com o objetivo de oferecer suporte técnico
          acessível, rápido e de qualidade. Sabemos o quanto é frustrante
          quando o computador para de funcionar, por isso nossa equipe
          está pronta para resolver seu problema com agilidade e
          profissionalismo.
        </p>

        <p className="about-text">
          Seja presencial ou remoto, nosso compromisso é devolver seu
          equipamento funcionando no menor tempo possível. Atendemos
          desde problemas simples até os mais complexos.
        </p>
      </div>
    </section>
  );
}

export default About;