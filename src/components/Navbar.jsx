import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-200 px-3 py-0">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
          <FaGithub className="mr-2 normal-case text-xl" />
          Github Finder
        </Link>
      </div>

      <div className="flex-none px-2 mx-2">
        <div className="flex justify-end">
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
          <a
            className="btn btn-ghost btn-sm rounded-btn"
            href="https://github.com/hamzaaitbenyissa/github-finder"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source <FaGithub className="ml-2 normal-case text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
