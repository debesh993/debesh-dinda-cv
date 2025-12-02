import React from "react";

const Achievements = () => {
  return (
    <section className="w-full bg-white py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Achievements
        </h2>

        <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2">
          <li>Secured highest marks in 10th Standard at Gobardhanpur Pramathanath Vidyayatan (2018)</li>
          <li>Completed Full-Stack Development Course including React, Node.js, MongoDB, and SQL</li>
          <li>Implemented Data Ingestion using NPCYF during Data Science Internship at IDEAS (ISI Kolkata)</li>
          <li>Built multiple professional projects showcasing React, Node.js, Express,Mongodb skills</li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
