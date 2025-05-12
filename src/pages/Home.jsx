import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Welcome to CBG TVET",
      description: "Empowering youth with technical and vocational skills for Rwanda's digital economy.",
      image: "https://d1yc6vwxvprgjf.cloudfront.net/rw/gallery_images/x_medium/1434488631/530231?1434488631", // 
      buttonText: "Learn More"
    },
    {
      title: "Quality Technical Education",
      description: "Hands-on training for real-world employment opportunities.",
      image: "https://miro.medium.com/v2/resize:fit:600/1*vOpAEgiOjOxFb3ITnzll-A.jpeg", // 
      buttonText: "Our Programs"
    },
    {
      title: "Industry-Ready Graduates",
      description: "Partnering with leading tech companies for job placement.",
      image: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/1272/cached.offlinehbpl.hbpl.co.uk/news/OMP/graduates_tcm27-69694.jpg", // 
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
       {/* Welcome Section Carousel with Background Images */}
      <section className="mb-12 relative h-96 overflow-hidden rounded-lg shadow-xl">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-white transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-lg mb-6 animate-fadeIn delay-100">
                {slide.description}
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded transition animate-fadeIn delay-200">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
        
        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${currentSlide === index ? 'bg-amber-500' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>


      {/* Rest of your existing sections remain unchanged */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Vision, Mission & Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Vision</h3>
            <p>To be a center of excellence in technical and vocational education in Rwanda.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Mission</h3>
            <p>To provide quality technical education that equips students with practical skills for employment and entrepreneurship.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Core Values</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Excellence</li>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>
      </section>

      {/* School Manager's Message */}
      <section className="mb-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">School Manager's Message</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src="/assets/manager.jpg" 
            alt="School Manager" 
            className="w-48 h-48 object-cover rounded-full border-4 border-amber-400"
          />
          <div>
            <p className="mb-4">
              "Welcome to CBG TVET, where we are committed to transforming lives through technical education. Our hands-on approach ensures that students graduate with not just certificates, but real-world skills that make them immediately employable or ready to start their own businesses."
            </p>
            <p className="font-semibold">- John Doe, School Manager</p>
          </div>
        </div>
      </section>

      {/* Industry Partners Marquee */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-8 text-blue-800 text-center">Our Industry Partners</h2>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="animate-marquee whitespace-nowrap">
            <div className="inline-flex items-center space-x-12 px-4">
              {/* Partner 1 */}
              <div className="inline-flex flex-col items-center justify-center w-48">
                <div className="w-20 h-20 mb-3 flex items-center justify-center">
                  <img 
                    src="https://crat-rw.vercel.app/static/media/crtlogo.58ecd826568637a0a08c.png" 
                    alt="CR Aricent Technology Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">CR ARICENT TECHNOLOGY LTD</span>
              </div>

              {/* Partner 2 */}
              <div className="inline-flex flex-col items-center justify-center w-48">
                <div className="w-20 h-20 mb-3 flex items-center justify-center bg-gray-100 rounded-full">
                  <img 
                    src="/logos/imara-logo.png" 
                    alt="Imara Tech Solutions Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">IMARA TECH SOLUTIONS</span>
              </div>

              {/* Partner 3 */}
              <div className="inline-flex flex-col items-center justify-center w-48">
                <div className="w-20 h-20 mb-3 flex items-center justify-center">
                  <img 
                    src="https://www.hblab.rw/assets/logo-CgQvTwG1.png" 
                    alt="HB Lab Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">HB LAB</span>
              </div>

              {/* Duplicate for seamless looping */}
              <div className="inline-flex flex-col items-center justify-center w-48">
                <div className="w-20 h-20 mb-3 flex items-center justify-center">
                  <img 
                    src="https://crat-rw.vercel.app/static/media/crtlogo.58ecd826568637a0a08c.png" 
                    alt="CR Aricent Technology Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">CR ARICENT TECHNOLOGY LTD</span>
              </div>

              <div className="inline-flex flex-col items-center justify-center w-48">
                <div className="w-20 h-20 mb-3 flex items-center justify-center bg-gray-100 rounded-full">
                  <img 
                    src="/logos/imara-logo.png" 
                    alt="Imara Tech Solutions Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">IMARA TECH SOLUTIONS</span>
              </div>

              <div className="inline-flex flex-col items-center justify-center w-48">
                <div className="w-20 h-20 mb-3 flex items-center justify-center">
                  <img 
                    src="https://www.hblab.rw/assets/logo-CgQvTwG1.png" 
                    alt="HB Lab Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">HB LAB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;