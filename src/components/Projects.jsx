
const Projects = () => {
  return (
    <section className="w-full bg-gray-50 py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Projects
        </h2>

        <div className="space-y-6 text-gray-700 text-base md:text-lg">
          <div>
            <h3 className="font-semibold text-gray-800">
              Employee Management System (May 2024 – oct 2024)
            </h3>
            <p className="mt-1">Tech Stack: React, Node.js, Express, MongoDB, REST APIs</p>
            <ul className="list-disc list-inside mt-2">
              <li>Built role-based dashboards (Admin/Employee), attendance, and salary modules.</li>
              <li>Implemented secure authentication and CRUD operations for employees.</li>
            </ul>
            <p className="mt-1">
              GitHub: <a href="https://github.com/debesh993/employee-management-system" target="_blank" className="text-blue-600 hover:underline">View Repository</a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              American Sign Language Detection System (Jan 2025 – Jun 2025)
            </h3>
            <p className="mt-1">Tech Stack: OpenCV, MediaPipe, Tkinter, Python</p>
            <ul className="list-disc list-inside mt-2">
              <li>Real-time ASL recognition using webcam input with a trained model.</li>
              <li>Implemented live prediction & sentence formation pipeline for hands-on use.</li>
            </ul>
            <p className="mt-1">
              GitHub: <a href="https://github.com/debesh993/sign-language-detection-system" target="_blank" className="text-blue-600 hover:underline">View Repository</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
