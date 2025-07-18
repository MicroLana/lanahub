import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-green-600">Lanahub</h1>
      <div>
        <button className="px-4 py-2 mr-2 border border-green-600 rounded hover:bg-green-600 hover:text-white">
          Login
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
