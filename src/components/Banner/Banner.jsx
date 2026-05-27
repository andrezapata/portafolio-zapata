import './Banner.css'
import fotoPerfil from '../../assets/andre1.png'

export default function Banner() {
  return (
    <section id="home" className="banner-section">
      <div className="bg-glow banner-glow-1"></div>
      <div className="bg-glow banner-glow-2"></div>
      <div className="banner-grid-overlay"></div>

      <div className="container-xl banner-container">
        <div className="banner-badge animate-fade-up">
          <span className="badge-dot"></span>
          Disponible para nuevos proyectos
        </div>

        <div className="banner-avatar animate-fade-up animate-delay-1">
          <div className="avatar-ring">
            <div className="avatar-img-wrap">
              <img
                src={fotoPerfil}
                alt="Andre Zapata"
                className="avatar-img"
              />
            </div>
          </div>
        </div>

        <h1 className="banner-name animate-fade-up animate-delay-2">
          Andre<br />
          <span>Zapata</span>
        </h1>

        <p className="banner-role animate-fade-up animate-delay-3">
          Estudiante de Informática · Desarrollador Web · React · JavaScript · SQL
        </p>

        <p className="banner-desc animate-fade-up animate-delay-4">
          Desarrollo aplicaciones web completas desde el frontend hasta 
          la base de datos. Estudiante de Informática con proyectos reales 
          en GitHub y experiencia con React, Node.js y SQL.
        </p>

        <div className="banner-ctas animate-fade-up animate-delay-5">
          <a href="#proyectos" className="btn-primary-custom">
            Ver Proyectos
          </a>
          <a href="#contacto" className="btn-outline-custom">
            Contactame
          </a>
        </div>

        <a href="#perfil" className="scroll-indicator animate-fade-up animate-delay-5">
          
        </a>
      </div>
    </section>
  )
}