import logo from './logo.svg';
import './App.css';
import Click from './components/Click'
import Form from './components/Form';
import Condicional from './components/Condicional';
import Listas from './components/Listas';

function App() {
  const jogadores = []
  var nome = "Lucas";
  return (
    <div>
      <Listas jogadores={jogadores}/>
    </div>
    
  );
}

export default App;
