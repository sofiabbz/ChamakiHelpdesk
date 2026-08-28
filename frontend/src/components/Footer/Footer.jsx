import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
// Importa os ícones do Facebook, Instagram e WhatsApp

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">
        © 2026 Chamaki. Todos os direitos reservados.
      </p>

      <p className="footer-links">
        Termos de Uso | Política de Privacidade
      </p>

      <div className="footer-social">
        <span>Nos acompanhe pelas redes</span>
        <div className="footer-icons">
          <a href="#" className="footer-icon"><FaFacebookF /></a>
          <a href="#" className="footer-icon"><FaInstagram /></a>
          <a href="#" className="footer-icon"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;