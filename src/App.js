import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/Navbar.tsx';
import Inicio from './sections/Inicio/Inicio.tsx';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Inicio></Inicio>
    </div>
  );
}

export default App;
