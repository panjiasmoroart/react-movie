import React from "react";
import { Link } from "react-router-dom";

export default function Navigation({ movie }) {
  return (
    <div className="bg-gray-700 h-12 flex items-center">
      <div className="container mx-auto">
        <nav className="flex text-lg text-white">
          <Link className="pr-3" to="/">
            Home
          </Link>
          <p className="pr-3">/</p>
          <p className="pr-3">{movie}</p>
        </nav>
      </div>
    </div>
  );
}
