import { Link } from '@remix-run/react';

export default function Navbar() {
  return (
    <div className="navbar bg-primary  sticky z-[100]">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold">
          StartupMate
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="create" className="btn btn-accent">
          Get started
        </Link>
      </div>
    </div>
  );
}
