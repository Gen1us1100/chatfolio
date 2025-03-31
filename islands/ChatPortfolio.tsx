//import { useState } from "preact/hooks";
//import { Button } from "../components/Button.tsx";
//import { AnimatedMessage } from "../components/AnimatedMessage.tsx";
//
//const SECTIONS = {
//  whoami: "Hey! I'm a developer passionate about AI/ML, building cool stuff!",
//  education: "I have a formal education in Computer Science, with a focus on AI and Systems Design.",
//  projects: (
//    <div>
//      <p>Here are some projects:</p>
//      <ul className="list-disc pl-5">
//        <li><a href="#" className="text-blue-500">Project A</a></li>
//        <li><a href="#" className="text-blue-500">Project B</a></li>
//      </ul>
//    </div>
//  ),
//  contact: "You can reach me at myemail@example.com or on LinkedIn!",
//  misc: "Fun fact: I love vibecoding with Neovim!"
//};
//
//export default function ChatPortfolio() {
//  const [messages, setMessages] = useState([]);
//
//  const handleClick = (key) => {
//    setMessages((prev) => [...prev, { key, content: SECTIONS[key] }]);
//  };
//
//  return (
//    <div className="p-5 max-w-lg mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
//      <div className="space-y-3">
//        {messages.map((msg, index) => (
//          <AnimatedMessage key={index}>{msg.content}</AnimatedMessage>
//        ))}
//      </div>
//      <div className="mt-4 flex flex-wrap gap-2">
//        {Object.keys(SECTIONS).map((key) => (
//          <Button key={key} onClick={() => handleClick(key)}>
//            {key.charAt(0).toUpperCase() + key.slice(1)}
//          </Button>
//        ))}
//      </div>
//    </div>
//  );
//}

//import { useState } from "preact/hooks";
//import { Button } from "../components/Button.tsx";
//import { AnimatedMessage } from "../components/AnimatedMessage.tsx";
//
//const SECTIONS = {
//  whoami: "Hey! I'm a developer passionate about AI/ML, building cool stuff!",
//  education: "I have a formal education in Computer Science, with a focus on AI and Systems Design.",
//  projects: (
//    <div>
//      <p>Here are some projects:</p>
//      <ul className="list-disc pl-5">
//        <li><a href="#" className="text-blue-500">Project A</a></li>
//        <li><a href="#" className="text-blue-500">Project B</a></li>
//      </ul>
//    </div>
//  ),
//  contact: "You can reach me at myemail@example.com or on LinkedIn!",
//  misc: "Fun fact: I love vibecoding with Neovim!"
//};
//
//export default function ChatPortfolio() {
//  const [messages, setMessages] = useState([]);
//  const [availableSections, setAvailableSections] = useState(Object.keys(SECTIONS));
//  const [conversationEnded, setConversationEnded] = useState(false);
//
//  const handleClick = (key) => {
//    setMessages((prev) => [...prev, { key, content: SECTIONS[key] }]);
//    setAvailableSections((prev) => prev.filter((item) => item !== key));
//
//    if (availableSections.length === 1) {
//      setTimeout(() => {
//        setMessages((prev) => [
//          ...prev,
//          { key: "end", content: "It was nice connecting, want to try again?" }
//        ]);
//        setConversationEnded(true);
//      }, 500);
//    }
//  };
//
//  const handleReset = () => {
//    setMessages([]);
//    setAvailableSections(Object.keys(SECTIONS));
//    setConversationEnded(false);
//  };
//
//  return (
//    <div className="p-5 max-w-lg mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
//      <div className="space-y-3">
//        {messages.map((msg, index) => (
//          <AnimatedMessage key={index}>{msg.content}</AnimatedMessage>
//        ))}
//      </div>
//      <div className="mt-4 flex flex-wrap gap-2">
//        {!conversationEnded && availableSections.map((key) => (
//          <Button key={key} onClick={() => handleClick(key)}>
//            {key.charAt(0).toUpperCase() + key.slice(1)}
//          </Button>
//        ))}
//        {conversationEnded && (
//          <Button onClick={handleReset} className="bg-blue-500">
//            Restart Conversation
//          </Button>
//        )}
//      </div>
//    </div>
//  );
//}
//
//import { useState } from "preact/hooks";
//import { Button } from "../components/Button.tsx";
//import { AnimatedMessage } from "../components/AnimatedMessage.tsx";
//import Introduction from "../components/Introduction.tsx";
//import Education from "../components/Education.tsx";
//import Projects from "../components/Projects.tsx";
//import Contact from "../components/Contact.tsx";
//import Misc from "../components/Misc.tsx";
//
//const SECTIONS = {
//  whoami: <Introduction />,
//  education: <Education />,
//  projects: <Projects />,
//  contact: <Contact />,
//  misc: <Misc />
//};
//
//export default function ChatPortfolio() {
//  const [messages, setMessages] = useState([]);
//  const [availableSections, setAvailableSections] = useState(Object.keys(SECTIONS));
//  const [conversationEnded, setConversationEnded] = useState(false);
//
//  const handleClick = (key) => {
//    setMessages((prev) => [...prev, { key, content: SECTIONS[key] }]);
//    setAvailableSections((prev) => prev.filter((item) => item !== key));
//
//    if (availableSections.length === 1) {
//      setTimeout(() => {
//        setMessages((prev) => [
//          ...prev,
//          { key: "end", content: "It was nice connecting, want to try again?" }
//        ]);
//        setConversationEnded(true);
//      }, 500);
//    }
//  };
//
//  const handleReset = () => {
//    setMessages([]);
//    setAvailableSections(Object.keys(SECTIONS));
//    setConversationEnded(false);
//  };
//
//  return (
//    <div className="p-5 max-w-2xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3">
//      <div className="space-y-3">
//        {messages.map((msg, index) => (
//          <AnimatedMessage key={index}>{msg.content}</AnimatedMessage>
//        ))}
//      </div>
//      <div className="mt-4 flex flex-wrap gap-2">
//        {!conversationEnded && availableSections.map((key) => (
//          <Button key={key} onClick={() => handleClick(key)}>
//            {key.charAt(0).toUpperCase() + key.slice(1)}
//          </Button>
//        ))}
//        {conversationEnded && (
//          <Button onClick={handleReset} className="bg-blue-500">
//            Restart Conversation
//          </Button>
//        )}
//      </div>
//    </div>
//  );
//}
//
//
import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { AnimatedMessage } from "../components/AnimatedMessage.tsx";
import Introduction from "../components/Introduction.tsx";
import Education from "../components/Education.tsx";
import Projects from "../components/Projects.tsx";
import Contact from "../components/Contact.tsx";
import Misc from "../components/Misc.tsx";

