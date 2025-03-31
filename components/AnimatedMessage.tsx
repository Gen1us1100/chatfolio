import { animate } from "@motionone/dom";
import { useEffect, useRef } from "preact/hooks";

export function AnimatedMessage({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      animate(ref.current, { opacity: [0, 1], y: [10, 0] }, { duration: 0.5 });
    }
  }, []);

  return <div ref={ref} className="bg-gray-800 p-3 rounded-lg">{children}</div>;
}
