// import React from "react";

const Shop = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-4">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-cyan-400 hover:text-pink-400 transition duration-300">
          Explore Our Collection
        </h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Discover futuristic streetwear designed to break boundaries. Shop the latest trends now.
        </p>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="/path-to-image.jpg" alt="Hoodie V1" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-medium">Hoodie V1</h3>
          <p className="text-pink-400 mt-2">$59.99</p>
          <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-cyan-400 transition duration-300">
            Add to Cart
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="/path-to-image.jpg" alt="Joggers X" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-medium">Joggers X</h3>
          <p className="text-pink-400 mt-2">$49.99</p>
          <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-cyan-400 transition duration-300">
            Add to Cart
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="/path-to-image.jpg" alt="Glitch Cap" className="w-full h-64 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-medium">Glitch Cap</h3>
          <p className="text-pink-400 mt-2">$29.99</p>
          <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-cyan-400 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
