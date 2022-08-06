import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail'
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router basename='/personal-website'>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/project/:id" exact element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
