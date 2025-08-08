function Navbar({ darkMode, setDarkMode }) {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Robin Chalhoub
        </a>

        {/* Desktop Navigation + Button */}
        <div className="md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              ml-4
              bg-gray-200 dark:bg-gray-700
              text-black dark:text-white
              px-4 py-1.5
              rounded-full
              shadow-sm
              hover:bg-gray-300 dark:hover:bg-gray-600
              transition
              duration-300
              ease-in-out
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              select-none
              text-sm
              font-medium
            "
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
