import './App.css';
import NavBar from './components/NavBar/Navbar.tsx';
import Separador from './components/Separador/Separador.tsx';
import Inicio from './sections/Inicio/Inicio.tsx';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Inicio></Inicio>
      <Separador></Separador>
    </div>
  );
}

export default App;
