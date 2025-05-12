const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">About CBG TVET</h1>
      
      {/* History Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">History of CBG TVET</h2>
        <p className="mb-4">
          CBG TVET was established in [year] with the mission to provide quality technical education in Rwanda. 
          Over the years, we have grown to become a leading institution in vocational training.
        </p>
      </section>

      {/* Location Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Location</h2>
        <p className="mb-2"><strong>Address:</strong> Rubavu, Gisenyi Sector</p>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          [Map Placeholder]
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Organizational Structure</h2>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          [Organizational Chart Placeholder]
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="bg-gray-300 h-40 mx-auto mb-4 rounded-full w-40"></div>
              <h3 className="font-bold">Staff Member {item}</h3>
              <p className="text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">School Achievements</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Award for Excellence in Technical Education (2023)</li>
          <li>Best TVET School in Western Province (2022)</li>
          <li>90% Graduate Employment Rate</li>
        </ul>
      </section>
    </div>
  );
};

export default About;