import './App.css';
import NavBar from './components/NavBar/Navbar.tsx';
import Separador from './components/Separador/Separador.tsx';
import Inicio from './sections/Inicio/Inicio.tsx';
import SobreMi from './sections/SobreMi/SobreMi.tsx';
import Habilidades from './sections/Habilidades/Habilidades.tsx';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Inicio></Inicio>
      <Separador></Separador>
      <SobreMi></SobreMi>
      <Separador></Separador>
      <Habilidades></Habilidades>
    </div>
  );
}

export default App;
