import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Incubator from './pages/Incubator';
import StudentLife from './pages/StudentLife';
import Admissions from './pages/Admissions';
import NewsEvents from './pages/NewsEvents';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/incubator" element={<Incubator />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;