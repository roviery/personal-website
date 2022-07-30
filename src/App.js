import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import ScrollToTop from './Utils/ScrollToTop';

function App() {
  return (
    <Router basename='/personal-website'>
      <ScrollToTop/>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
