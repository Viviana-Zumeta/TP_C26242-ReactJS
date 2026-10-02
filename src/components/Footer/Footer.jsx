import "./Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
export const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer__brand">
        <h2 className="footer__title">Bazar Gourmet</h2>
        <p className="footer__subtitle">Artículos únicos para tu hogar</p>
      </div>

      <nav className="footer__nav">
        <ul>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/shipping">Envíos</a></li>
          <li><a href="/faq">Preguntas frecuentes</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
      <div className="footer__social">
        <a href="https://instagram.com/tucuenta" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com/tucuenta" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      <div className="footer__copy">
        <p>© 2026 Bazar Gourmet · Todos los derechos reservados</p>
      </div>
    </footer>
  

  );
};