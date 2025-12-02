import React from "react";

const Education = () => {
  return (
    <section className="w-full bg-gray-50 py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Education
        </h2>
        <div className="space-y-4 text-gray-700 text-base md:text-lg">
          {/* B.Tech */}
          <div>
            <h3 className="font-semibold text-gray-800">
              B.Tech in Information Technology
            </h3>
            <p>College of Engineering & Management, Kolaghat (2021–2025)</p>
            <p>CGPA: 8.18</p>
          </div>

          {/* 12th */}
          <div>
            <h3 className="font-semibold text-gray-800">
              12th — Gobardhanpur Pramathanath Vidyayatan (2018–2020)
            </h3>
            <p>Percentage: 84.20%</p>
          </div>

          {/* 10th */}
          <div>
            <h3 className="font-semibold text-gray-800">
              10th — Gobardhanpur Pramathanath Vidyayatan (2017–2018)
            </h3>
            <p>Percentage: 90.71%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
