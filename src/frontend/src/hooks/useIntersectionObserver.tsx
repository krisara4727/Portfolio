import React from "react";

function useIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // line.classList.add("animate-line");
      }
    });
  });

  observer;

  return { observer };
}

export default useIntersectionObserver;
