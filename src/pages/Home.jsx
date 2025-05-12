import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Welcome to CBG TVET",
      description: "Empowering youth with technical and vocational skills for Rwanda's digital economy.",
      image: "https://d1yc6vwxvprgjf.cloudfront.net/rw/gallery_images/x_medium/1434488631/530231?1434488631",
      buttonText: "Learn More"
    },
    {
      title: "Quality Technical Education",
      description: "Hands-on training for real-world employment opportunities.",
      image: "https://miro.medium.com/v2/resize:fit:600/1*vOpAEgiOjOxFb3ITnzll-A.jpeg",
      buttonText: "Our Programs"
    },
    {
      title: "Industry-Ready Graduates",
      description: "Partnering with leading tech companies for job placement.",
      image: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/OMP/graduates_tcm27-69694.jpg",
      buttonText: "See Success Stories"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Carousel */}
      <section className="mb-16 relative h-80 md:h-[32rem] overflow-hidden rounded-xl shadow-2xl">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex flex-col justify-center items-center p-6 md:p-12 text-white transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/50"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeInUp">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 animate-fadeInUp delay-100">
                {slide.description}
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-fadeInUp delay-200">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
        
        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-amber-500 w-6' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-3">Our Foundation</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
            <div className="text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Vision</h3>
            <p className="text-gray-600">To be a center of excellence in technical and vocational education in Rwanda.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-amber-500">
            <div className="text-amber-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Mission</h3>
            <p className="text-gray-600">To provide quality technical education that equips students with practical skills for employment and entrepreneurship.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
            <div className="text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Core Values</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Excellence
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Innovation
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Integrity
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Teamwork
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* School Manager's Message */}
      <section className="mb-16 bg-gradient-to-r from-blue-50 to-blue-100 p-8 md:p-12 rounded-2xl shadow-inner">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-3">From Our Manager</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png" 
              alt="School Manager" 
              className="w-full h-full object-cover rounded-full border-4 border-amber-400 shadow-lg"
            />
            <div className="absolute -bottom-3 -right-3 bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
              Manager
            </div>
          </div>
          <div className="text-center md:text-left">
            <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
              "Welcome to CBG TVET, where we are committed to transforming lives through technical education. Our hands-on approach ensures that students graduate with not just certificates, but real-world skills that make them immediately employable or ready to start their own businesses."
            </blockquote>
            <p className="font-bold text-blue-800 text-lg">— MUKANYINDO clem..., School Manager</p>
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-3">Our Industry Partners</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We collaborate with leading industry partners to ensure our curriculum remains relevant and our graduates are job-ready.
          </p>
        </div>
        
        <div className="relative overflow-hidden py-6">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="animate-marquee whitespace-nowrap">
            <div className="inline-flex items-center space-x-16 px-4">
              {[1, 2, 3, 1, 2, 3].map((partner, index) => (
                <div key={index} className="inline-flex flex-col items-center justify-center w-56">
                  <div className="w-24 h-24 mb-4 flex items-center justify-center bg-white p-4 rounded-xl shadow-md">
                    {partner === 1 ? (
                      <img 
                        src="https://crat-rw.vercel.app/static/media/crtlogo.58ecd826568637a0a08c.png" 
                        alt="CR Aricent Technology Logo" 
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : partner === 2 ? (
                      <img 
                        src="https://via.placeholder.com/150?text=IMARA" 
                        alt="Imara Tech Solutions Logo" 
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <img 
                        src="https://www.hblab.rw/assets/logo-CgQvTwG1.png" 
                        alt="HB Lab Logo" 
                        className="max-h-full max-w-full object-contain"
                      />
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {partner === 1 ? "CR ARICENT TECHNOLOGY LTD" : 
                     partner === 2 ? "IMARA TECH SOLUTIONS" : "HB LAB"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center mb-16 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join CBG TVET today and gain the skills that will transform your future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Apply Now
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;