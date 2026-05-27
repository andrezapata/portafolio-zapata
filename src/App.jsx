import Navbar       from './components/Navbar/Navbar'
import Banner       from './components/Banner/Banner'
import Perfil       from './components/Perfil/Perfil'
import Habilidades  from './components/Habilidades/Habilidades'
import Proyectos    from './components/Proyectos/Proyectos'
import Servicios    from './components/Servicios/Servicios'
import Certificados from './components/Certificados/Certificados'
import Contactos    from './components/Contactos/Contactos'
import Footer       from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner       />
        <Perfil       />
        <Habilidades  />
        <Proyectos    />
        <Servicios    />
        <Certificados />
        <Contactos    />
      </main>
      <Footer />
    </>
  )
}

export default App