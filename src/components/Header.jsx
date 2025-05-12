import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/assets/logo.png" alt="CBG II Logo" className="h-12" />
            <h1 className="text-xl font-bold">CBG TVET</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-amber-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-amber-400 transition">Programs</Link></li>
              <li><Link to="/incubator" className="hover:text-amber-400 transition">Incubator</Link></li>
              <li><Link to="/student-life" className="hover:text-amber-400 transition">Student Life</Link></li>
              <li><Link to="/admissions" className="hover:text-amber-400 transition">Admissions</Link></li>
            </ul>
          </nav>
          <button className="md:hidden">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;