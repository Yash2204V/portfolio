import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ForCurious from './pages/ForCurious';
import Certifications from './pages/Certifications';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Outlet />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="for-curious" element={<ForCurious />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
