import { useState, useEffect } from 'react';

export const useIntersectionObserver = (
    targetId: string,
    options: IntersectionObserverInit = { threshold: 0.1 },
) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [element, setElement] = useState<Element | null>(null);

    useEffect(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setElement(targetElement);
        }
    }, [targetId]);

    useEffect(() => {
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(element);

        return () => {
            observer.unobserve(element);
            observer.disconnect();
        };
    }, [element, options.threshold, options.root, options.rootMargin]);

    return isIntersecting;
};
