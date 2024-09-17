import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="w-3/5 p-8">
      <div className="bg-white p-5 shadow-md rounded-md">
        <img
          src="https://t4.ftcdn.net/jpg/05/64/31/67/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg"
          alt="Blender Course"
          className="w-full h-64 object-cover rounded-md"
        />
        <h1 className="text-3xl font-bold mt-5">Blender 3D Fundamentals</h1>
        <p className="text-gray-600 mt-3">
          Learn the basics of 3D in Blender 3D with this comprehensive project-based course.
        </p>

        <div className="mt-6 flex justify-between">
          <div>
            <p className="text-gray-500">Duration</p>
            <p className="font-bold">56h 28m</p>
          </div>
          <div>
            <p className="text-gray-500">Skill level</p>
            <p className="font-bold">Beginner</p>
          </div>
          <div>
            <p className="text-gray-500">Views</p>
            <p className="font-bold">12,620</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-4">
            <details className="border-t border-gray-300 py-2">
              <summary className="cursor-pointer font-semibold">How long does it take to learn?</summary>
              <p className="mt-2 text-gray-600">It depends on your previous experience with 3D modeling...</p>
            </details>
            <details className="border-t border-gray-300 py-2">
              <summary className="cursor-pointer font-semibold">Is Blender cost-free?</summary>
              <p className="mt-2 text-gray-600">Yes, Blender is open-source and free to use for everyone.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
