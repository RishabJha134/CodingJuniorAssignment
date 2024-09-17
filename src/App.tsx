import React from 'react';
import Sidebar from './CourseSidebar';
import MainContent from './CourseContent';
import RightSidebar from './CourseRightSidebar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
};

export default App;
