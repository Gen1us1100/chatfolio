export default function Projects() {
  const projects = [
    { name: "VB6 to C# Transpiler", 
      description : "\nIt is a co-research project alongside with Bosch BGSW written using Golang. Developed a Modular Translation Engine that translates VB6 language constructs.",
      link: "https://github.com/Sohamsk/BGSW-Project" },
    { name: "Handwritten Letters recognization using ANN from scratch",
      description : "Built a Feed Forward network from scratch using PyTorch Tensors. Achieved a test accuracy of approximately 98% by designing a fully custom architecture.",
      link: "https://github.com/Gen1us1100/AIML/blob/master/NN_with_Pytorch.ipynb" }
  ];

  return (
    <div>
      <h3 className="text-lg font-bold">Projects</h3>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-3 rounded-lg">
            <h3><a href={project.link} target="blank"className="text-blue-500">{project.name}</a></h3>
            {project.description}

          </div>
        ))}
      <p>Check out more projects at: <a href="https://github.com/Gen1us1100" target="blank" className="text-blue-500">Github</a></p>
      </div>
    </div>
  );
}
