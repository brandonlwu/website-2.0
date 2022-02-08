import MainPage from './components/MainPage'
import LandingPage from './components/LandingPage'
import Introduction from './components/Introduction'
import Condensed from './components/Condensed'
import Creations from './components/Creations'
import Words from './components/Words'
import Pictures from './components/Pictures'
import Connect from './components/Connect'
import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="intro" element={<Introduction />} />
        <Route path="creations" element={<Creations />} />
        <Route path="condensed" element={<Condensed />} />
        <Route path="words" element={<Words />} />
        <Route path="pictures" element={<Pictures />} />
        <Route path="connect" element={<Connect />} />
      </Routes>
    </Router>
  );
}

export default App;
