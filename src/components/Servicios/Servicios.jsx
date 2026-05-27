import './Servicios.css'

const servicios = [
  {
    icon: 'bi-bar-chart-line-fill',
    title: 'Consultoría Power BI',
    desc: 'Diseño e implementación de dashboards y reportes interactivos. Modelado de datos con DAX y Power Query para decisiones basadas en datos.',
    features: ['Modelado de datos', 'KPIs personalizados', 'Capacitación', 'Soporte continuo'],
    price: 'Desde S/. 350',
    highlight: false,
  },
  {
    icon: 'bi-laptop-fill',
    title: 'Desarrollo Web',
    desc: 'Aplicaciones web modernas y funcionales con React y tecnologías actuales. Desde landing pages hasta sistemas de gestión empresarial.',
    features: ['React + Bootstrap', 'Backend API REST', 'Base de datos', 'Deploy & hosting'],
    price: 'Desde S/. 800',
    highlight: true,
  },
  {
    icon: 'bi-file-earmark-spreadsheet-fill',
    title: 'Excel Avanzado',
    desc: 'Automatización con VBA, modelos financieros, dashboards dinámicos y plantillas profesionales a medida de tu negocio.',
    features: ['Macros y VBA', 'Power Query', 'Dashboards', 'Formulas avanzadas'],
    price: 'Desde S/. 200',
    highlight: false,
  },
  {
    icon: 'bi-mortarboard-fill',
    title: 'Capacitación & Cursos',
    desc: 'Formación presencial y online en Excel, Power BI y herramientas de análisis de datos para equipos empresariales.',
    features: ['Material incluido', 'Clases online/presencial', 'Certificado', 'Grupos o individual'],
    price: 'Desde S/. 150',
    highlight: false,
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="servicios-section">
      <div className="bg-glow servicios-glow"></div>

      <div className="container-xl px-4">
        {/* Header */}
        <div className="text-center mb-5 animate-fade-up">
          <div className="badge-tag mb-3"><i className="bi bi-briefcase-fill"></i> Servicios</div>
          <h2 className="section-title">¿Qué <span>Ofrezco?</span></h2>
          <div className="section-divider mt-3"></div>
          <p className="section-subtitle mt-3">
            Soluciones integrales de BI, desarrollo y formación para impulsar tu negocio
          </p>
        </div>

        {/* Grid */}
        <div className="row g-4 justify-content-center">
          {servicios.map((s, i) => (
            <div key={i} className="col-md-6 col-lg-3 animate-fade-up" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className={`servicio-card card-base p-4 h-100${s.highlight ? ' highlight' : ''}`}>
                {s.highlight && <div className="servicio-badge-popular">⚡ Popular</div>}
                <div className="servicio-icon">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h3 className="servicio-title">{s.title}</h3>
                <p className="servicio-desc">{s.desc}</p>
                <ul className="servicio-features">
                  {s.features.map((f, fi) => (
                    <li key={fi}>
                      <i className="bi bi-check2-circle"></i> {f}
                    </li>
                  ))}
                </ul>
                <div className="servicio-price">{s.price}</div>
                <a href="#contacto" className={s.highlight ? 'btn-primary-custom mt-3 justify-content-center' : 'btn-outline-custom mt-3 justify-content-center'}>
                  <i className="bi bi-send-fill"></i> Solicitar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
