import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <div className="w-1/5 bg-white p-6 shadow-lg h-screen">
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-purple-700">$15.99</h2>
        <span className="text-gray-500 line-through">$39.99</span>
        <span className="ml-2 text-green-600 font-bold">60% off</span>
      </div>
      <button className="w-full bg-purple-700 text-white py-2 rounded-lg mb-4">Add to Cart</button>
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Buy Now</button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Rating</h3>
        <div className="mt-2 flex items-center space-x-2">
          <span className="font-bold text-xl">4.5</span>
          <span className="text-gray-500">/ 5.0</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">2,492 Students</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Publisher</h3>
        <p className="text-gray-600">Ryan Curtis</p>
        <p className="text-gray-500 text-sm">3D Artist and Instructor</p>
      </div>
      {/* Ratings */}
      <div>
        <h4 className="text-lg font-bold mb-2">Rating</h4>
        <p className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐ (4.8)</p>
        <p className="text-gray-600">2,492 students</p>
      </div>
    </div>
  );
};

export default RightSidebar;
