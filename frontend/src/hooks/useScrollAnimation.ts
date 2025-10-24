import { useRef, useEffect, useState, RefObject } from 'react';

const useScrollAnimation = (threshold = 0.1, rootMargin = '0px'): [RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (node) {
            observer.unobserve(node);
          }
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [threshold, rootMargin, ref]);

  return [ref, isVisible];
};

export default useScrollAnimation;
