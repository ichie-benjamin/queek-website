import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Phone, Facebook, ChevronRight } from "lucide-react";

interface SocialLinkProps {
    href: string;
    icon: React.ElementType;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-blue-600 hover:bg-blue-50 transition-colors"
    >
        <Icon className="h-5 w-5" />
    </a>
);

interface MenuItemProps {
    href: string;
    text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, text }) => (
    <Link
        href={href}
        className="w-full px-4 bg-gray-100  py-4 flex justify-between items-center text-blue-600 hover:bg-green-500 transition-colors- rounded-2xl"
    >
        {text}
        <ChevronRight className="h-4 w-4" />
    </Link>
);

const Page: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <Card className="w-full max-w-md bg-white">
                <CardContent className="flex flex-col items-center pt-6">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-green-600 text-2xl font-bold">Q</span>
                    </div>

                    <h1 className="text-2xl font-bold text-blue-600 mb-2">QueekApp</h1>
                    <p className="text-center text-gray-600 mb-4">
                        Welcome to Queek😊 Your go-to solution for all your service needs.👏
                    </p>


                    <div className="flex space-x-4 mb-6">
                        <SocialLink href="https://www.instagram.com/queekng" icon={Instagram} />
                        <SocialLink href="tel:+2349014412477" icon={Phone} />
                        <SocialLink href="https://web.facebook.com/queekappservices" icon={Facebook} />
                    </div>

                    <div className="w-full space-y-2">
                        <MenuItem href="https://app.queek.com.ng/vendor-signup" text="Vendor Signup" />
                        <MenuItem href="#" text="Play Store" />
                        <MenuItem href="#" text="App Store" />
                        <MenuItem href="/" text="Website" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
