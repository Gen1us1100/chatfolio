//export default function Education() {
//  return (
//    <div>
//      <h3 className="text-lg font-bold">Education</h3>
//      <p>Formal education in Computer Engineering, focused on AI & Systems Design.</p>
//      <div className="mt-2">
//        <ul className="list-disc pl-5">
//          <li>Machine Learning Certification - XYZ Institute</li>
//          <li>Cloud Computing Specialization - ABC University</li>
//        </ul>
//      </div>
//    </div>
//  );
//}
//
//
export default function Education() {
  const educationTimeline = [
    { year: "2021-2025", level: "Bachelor's in Computer Engineering", grade: "8.8 CGPA(till date)" },
    { year: "2020-2021", level: "HSC, Fergusson College Pune", grade: "87.17%" },
    { year: "2018-2019", level: "SSC, Narayanrao Sanas Vidyalaya", grade: "88.4%" }
  ];
  const certfications = [
    {name:"Machine Learning Specialization",link:"https://coursera.org/share/633b94a1ce6c292b033b64f2dfb21082"},
    {name:"Python for Data Science, AI & Development",link:" https://coursera.org/share/15c4a4d42c96a3bd1ea383a7b2697683"},
    {name:"Database Management Systems - NPTEL",link:"https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs79/Course/NPTEL23CS79S3505224110107469.pdf"}

  ];
  return (
    <div>
      <h3 className="text-lg font-bold">Education</h3>
      <div className="mt-2 space-y-4">
        {educationTimeline.map((edu, index) => (
          <div key={index} className="relative pl-5 border-l-2 border-gray-500">
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-300">{edu.year}</p>
              <p className="text-md font-bold">{edu.level}</p>
              <p className="text-sm text-gray-400">Grade: {edu.grade}</p>
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-md font-bold mt-4">Certifications</h4>
      <ul className="list-disc pl-5 mt-2">
      {certfications.map((certification,index)=>(
      <li key={index}><a href={certification.link} target="blank" className="text-blue-500">{certification.name}</a></li>
        ))}
      </ul>
    </div>
  );
}
