import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-32 bg-gray-900 flex items-center">
      <div className="container mx-auto">
        <nav className="sm:flex md:flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="./images/reactMovie_logo.png"
                className="md:block"
                width={300}
                alt="rmdb-logo"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <img
              src="./images/tmdb_logo.png"
              className="md:block"
              alt="tmdb-logo"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
