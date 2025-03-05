"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, User, ShoppingBag, MapPin, Heart, LogOut, Settings } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "@/components/ui/separator";
import useAuth from "@/hooks/useAuth";
import { useAuthModal } from "@/stores/useAuthModal";
import {cn} from "@/lib/utils";

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();
    const { open: openAuthModal } = useAuthModal();

    // Get user initials for avatar
    const getInitials = () => {
        if (!user) return 'G'; // Guest

        const firstName = user.first_name || '';
        const lastName = user.last_name || '';

        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    const handleLogout = () => {
        logout();
        setOpen(false);
    };

    const handleLogin = () => {
        setOpen(false);
        openAuthModal();
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="w-10 px-0 sm:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
                <SheetHeader className="text-left pb-4">
                    {isAuthenticated && user ? (
                        <div className="flex items-center space-x-3">
                            <Avatar className="h-10 w-10 border border-gray-200 dark:border-gray-700">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback className="bg-primary text-primary-foreground">
                                    {getInitials()}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <SheetTitle className="text-lg font-semibold">{user.name}</SheetTitle>
                                <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                        </div>
                    ) : (
                        <SheetTitle>Menu</SheetTitle>
                    )}
                </SheetHeader>

                <Separator className="my-4" />

                <div className="flex-1 overflow-auto">
                    <nav className="flex flex-col gap-4">
                        {!isAuthenticated ? (
                            <Button
                                variant="default"
                                className="w-full justify-start"
                                onClick={handleLogin}
                            >
                                <User className="mr-2 h-4 w-4" />
                                Sign In / Register
                            </Button>
                        ) : (
                            <>
                                <MobileLink
                                    onOpenChange={setOpen}
                                    href="/profile"
                                    icon={<User className="mr-2 h-5 w-5" />}
                                >
                                    My Profile
                                </MobileLink>
                                <MobileLink
                                    onOpenChange={setOpen}
                                    href="/orders"
                                    icon={<ShoppingBag className="mr-2 h-5 w-5" />}
                                >
                                    My Orders
                                </MobileLink>
                                <MobileLink
                                    onOpenChange={setOpen}
                                    href="/saved-locations"
                                    icon={<MapPin className="mr-2 h-5 w-5" />}
                                >
                                    Saved Locations
                                </MobileLink>
                                <MobileLink
                                    onOpenChange={setOpen}
                                    href="/favorites"
                                    icon={<Heart className="mr-2 h-5 w-5" />}
                                >
                                    Favorites
                                </MobileLink>
                                <MobileLink
                                    onOpenChange={setOpen}
                                    href="/settings"
                                    icon={<Settings className="mr-2 h-5 w-5" />}
                                >
                                    Settings
                                </MobileLink>
                            </>
                        )}

                        <Separator className="my-2" />

                        <MobileLink onOpenChange={setOpen} href="/about">
                            About Us
                        </MobileLink>
                        <MobileLink onOpenChange={setOpen} href="/help">
                            Help & Support
                        </MobileLink>
                        <MobileLink onOpenChange={setOpen} href="/terms">
                            Terms & Conditions
                        </MobileLink>
                        <MobileLink onOpenChange={setOpen} href="/privacy">
                            Privacy Policy
                        </MobileLink>

                        {isAuthenticated && (
                            <>
                                <Separator className="my-2" />
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                                    onClick={handleLogout}
                                >
                                    <LogOut className="mr-2 h-5 w-5" />
                                    Logout
                                </Button>
                            </>
                        )}
                    </nav>
                </div>

                <div className="pt-6 text-center">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} {siteConfig.name}
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps extends LinkProps {
    children: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    className?: string;
    icon?: React.ReactNode;
}

function MobileLink({
                        href,
                        onOpenChange,
                        children,
                        className,
                        icon,
                        ...props
                    }: MobileLinkProps) {
    const router = useRouter();
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn(
                "flex items-center py-2 text-base text-foreground dark:text-white hover:text-primary transition-colors",
                className
            )}
            {...props}
        >
            {icon}
            {children}
        </Link>
    );
}
