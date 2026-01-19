import { useRef, useEffect } from 'react';

/**
 * Hook to enable horizontal scrolling with mouse wheel
 * Usage: const scrollRef = useHorizontalScroll(); <div ref={scrollRef} ... />
 */
export function useHorizontalScroll() {
    const elRef = useRef();

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e) => {
                if (e.deltaY === 0) return;
                // Prevent default vertical scroll
                e.preventDefault();
                // Scroll horizontally instead
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: 'smooth'
                });
            };
            el.addEventListener('wheel', onWheel);
            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);

    return elRef;
}
