import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen p-6 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <img src="" alt="NMDPRA DocStream" className="w-10 h-10" />
          <h1 className="text-lg font-bold text-green-900 leading-tight">
            NMDPRA <br /> DocStream
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/find-company"
            className={({ isActive }) =>
              `block text-center py-2.5 rounded-md font-medium border transition-all duration-200 ${
                isActive
                  ? "bg-green-700 text-white border-green-700"
                  : "text-green-900 border-green-700 hover:bg-green-50"
              }`
            }
          >
            Find Company Details
          </NavLink>

          <NavLink
            to="/request-vehicle"
            className={({ isActive }) =>
              `block text-center py-2.5 rounded-md font-medium border transition-all duration-200 ${
                isActive
                  ? "bg-green-700 text-white border-green-700"
                  : "text-green-900 border-green-700 hover:bg-green-50"
              }`
            }
          >
            Request Vehicle
          </NavLink>

          <NavLink
            to="/inventory-form"
            className={({ isActive }) =>
              `block text-center py-2.5 rounded-md font-medium border transition-all duration-200 ${
                isActive
                  ? "bg-green-700 text-white border-green-700"
                  : "text-green-900 border-green-700 hover:bg-green-50"
              }`
            }
          >
            Inventory/Checklist Form
          </NavLink>

          <NavLink
            to="/request-items"
            className={({ isActive }) =>
              `block text-center py-2.5 rounded-md font-medium border transition-all duration-200 ${
                isActive
                  ? "bg-green-700 text-white border-green-700"
                  : "text-green-900 border-green-700 hover:bg-green-50"
              }`
            }
          >
            Request Items
          </NavLink>
        </nav>
      </div>

      <footer className="text-xs text-gray-500 text-center mt-8">
        © 2025 NMDPRA DocStream
      </footer>
    </aside>
  );
};

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800">Staff Dashboard</h2>

      <div className="flex items-center gap-6">
        {/* Active toggle */}
        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium text-sm">
          <span className="w-2.5 h-2.5 bg-green-700 rounded-full"></span>
          Active
        </div>

        {/* Notification */}
        <div className="relative">
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            6
          </span>
          <i className="fa-regular fa-bell text-gray-600 text-lg"></i>
        </div>

        {/* Profile */}
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
          <i className="fa-regular fa-user text-gray-700 text-lg"></i>
        </div>
      </div>
    </header>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
