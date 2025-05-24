import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { LucideUser } from "lucide-react";
import { FiLogIn, FiMenu, FiLogOut } from "react-icons/fi";
import logo from "../../public/logo.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setIsMenuOpen(false);
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  const mainNavLinks = [
    { name: "All Jobs", to: "/jobs" },
    { name: "Add Jobs", to: "/add-jobs" },
  ];

  const allNavLinks = [
    <NavLink to="/jobs" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-700 hover:text-indigo-600"}>All Jobs</NavLink>,
    <NavLink to="/jobs/details/:id" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-700 hover:text-indigo-600"}>Job Details</NavLink>,
    <NavLink to="/add-jobs" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-700 hover:text-indigo-600"}>Add Jobs</NavLink>,
    <NavLink to="/application/apply/:id" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-700 hover:text-indigo-600"}>Application Page</NavLink>,
    <NavLink to="/application/me" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-700 hover:text-indigo-600"}>My Applications</NavLink>,
    <NavLink to="/my-jobs" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-700 hover:text-indigo-600"}>My Job Posts</NavLink>,
    <NavLink to="/my-jobs/:id" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-700 hover:text-indigo-600"}>Review Application</NavLink>,
    <NavLink to="/jobs/update/:id" className={({ isActive }) => isActive ? "text-indigo-600 font-semibold" : "text-gray-700 hover:text-indigo-600"}>Update Job</NavLink>,
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top line: main nav + auth (only on md and above) */}
        <div className="hidden md:flex justify-between items-center h-12 border-b border-gray-200">
          {/* Main nav */}
          <div className="flex space-x-6">
            {mainNavLinks.map(({ name, to }) => (
              <NavLink
                key={name}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-600"
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* Auth Controls */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2 text-gray-700">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <LucideUser className="w-6 h-6" />
                  )}
                  <span className="hidden sm:inline font-medium">
                    {user.displayName || user.email}
                  </span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline btn-sm flex items-center space-x-1"
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary btn-sm flex items-center space-x-1"
                >
                  <FiLogIn />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline btn-sm flex items-center space-x-1"
                >
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Bottom line: logo + company + menu */}
        <div className="flex justify-between items-center h-16 border-t border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Company Logo" className="w-36" />
            <span className="font-bold text-indigo-600 text-xl">
              Job Portal
            </span>
          </Link>

          {/* Desktop: full menu shown always */}
          <div className="hidden md:flex items-center space-x-6">
            {allNavLinks.map(({ name, to }) => (
              <NavLink
                key={name}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-600"
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* Mobile: hamburger menu */}
          <div className=" flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <FiMenu className="block h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className=" bg-white shadow-inner border-t border-gray-200">
            {allNavLinks.map(({ name, to }) => (
              <NavLink
                key={name}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 text-black"
              >
                {name}
              </NavLink>
            ))}
            <div className="border-t mt-2 pt-2 px-4">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline btn-block flex items-center justify-center space-x-2"
                >
                  <FiLogOut />
                  <span>Logout</span>
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn btn-primary btn-block flex items-center justify-center space-x-2"
                  >
                    <FiLogIn />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn btn-outline btn-block flex items-center justify-center space-x-2"
                  >
                    <span>Register</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
