export default function Projects() {
  const projects = [
    { name: "Project A", link: "#" },
    { name: "Project B", link: "#" },
  ];

  return (
    <div>
      <h3 className="text-lg font-bold">Projects</h3>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-3 rounded-lg">
            <a href={project.link} className="text-blue-500">{project.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
