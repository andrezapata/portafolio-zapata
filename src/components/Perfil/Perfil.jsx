import './Perfil.css'

const stats = [
  { value: '5+',  label: 'Años de experiencia' },
  { value: '80+', label: 'Proyectos completados' },
  { value: '50+', label: 'Clientes satisfechos' },
  { value: '15+', label: 'Certificaciones' },
]

const timeline = [
  { year: '2019', title: 'Ingeniero de Sistemas', desc: 'Graduación universitaria con especialización en desarrollo de software.' },
  { year: '2020', title: 'Analista de Datos', desc: 'Inicio como analista BI en empresa consultora, manejando Power BI y Excel avanzado.' },
  { year: '2022', title: 'MOS Excel Expert', desc: 'Certificación Microsoft Office Specialist - Excel Expert nivel internacional.' },
  { year: '2023', title: 'Power BI Data Analyst', desc: 'Certificación Microsoft PL-300 Power BI Data Analyst Associate.' },
  { year: '2024', title: 'Consultor & Instructor', desc: 'Fundación de servicios independientes de consultoría BI y desarrollo web.' },
]

export default function Perfil() {
  return (
    <section id="perfil" className="perfil-section">
      <div className="bg-glow perfil-glow"></div>

      <div className="container-xl px-4">
        {/* Header */}
        <div className="text-center mb-5 animate-fade-up">
          <div className="badge-tag mb-3"><i className="bi bi-person-fill"></i> Sobre mí</div>
          <h2 className="section-title">Mi <span>Perfil</span></h2>
          <div className="section-divider mt-3"></div>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-5 justify-content-center">
          {stats.map((s, i) => (
            <div key={i} className="col-6 col-md-3 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="perfil-stat card-base p-4 text-center">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="perfil-timeline-title mb-4">Trayectoria Profesional</h3>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="timeline-dot">
                    <div className="timeline-dot-inner"></div>
                  </div>
                  <div className="timeline-content card-base p-4">
                    <span className="timeline-year">{item.year}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}