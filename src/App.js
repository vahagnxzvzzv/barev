import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <div className='navbar active'>
      <Navbar />
      </div>
      <MainContent />
    </div>
  );
}

export default App;
