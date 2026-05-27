import './Certificados.css'

const certs = [
  { icon: 'bi-router-fill', title: 'Cisco Networking', org: 'Cisco', year: '2024', color: '#1BA0D7', pdf: '/Certificados/cisco.pdf' },
  { icon: 'bi-microsoft', title: 'MOS Excel Expert', org: 'Microsoft', year: '2022', color: '#1D6F42', pdf: '/certificados/mos-excel.pdf' },
  { icon: 'bi-microsoft', title: 'Power BI Data Analyst (PL-300)', org: 'Microsoft', year: '2023', color: '#F2C811', pdf: '/certificados/powerbi.pdf' },
  { icon: 'bi-cloud-fill', title: 'Azure Fundamentals (AZ-900)', org: 'Microsoft Azure', year: '2023', color: '#0078D4', pdf: '/certificados/azure.pdf' },
  { icon: 'bi-graph-up', title: 'Google Data Analytics', org: 'Google', year: '2022', color: '#4285F4', pdf: '/certificados/google-data.pdf' },
  { icon: 'bi-code-slash', title: 'Full Stack Web Developer', org: 'freeCodeCamp', year: '2021', color: '#00c8ff', pdf: '/certificados/fullstack.pdf' },
  { icon: 'bi-database-fill', title: 'SQL Avanzado', org: 'HackerRank', year: '2022', color: '#2EC866', pdf: '/certificados/sql.pdf' },
]

export default function Certificados() {
  return (
    <section id="certificados" className="certificados-section">
      <div className="bg-glow certs-glow"></div>
      <div className="container-xl px-4">
        <div className="text-center mb-5 animate-fade-up">
          <div className="badge-tag mb-3"><i className="bi bi-award-fill"></i> Credenciales</div>
          <h2 className="section-title">Mis <span>Certificaciones</span></h2>
          <div className="section-divider mt-3"></div>
          <p className="section-subtitle mt-3">
            Formacion continua y certificaciones que respaldan mi expertise profesional
          </p>
        </div>
        <div className="row g-4">
          {certs.map((c, i) => (
            <div key={i} className="col-sm-6 col-lg-4 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="cert-card card-base p-4">
                <div className="cert-icon" style={{ background: `${c.color}18`, borderColor: `${c.color}30`, color: c.color }}>
                  <i className={`bi ${c.icon}`}></i>
                </div>
                <div className="cert-info">
                  <h4 className="cert-title">{c.title}</h4>
                  <span className="cert-org">{c.org}</span>
                  <div className="cert-meta">
                    <span className="cert-year"><i className="bi bi-calendar3"></i> {c.year}</span>
                    <span className="cert-badge">Verificado</span>
                  </div>
                  <a href={c.pdf} download className="cert-download">
                    <i className="bi bi-download"></i> Descargar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}