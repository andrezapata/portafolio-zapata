import './Habilidades.css'

const categories = [
  {
    icon: 'bi-bar-chart-fill',
    title: 'Business Intelligence',
    skills: [
      { name: 'Power BI', level: 95, color: '#F2C811' },
      { name: 'Excel Avanzado', level: 98, color: '#1D6F42' },
      { name: 'Power Query', level: 90, color: '#F2C811' },
      { name: 'DAX / M Language', level: 88, color: '#0078D4' },
    ]
  },
  {
    icon: 'bi-code-slash',
    title: 'Desarrollo Web',
    skills: [
      { name: 'React.js', level: 85, color: '#61DAFB' },
      { name: 'JavaScript', level: 88, color: '#F7DF1E' },
      { name: 'HTML / CSS', level: 92, color: '#E34F26' },
      { name: 'Node.js', level: 75, color: '#68A063' },
    ]
  },
  {
    icon: 'bi-database-fill',
    title: 'Bases de Datos',
    skills: [
      { name: 'SQL Server', level: 90, color: '#CC2927' },
      { name: 'MySQL', level: 85, color: '#00758F' },
      { name: 'PostgreSQL', level: 78, color: '#336791' },
      { name: 'MongoDB', level: 70, color: '#47A248' },
    ]
  },
  {
    icon: 'bi-tools',
    title: 'Herramientas & Cloud',
    skills: [
      { name: 'Git / GitHub', level: 85, color: '#F1502F' },
      { name: 'Azure', level: 72, color: '#0078D4' },
      { name: 'Docker', level: 65, color: '#2496ED' },
      { name: 'Python', level: 78, color: '#3776AB' },
    ]
  }
]

export default function Habilidades() {
  return (
    <section id="habilidades" className="habilidades-section">
      <div className="bg-glow habilidades-glow"></div>

      <div className="container-xl px-4">
        {/* Header */}
        <div className="text-center mb-5 animate-fade-up">
          <div className="badge-tag mb-3"><i className="bi bi-lightning-fill"></i> Competencias</div>
          <h2 className="section-title">Tech <span>Stack</span></h2>
          <div className="section-divider mt-3"></div>
          <p className="section-subtitle mt-3">
            Herramientas y tecnologías que domino para crear soluciones de alto impacto
          </p>
        </div>

        {/* Cards por categoría */}
        <div className="row g-4">
          {categories.map((cat, ci) => (
            <div key={ci} className="col-md-6 col-lg-3 animate-fade-up" style={{ animationDelay: `${ci * 0.12}s` }}>
              <div className="hab-card card-base p-4 h-100">
                <div className="hab-card-icon">
                  <i className={`bi ${cat.icon}`}></i>
                </div>
                <h3 className="hab-card-title">{cat.title}</h3>
                <div className="hab-skills">
                  {cat.skills.map((sk, si) => (
                    <div key={si} className="hab-skill-item">
                      <div className="hab-skill-header">
                        <span className="hab-skill-name">{sk.name}</span>
                        <span className="hab-skill-pct">{sk.level}%</span>
                      </div>
                      <div className="hab-bar">
                        <div
                          className="hab-bar-fill"
                          style={{ width: `${sk.level}%`, background: sk.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}