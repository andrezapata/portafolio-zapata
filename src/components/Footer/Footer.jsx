import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-section">
      <div className="footer-top-line"></div>
      <div className="container-xl px-4">
        <div className="row g-4 align-items-center justify-content-between">
          <div className="col-md-6">
            <a href="#home" className="footer-logo">
              <span className="logo-first">Andre</span>
              <span className="logo-last"> Zapata</span>
            </a>
            <p className="footer-desc">
              Estudiante de Informatica · Desarrollador Web · React · JavaScript · SQL
            </p>
          </div>

          <div className="col-md-4 text-md-end">
            <div className="footer-socials">
              {[
                { icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/andrezapata' },
                { icon: 'bi-github',   href: 'https://github.com/andrezapata' },
                { icon: 'bi-youtube',  href: 'https://www.youtube.com' },
                { icon: 'bi-whatsapp', href: 'https://wa.me/51999999999' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-btn">
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <strong>Andre Zapata</strong>. Todos los derechos reservados.
          </p>
          <p className="footer-credit">
            Disenado y desarrollado con <i className="bi bi-heart-fill text-danger"></i> en React
          </p>
        </div>
      </div>
    </footer>
  )
}