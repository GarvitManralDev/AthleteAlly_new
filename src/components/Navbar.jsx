import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center w-[95%] mt-4 mx-auto bg-black text-white rounded-xl text-xl h-12 px-6">
      {/* Logo */}
      <div className="text-3xl font-bold">AthleteAlly</div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <div>About</div>
        <div>Home</div>
        <div>Services</div>
        <div>Events</div>
      </div>

      {/* Search Box */}
      <div>
        <input
          type="text"
          className="bg-white text-black px-2 py-1 rounded-md"
          placeholder="Search..."
        />
      </div>
    </nav>
  );
}

export default Navbar;
