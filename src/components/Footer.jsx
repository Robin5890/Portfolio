import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer id='contact' className="bg-gray-900 dark:bg-gray-800 text-gray-300 dark:text-gray-400 py-8 px-4 text-center">
      <p className="mb-4 text-gray-300 dark:text-gray-400">
        Got a project or just want to say hi? Reach out to me!
      </p>
      <div className="flex justify-center space-x-6 mb-4 text-2xl text-gray-300 dark:text-gray-400">
        <a
          href="mailto:robinchalhoub@hotmail.com"
          aria-label="Send Email"
          className="hover:text-white dark:hover:text-white transition-colors"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Robin5890"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-white dark:hover:text-white transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/robin-chalhoub-625969320/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="hover:text-white dark:hover:text-white transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Robin Chalhoub.
      </p>
    </footer>
  );
}

export default Footer;
