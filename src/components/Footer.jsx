const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CBG TVET</h3>
            <p>Rubavu, Gisenyi Sector</p>
            <p>Email: info@cbgtvet.edu.rw</p>
            <p>Phone: +250 788 123 456</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/admissions" className="hover:text-amber-400">Admissions</a></li>
              <li><a href="/news-events" className="hover:text-amber-400">News & Events</a></li>
              <li><a href="/contact" className="hover:text-amber-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Partners</h3>
            <ul className="space-y-2">
              <li>C.ARICENT TECHNOLOGY LTD</li>
              <li>IMARA TECH SOLUTIONS</li>
              <li>HB Hub</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} CBG TVET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;