import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">

        {/* Left Section - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Debesh Dinda
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mt-1">
            Full Stack Developer (React / Node)
          </h2>

          <div className="mt-4 space-y-1 text-gray-700 text-sm md:text-base">
            <p><span className="font-semibold">Email:</span> debeshdinda993@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> +91 9679483993</p>
            <p><span className="font-semibold">Location:</span> Pingla, West Bengal, India</p>
          </div>

          {/* Links */}
          <div className="mt-4 flex flex-col md:flex-row items-center md:items-start gap-2">
            <a
              href="https://github.com/debesh993"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline text-sm md:text-base"
            >
              GitHub: github.com/debesh993
            </a>

            <a
              href="https://www.linkedin.com/in/debesh-dinda-50b347301"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline text-sm md:text-base md:ml-4"
            >
              LinkedIn: linkedin.com/in/debesh-dinda-50b347301
            </a>
          </div>
        </div>

        {/* Right Section - Photo */}
        <div className="flex-shrink-0">
          <img
            src="../../public/ddddddddddddddddddddddddddd111111.jpg"
            alt="Debesh Dinda"
            className="w-40 h-48 md:w-48 md:h-56 object-cover rounded-xl shadow-md border border-gray-300"
          />
        </div>

      </div>
    </header>
  );
};

export default Header;
