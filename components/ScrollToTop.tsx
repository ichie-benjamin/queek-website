'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button when user scrolls down 200px
            setShow(window.scrollY > 200);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={cn(
                'fixed bottom-6 right-20 p-2 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90',
                show ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0',
                'z-50'
            )}
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}
