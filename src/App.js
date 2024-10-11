import './App.css';
import Header from './components/Header';
import Concerts from './components/Programme';

function App() {
  return (
    <div className="App">
      <Header />
      <Concerts />
      {/* Ajouter d'autres composants ici */}
    </div>
  );
}

export default App;

