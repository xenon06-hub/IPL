import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { MatchPage } from './pages/MatchPage';
import { TeamPage } from './pages/TeamPage';

function App() {
  const appStyle = {
    backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/040/293/889/small_2x/beautiful-sports-stadium-with-a-green-grass-field-shines-with-blue-spotlights-at-night-with-stars-sports-tournament-world-championship-photo.jpg")',
    backgroundSize: 'cover', // Cover the entire area
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    height: '100vh', // Full viewport height
    width: '100%', // Full width
    display: 'flex', // Optional: if you want to use flexbox for content
    justifyContent: 'center', // Optional: center content horizontally
    alignItems: 'center', // Optional: center content vertically
};

  return (
    <div className="App" >
      <Router>
        <Routes>
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
