const Home = () => {
    return (
      <div className="bg-black text-white min-h-screen">
        {/* Welcome Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">
          <h1 className="text-5xl font-bold text-cyan-400 hover:text-pink-400   transition duration-300  ease-linear">GLX: Glitch the Code. Own the Future.</h1>
          <p className="text-lg mt-4 max-w-2xl">
            Revolutionizing streetwear with futuristic designs. Step into the next era of fashion.
          </p>
          <a href="#shop" className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-cyan-400 transition duration-300 ease-linear">
            Explore the Collection
          </a>
        </section>
  
        {/* About DLX Section */}
        <section className="text-center py-20 px-4">
          <h2 className="text-3xl font-semibold text-cyan-400 hover:text-pink-400  transition duration-300 ease-linear">What is DLX?</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            DLX is more than a brand; it's a movement. Inspired by digital culture, cyber aesthetics, and glitch art, we create streetwear that breaks boundaries.
          </p>
        </section>
  
        {/* Featured Products Section */}
        <section id="shop" className="py-20 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-cyan-400 hover:text-pink-400  transition duration-300 ease-linear">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="/path-to-image.jpg" alt="Hoodie V1" className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-medium">Hoodie V1</h3>
              <p className="text-pink-400 mt-2">$59.99</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="/path-to-image.jpg" alt="Joggers X" className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-medium">Joggers X</h3>
              <p className="text-pink-400 mt-2">$49.99</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src="/path-to-image.jpg" alt="Glitch Cap" className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-medium">Glitch Cap</h3>
              <p className="text-pink-400 mt-2">$29.99</p>
            </div>
          </div>
        </section>
  
        {/* Join the Movement Section */}
        <section className="text-center py-20 px-4">
          <h2 className="text-3xl font-semibold text-cyan-400 hover:text-pink-400  transition duration-300 ease-linear">Join the Movement</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Be part of the future of fashion. Stay updated on exclusive drops and new collections.
          </p>
          <input type="email" placeholder="Enter your email" className="mt-4 px-4 py-2 rounded-md text-black bg-cyan-500 p-2" />
          <button className="ml-2 bg-pink-500 flex self-center  justify-self-center mt-10 text-white px-6 py-2 rounded-md hover:bg-cyan-400 transition duration-300 ease-linear">
            Subscribe
          </button>
        </section>
      </div>
    );
  };
  
  export default Home;
