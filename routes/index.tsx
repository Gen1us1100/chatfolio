//import { useSignal } from "@preact/signals";
//import Counter from "../islands/Counter.tsx";
//
//export default function Home() {
//  const count = useSignal(3);
//  return (
//    <div class="px-4 py-8 mx-auto bg-[#86efac]">
//      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
//        <img
//          class="my-6"
//          src="/logo.svg"
//          width="128"
//          height="128"
//          alt="the Fresh logo: a sliced lemon dripping with juice"
//        />
//        <h1 class="text-4xl font-bold">Welcome to MyPortFolio</h1>
//        <p class="my-4">
//          Try updating this message in the
//          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
//        </p>
//        <Counter count={count} />
//      </div>
//    </div>
//  );
//}
//import { useState } from "preact/hooks";
////import { motion } from "preact/compat";
//import { Button } from "../components/Button.tsx";
//import { AnimatedMessage } from "../components/AnimatedMessage.tsx";
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
//          <motion.div
//            key={index}
//            initial={{ opacity: 0, y: 10 }}
//            animate={{ opacity: 1, y: 0 }}
//            transition={{ duration: 0.5 }}
//            className="bg-gray-800 p-3 rounded-lg"
//          >
//            {msg.content}
//          </motion.div>
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

import ChatPortfolio from "../islands/ChatPortfolio.tsx";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <ChatPortfolio />
    </div>
  );
}
