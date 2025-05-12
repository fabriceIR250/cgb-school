const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Contact Information</h2>
          <div className="space-y-4">
            <p><strong>Address:</strong> Rubavu, Gisenyi Sector</p>
            <p><strong>Phone:</strong> +250 788 123 456</p>
            <p><strong>Email:</strong> info@cbgtvet.edu.rw</p>
            <p><strong>Working Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM</p>
          </div>
        </div>
        
        {/* Location Map */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Location Map</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            [Map Embed Placeholder]
          </div>
        </div>
      </div>
      
      {/* Inquiry Form */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Online Inquiry Form</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea className="w-full p-2 border rounded h-32"></textarea>
          </div>
          <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;