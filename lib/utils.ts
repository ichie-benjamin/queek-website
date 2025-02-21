import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const isDev = process.env.NODE_ENV === 'development'


export const logFunction = (tag: string, message: unknown) => {
    if (isDev) {
        console.log(tag, JSON.stringify(message, null, 2));
    }
};

export const getServiceName = (slug: string): string => {
    // Handle empty or invalid inputs
    if (!slug) {
        return '';
    }

    // Replace hyphens with spaces and split into words
    const words = slug.split('-');

    // Capitalize each word and handle special cases
    const formattedWords = words.map(word => {
        // Handle empty words that might result from multiple hyphens
        if (!word) return '';

        // Capitalize the first letter and make the rest lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the words back together with spaces
    return formattedWords.filter(word => word).join(' ');
};
