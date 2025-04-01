export default function Contact() {
  const contacts = [
  {icon:"📧",value:"sameer_godse_comp@moderncoe.edu.in"},
  {icon:"🇮 🇳",value:"https://www.linkedin.com/in/sameer-godse-18523a222/"},
  ];
  return (
    <div>
      <h3 className="text-lg font-bold">Contact Me</h3>
      You can reach me at 
      {contacts.map((contact,index)=>(
      <p key={index}>{contact.icon} : {contact.value}</p>

      ))}
    </div>
  );
}
