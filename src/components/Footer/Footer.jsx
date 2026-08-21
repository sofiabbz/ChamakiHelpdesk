import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Lado esquerdo — copyright */}
      <p className="footer-copy">
        © 2026 Chamaki. Todos os direitos reservados.
      </p>

      {/* Centro — links legais */}
      <p className="footer-links">
        Termos de Uso | Política de Privacidade
      </p>

      {/* Lado direito — redes sociais */}
      <div className="footer-social">
        <span>Nos acompanhe pelas redes</span>
        <div className="footer-icons">
          <a href="#" className="footer-icon">f</a>
          <a href="#" className="footer-icon">ig</a>
          <a href="#" className="footer-icon">ws</a>
        </div>
        {/* Depois a gente troca por ícones de verdade */}
      </div>
    </footer>
  );
}

export default Footer;