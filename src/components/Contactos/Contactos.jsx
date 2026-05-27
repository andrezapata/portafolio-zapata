import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contactos.css'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contactos() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setEnviado(true)
      setLoading(false)
      setForm({ nombre: '', email: '', mensaje: '' })
    })
    .catch(() => {
      alert('Error al enviar. Intenta de nuevo.')
      setLoading(false)
    })
  }

  return (
    <section id="contacto" className="contactos-section">
      <div className="bg-glow contact-glow-1"></div>
      <div className="bg-glow contact-glow-2"></div>

      <div className="container-xl px-4">
        <div className="text-center mb-5 animate-fade-up">
          <div className="badge-tag mb-3"><i className="bi bi-envelope-fill"></i> Contacto</div>
          <h2 className="section-title">Hablemos de tu <span>Proyecto</span></h2>
          <div className="section-divider mt-3"></div>
          <p className="section-subtitle mt-3">
            Estoy disponible para proyectos freelance, consultoria y capacitaciones
          </p>
        </div>

        <div className="row g-5 justify-content-center">
          <div className="col-lg-4 animate-fade-up">
            <div className="contact-info">
              <h3 className="contact-info-title">Informacion de contacto</h3>
              <p className="contact-info-desc">
                Respondo en menos de 24 horas. Tambien puedes escribirme por WhatsApp para una respuesta mas rapida.
              </p>
              {[
                { icon: 'bi-envelope-fill', label: 'Email', val: 'andrebryamzapatavega@gmail.com' },
                { icon: 'bi-whatsapp', label: 'WhatsApp', val: '+51 901 329 855' },
                { icon: 'bi-geo-alt-fill', label: 'Ubicacion', val: 'Lima, Peru' },
                { icon: 'bi-clock-fill', label: 'Horario', val: 'Lun - Vie, 9am - 6pm' },
              ].map((item, i) => (
                <div key={i} className="contact-item">
                  <div className="contact-item-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <div>
                    <span className="contact-item-label">{item.label}</span>
                    <span className="contact-item-val">{item.val}</span>
                  </div>
                </div>
              ))}
              <div className="contact-socials">
                {[
                  { icon: 'bi-linkedin', href: '#', label: 'LinkedIn' },
                  { icon: 'bi-github', href: 'https://github.com/andrezapata', label: 'GitHub' },
                  { icon: 'bi-youtube', href: '#', label: 'YouTube' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-btn" title={s.label}>
                    <i className={`bi ${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 animate-fade-up animate-delay-2">
            <div className="contact-form card-base p-5">
              {enviado ? (
                <div className="form-success">
                  <i className="bi bi-check-circle-fill success-icon"></i>
                  <h4>Mensaje enviado!</h4>
                  <p>Gracias por contactarme. Te respondere pronto.</p>
                  <button className="btn-primary-custom mt-3" onClick={() => setEnviado(false)}>
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Nombre completo</label>
                        <input
                          type="text" name="nombre" value={form.nombre}
                          onChange={handleChange} placeholder="Tu nombre"
                          className="form-input" required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email" name="email" value={form.email}
                          onChange={handleChange} placeholder="tu@email.com"
                          className="form-input" required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Mensaje</label>
                        <textarea
                          name="mensaje" value={form.mensaje}
                          onChange={handleChange} placeholder="Cuentame sobre tu proyecto..."
                          className="form-input" rows={5} required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-primary-custom w-100 justify-content-center" disabled={loading}>
                        {loading
                          ? <><span className="spinner"></span> Enviando...</>
                          : <><i className="bi bi-send-fill"></i> Enviar Mensaje</>
                        }
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}