import './App.css';
import { Routes, Route } from "react-router-dom"

import Container from 'react-bootstrap/Container'

import InfoFrame from './components/pages/InfoFrame';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/home" element={ <Home/> } />
          <Route path="/info" element={ <InfoFrame/> } />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
