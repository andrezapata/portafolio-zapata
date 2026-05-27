import { useState } from 'react'
import './Proyectos.css'

const proyectos = [
  {
    id: 1, category: 'Web',
    title: 'Proyecto - AppLogin',
    desc: 'Aplicacion de login con autenticacion de usuarios, registro y manejo de sesiones.',
    tags: ['React', 'Node.js', 'MySQL'],
    icon: 'bi-box-seam-fill',
    color: '#00c8ff',
    demo: 'https://github.com/andrezapata/actividad-5---Applogin',
    repo: 'https://github.com/andrezapata/actividad-5---Applogin',
  },
  {
    id: 2, category: 'Web',
    title: 'Proyecto - Sistema Gestion Citas',
    desc: 'Sistema web para gestion de citas con calendario, registro de pacientes y administracion.',
    tags: ['React', 'Bootstrap', 'MongoDB'],
    icon: 'bi-calendar-check-fill',
    color: '#a78bfa',
    demo: 'https://github.com/Vrak23/app-gestion-citas',
    repo: 'https://github.com/Vrak23/app-gestion-citas',
  },
  {
    id: 3, category: 'Web',
    title: 'Proyecto - Musica',
    desc: 'Aplicacion de musica con reproductor, listas de reproduccion y busqueda de canciones.',
    tags: ['React', 'JavaScript', 'CSS'],
    icon: 'bi-music-note-beamed',
    color: '#ff6b6b',
    demo: 'https://github.com/Vrak23/Proyecto-musica',
    repo: 'https://github.com/Vrak23/Proyecto-musica',
  },
  {
    id: 4, category: 'BI',
    title: 'Reporte RRHH Analytics',
    desc: 'Analisis de rotacion, headcount y performance de empleados con drill-down jerarquico.',
    tags: ['Power BI', 'Power Query', 'Azure'],
    icon: 'bi-people-fill',
    color: '#0078D4',
    demo: '#',
    repo: '#',
  },
  {
    id: 5, category: 'BI',
    title: 'Dashboard Ventas Retail',
    desc: 'Dashboard interactivo con KPIs de ventas, segmentacion por region y analisis de tendencias mensuales.',
    tags: ['Power BI', 'DAX', 'SQL Server'],
    icon: 'bi-graph-up-arrow',
    color: '#F2C811',
    demo: '#',
    repo: '#',
  },
  {
    id: 6, category: 'Excel',
    title: 'Automatizacion de Reportes',
    desc: 'Sistema de automatizacion con VBA que genera reportes mensuales al ejecutar una macro.',
    tags: ['Excel', 'VBA', 'Power Query'],
    icon: 'bi-gear-wide-connected',
    color: '#a78bfa',
    demo: '#',
    repo: '#',
  },
]

const filters = ['Todos', 'BI', 'Web', 'Excel']

export default function Proyectos() {
  const [active, setActive] = useState('Todos')
  const [openDemo, setOpenDemo] = useState(null)

  const filtered = active === 'Todos'
    ? proyectos
    : proyectos.filter(p => p.category === active)

  const toggleDemo = (id) => {
    setOpenDemo(openDemo === id ? null : id)
  }

  const handleRepo = (url) => {
    if (url !== '#') window.open(url, '_blank')
  }

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="bg-glow proyectos-glow"></div>
      <div className="container-xl px-4">
        <div className="text-center mb-5 animate-fade-up">
          <div className="badge-tag mb-3"><i className="bi bi-grid-1x2-fill"></i> Portafolio</div>
          <h2 className="section-title">Mis <span>Proyectos</span></h2>
          <div className="section-divider mt-3"></div>
          <p className="section-subtitle mt-3">
            Soluciones reales que generan impacto en negocios y organizaciones
          </p>
        </div>
        <div className="proyectos-filters mb-5 animate-fade-up">
          {filters.map(f => (
            <button
              key={f}
              className={active === f ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="row g-4">
          {filtered.map((p, i) => (
            <div key={p.id} className="col-md-6 col-lg-4 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="proyecto-card card-base p-4 h-100">
                <div className="proyecto-icon" style={{ background: `${p.color}18`, borderColor: `${p.color}33`, color: p.color }}>
                  <i className={`bi ${p.icon}`}></i>
                </div>
                <span className="proyecto-cat">{p.category}</span>
                <h3 className="proyecto-title">{p.title}</h3>
                <p className="proyecto-desc">{p.desc}</p>
                <div className="proyecto-tags">
                  {p.tags.map(t => (
                    <span key={t} className="proyecto-tag">{t}</span>
                  ))}
                </div>
                {openDemo === p.id && p.demo !== '#' && (
                  <div className="proyecto-url-box">
                    <i className="bi bi-link-45deg"></i>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="proyecto-url-link">
                      {p.demo}
                    </a>
                  </div>
                )}
                <div className="proyecto-actions">
                  <button
                    className={openDemo === p.id ? 'btn-outline-custom proyecto-btn active-demo' : 'btn-outline-custom proyecto-btn'}
                    onClick={() => toggleDemo(p.id)}
                  >
                    <i className={openDemo === p.id ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'}></i>
                    {openDemo === p.id ? ' Ocultar demo' : ' Ver demo'}
                  </button>
                  <button className="proyecto-github" onClick={() => handleRepo(p.repo)}>
                    <i className="bi bi-github"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}