import { useEffect, useRef, useState, RefObject } from 'react';

type SectionRevealOptions = {
  /** First section above the fold — skip hidden initial state */
  immediate?: boolean;
  /** Start loading lazy content before it enters the viewport */
  loadRootMargin?: string;
  threshold?: number;
};

type SectionRevealState = {
  shouldMount: boolean;
  isVisible: boolean;
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const useSectionReveal = (
  options: SectionRevealOptions = {}
): [RefObject<HTMLDivElement>, SectionRevealState] => {
  const { immediate = false, loadRootMargin = '320px 0px', threshold = 0.08 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(immediate || prefersReducedMotion());
  const [isVisible, setIsVisible] = useState(immediate || prefersReducedMotion());

  useEffect(() => {
    if (immediate || prefersReducedMotion()) {
      setShouldMount(true);
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const loadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: loadRootMargin, threshold: 0 }
    );

    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          revealObserver.disconnect();
        }
      },
      { rootMargin: '0px', threshold }
    );

    loadObserver.observe(node);
    revealObserver.observe(node);

    return () => {
      loadObserver.disconnect();
      revealObserver.disconnect();
    };
  }, [immediate, loadRootMargin, threshold]);

  return [ref, { shouldMount, isVisible }];
};

export default useSectionReveal;
