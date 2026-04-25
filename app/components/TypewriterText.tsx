"use client";

import { useState, useEffect } from "react";

interface Props {
  words: string[];
  speed?: number;
  delay?: number;
}

export default function TypewriterText({ words, speed = 60, delay = 800 }: Props) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, 30); // 🔥 fast delete
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, speed); // 🔥 typing speed
    }

    // word complete
    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    }

    // word deleted
    else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, delay]);

  return (
    <span>
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}