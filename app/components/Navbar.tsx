import { Link, NavLink } from '@remix-run/react';

export function Navbar() {
  return (
    <div className="navbar bg-primary text-base-100 sticky z-[100]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent text-neutral rounded-box w-52"
          >
            <li>
              <Link to="home">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="generate">Generate</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">
          StartupMate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 bg-primary-variant">
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              About
            </NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink
              to="dashboard"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="create" className="btn btn-accent">
          Get started
        </Link>
      </div>
    </div>
  );
}
