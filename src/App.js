import Converter from './components/Converter';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Links from './components/Links';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Converter />
      <Contact />
      <Links />
    </div>
  );
}

export default App;