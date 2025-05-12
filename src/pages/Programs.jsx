const Programs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Academic Programs</h1>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* ICT Program */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3 text-blue-700">ICT and Multimedia</h2>
          <p className="mb-2"><strong>Software Development (L3-L5)</strong></p>
          <p className="text-gray-700 mb-4">Comprehensive training in software engineering, web development, and multimedia production.</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded text-sm">
            Learn More
          </button>
        </div>
        
        {/* Accounting Program */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3 text-blue-700">ACCOUNTING (S4-S4)</h2>
          <p className="text-gray-700 mb-4">Professional accounting training with practical financial management skills.</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded text-sm">
            Learn More
          </button>
        </div>
        
        {/* O'Level Program */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-3 text-blue-700">O'LEVEL (S1-S3)</h2>
          <p className="text-gray-700 mb-4">Secondary education with technical orientation.</p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded text-sm">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Admission Requirements */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Admission Requirements</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Completed application form</li>
          <li>Certified copies of academic transcripts</li>
          <li>Two passport photos</li>
          <li>Medical certificate</li>
          <li>Copy of national ID or birth certificate</li>
        </ul>
      </section>
    </div>
  );
};

export default Programs;