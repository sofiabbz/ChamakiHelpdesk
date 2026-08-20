import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      {/* Título da seção */}
      <h2 className="how-title">Como Funciona?</h2>

      <div className="how-steps">
        {/* Passo 1 */}
        <div className="how-step">
          <span className="how-number">1</span>
          <h3>Abra um chamado</h3>
          <p>
            Descreva o problema do seu computador pelo nosso site.
            Faça seu cadastro ou login, é rápido e fácil.
          </p>
        </div>

        {/* Seta entre os passos */}
        <span className="how-arrow">→</span>

        {/* Passo 2 */}
        <div className="how-step">
          <span className="how-number">2</span>
          <h3>Um técnico analisa</h3>
          <p>
            Nossa equipe recebe seu chamado e faz o
            diagnóstico do problema.
          </p>
        </div>

        <span className="how-arrow">→</span>

        {/* Passo 3 */}
        <div className="how-step">
          <span className="how-number">3</span>
          <h3>Problema resolvido</h3>
          <p>
            Realizamos o suporte remoto ou presencial e seu
            PC volta a funcionar.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;