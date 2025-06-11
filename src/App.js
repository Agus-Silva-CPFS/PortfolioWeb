import './App.css';
import NavBar from './components/NavBar/Navbar.tsx';
import Separador from './components/Separador/Separador.tsx';
import Inicio from './sections/Inicio/Inicio.tsx';
import SobreMi from './sections/SobreMi/SobreMi.tsx';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Inicio></Inicio>
      <Separador></Separador>
      <SobreMi></SobreMi>
      <Separador></Separador>
    </div>
  );
}

export default App;
