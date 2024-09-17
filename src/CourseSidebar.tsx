import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/5 bg-gray-900 text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-5">Course Introduction</h2>
      <ul className="space-y-4">
        <li className="text-purple-400 font-semibold">Introduction</li>
        <li>Downloading Blender</li>
        <li>Settings and Preferences</li>
        <li>Blender Interface</li>
        <li>Mesh Modeling</li>
        <li>Mesh Editing Operations</li>
        <li>Most Common Modifiers</li>
        <li>Orthographic References</li>
        <li>Sculpting</li>
      </ul>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">Basics of Blender 3D</h3>
        <ul className="mt-4 space-y-3">
          <li className="flex justify-between">
            <span>Absolute Basics</span>
            <span className="text-sm text-gray-400">100%</span>
          </li>
          <li className="flex justify-between">
            <span>Object Editing</span>
            <span className="text-sm text-gray-400">72%</span>
          </li>
          <li className="flex justify-between">
            <span>Modifiers</span>
            <span className="text-sm text-gray-400">16%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
