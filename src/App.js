import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import ProjectDetail from './Pages/ProjectDetail'
import ScrollToTop from './Utils/ScrollToTop';

function App() {
  return (
    <Router basename='/personal-website'>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/project" exact element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
