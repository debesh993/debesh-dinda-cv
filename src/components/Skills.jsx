
const Skills = () => {
  return (
    <section className="w-full bg-white py-8 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-base md:text-lg">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Frontend</h3>
            <p>HTML, CSS, JavaScript, React.js, Responsive Design</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Backend</h3>
            <p>Node.js, Express.js, RESTful API Development</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Database</h3>
            <p>MongoDB, SQL</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Tools & Concepts</h3>
            <p>Git, GitHub, VS Code, OOPS (Java), DBMS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
