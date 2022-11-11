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
          <Route path="/info/1" element={ <InfoFrame/> } />
        </Routes>
      </Container>
      {/* <header className="App-header">
        <h1>DE-LIGHT</h1>
      </header> */}
    </div>
  );
}

export default App;
