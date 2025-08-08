import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'];
  const backendSkills = ['MySQL', 'MSSQL', 'PostgreSQL', 'PHP'];

  const renderSkills = (skills) => (
    <ul className="grid grid-cols-2 gap-3 mt-4">
      {skills.map((skill) => (
        <li
          key={skill}
          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 py-2 px-4 rounded text-center"
        >
          {skill}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id="skills"
      className="min-h-[60vh] bg-white dark:bg-gray-900 py-10 px-4 text-center"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Skills</h2>

      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('frontend')}
          className={`px-6 py-2 rounded-full border transition-colors ${
            activeTab === 'frontend'
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setActiveTab('backend')}
          className={`px-6 py-2 rounded-full border transition-colors ${
            activeTab === 'backend'
              ? 'bg-blue-600 text-white dark:bg-blue-500'
              : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
          }`}
        >
          Backend
        </button>
      </div>

      {/* Tab Content */}
      <div className="max-w-xl mx-auto">
        {activeTab === 'frontend'
          ? renderSkills(frontendSkills)
          : renderSkills(backendSkills)}
      </div>
    </section>
  );
};

export default Tabs;
