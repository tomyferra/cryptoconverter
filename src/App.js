import Converter from './components/Converter';
import Navbar from './components/Navbar';
import Links from './components/Links';
import './App.css';

function App() {
  return (
    <div className="App mt-auto d-flex flex-column min-vh-100">
      <Navbar />
      <Converter />
      <Links />
    </div>
  );
}

export default App;