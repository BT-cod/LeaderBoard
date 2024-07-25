import React from 'react';
import Leaderboard from './components/Leaderboard';
import ScorePopup from './components/ScorePopup';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Leaderboard />
      <ScorePopup />
      <Footer />
    </div>
  );
}

export default App;
