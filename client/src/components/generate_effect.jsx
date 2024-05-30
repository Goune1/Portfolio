"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/cn";

 const TextGenerateEffect = ({ words, className = "" }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words ? words.split(" ") : [];

  useEffect(() => {
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }
  }, [scope.current, animate]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="text-white opacity-0"
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn(className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black">
          <h2>{renderWords()}</h2>
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect
