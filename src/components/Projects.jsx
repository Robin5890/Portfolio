import React from 'react'


const projects = [
  {
    name: "Movies Explorer App",
    description: "Built a responsive web application to search and explore movies, view details, and manage favorites using data from the OMDb API. Implemented component-based architecture with React, styled with Tailwind, and used React Router for navigation.",
    tech: ["React", "Tailwind CSS", "React Router", "REST API"]
  },
  {
    name: "Food Delivery App",
    description: "Created a full-stack food delivery platform simulating a real-world restaurant ordering system, with role-based access for users, restaurants, and admins. Frontend built with JavaScript,backend powered by PHP and MySQL, featuring a responsive and intuitive interface for seamless ordering.",
    tech: ["Javascript", "PHP", "PHPMyAdmin"] 
  },
  {
    name: "Federated DBMS for Unified Querying",
    description: "Integrated MySQL and MSSQL databases under a single PostgreSQL mediator using Foreign Data Wrappers(FDW). Enabled seamless querying across distributed sources with a global schema.",
    tech: ["MySQL", "MSSQL", "PostgreSQL"]
  },
  {
    name: "Library Management System",
    description: "JavaFX desktop app for managing books, users, and lending operations.",
    tech: ["Java", "JavaFX", "MySQL"],
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Projects
      </h2>

      <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ name, description, tech }) => (
          <div
            key={name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">{description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