const SECTIONS = {
  whoami: {
    userMessage: "Hi, Who are you?",
    response: <Introduction />
  },
  education: {
    userMessage: "Tell me about your education!",
    response: <Education />
  },
  projects: {
    userMessage: "What projects have you worked on?",
    response: <Projects />
  },
  contact: {
    userMessage: "How can I contact you?",
    response: <Contact />
  },
  misc: {
    userMessage: "Tell me something fun about you!",
    response: <Misc />
  }
};

export default function ChatPortfolio() {
  const [messages, setMessages] = useState([
    { key: "intro", content: "Hey there! I can see you've landed here to get to know me. I'm excited, let's get started!" }
  ]);
  const [availableSections, setAvailableSections] = useState(Object.keys(SECTIONS));
  const [conversationEnded, setConversationEnded] = useState(false);

  const handleClick = (key) => {
    setMessages((prev) => [
      ...prev,
      { key: `user-${key}`, content: SECTIONS[key].userMessage, user: true },
      { key, content: SECTIONS[key].response }
    ]);
    setAvailableSections((prev) => prev.filter((item) => item !== key));

    if (availableSections.length === 1) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { key: "end", content: "It was nice connecting, want to try again?" }
        ]);
        setConversationEnded(true);
      }, 500);
    }
  };

  const handleReset = () => {
    setMessages([
      { key: "intro", content: "Hey there! I can see you've landed here to get to know me. I'm excited, let's get started!" }
    ]);
    setAvailableSections(Object.keys(SECTIONS));
    setConversationEnded(false);
  };

  return (
    <div className="p-5 max-w-2xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 border border-gray-600">
      <div className="space-y-3">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.user ? "justify-end" : "justify-start"}`}>
            <AnimatedMessage>
              <div className={`p-3 rounded-lg ${msg.user ? "bg-blue-500 text-white" : "bg-gray-700"}`}>
                {msg.content}
              </div>
            </AnimatedMessage>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2 justify-end">
        {!conversationEnded && availableSections.map((key) => (
          <Button key={key} onClick={() => handleClick(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Button>
        ))}
        {conversationEnded && (
          <Button onClick={handleReset} className="bg-blue-500">
            Restart Conversation
          </Button>
        )}
      </div>
    </div>
  );
}
