import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StyleProvider } from './context/StyleContext';
import Home from './pages/Home';
import About from './pages/About';
import DesignSyncDemo from './pages/DesignSyncDemo';
import StylePage from './pages/StyleImplementations/StylePage';
import './App.css';

function App() {
  return (
    <StyleProvider>
      <Router>
        <div className="App">
          <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', background: '#f5f5f5' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
            <Link to="/demo" style={{ marginRight: '1rem' }}>DesignSync Demo</Link>
            <Link to="/styles/minimalism">Style Example</Link>
          </nav>

          <main style={{ padding: '2rem' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/demo" element={<DesignSyncDemo />} />
              <Route path="/styles/:styleName" element={<StylePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </StyleProvider>
  );
}

export default App;
