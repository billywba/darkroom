import './App.css';
import { Routes, Route } from "react-router-dom"

import Container from 'react-bootstrap/Container'

import InfoFrame from './components/pages/InfoFrame';
import Home from './components/pages/Home';
import SplinePage from './components/pages/SplinePage';

function App() {
  return (
    <div className="App">
      <Container style={{padding: '50px'}}>
        <Routes>
          <Route path="/home" element={ <Home/> } />
          <Route path="/info" element={ <InfoFrame/> } />
          <Route path="/spline" element={ <SplinePage /> } />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
