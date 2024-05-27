import { useState } from "react";

function useIntersectionObserver() {
  const [isLastElementIntersecting, setIsLastElementIntersecting] =
    useState<boolean>(false);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLastElementIntersecting(true);
        }
      });
    },
    {
      threshold: 1,
    }
  );
  return { observer, isLastElementIntersecting, setIsLastElementIntersecting };
}

export default useIntersectionObserver;
