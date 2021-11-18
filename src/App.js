
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Header';
import Home from './Components/Home'
import Ajout from "./Components/Ajout";
import Edit from "./Components/Edit";
import Help from './Components/Help';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Header />

      <nav>
        <Routes>
          <Route excat path="/" element={<Home/>} />
          <Route excat path="/ajout" element={<Ajout />} />
          <Route excat path="/help" element={<Help />} />
          <Route excat path="/edit/:id" element={<Edit />} />
          <Route excat path="/details/:id" element={<Details />} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
