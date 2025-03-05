import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, LogOut, Settings, ShoppingBag, MapPin, Heart } from 'lucide-react';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import { useAuthModal } from '@/stores/useAuthModal';

const UserProfileDropdown = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const { open: openAuthModal } = useAuthModal();

    // Get user initials for avatar fallback
    const getInitials = () => {
        if (!user) return 'G'; // Guest

        const firstName = user.first_name || '';
        const lastName = user.last_name || '';

        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    // If user is not authenticated, show login button
    if (!isAuthenticated || !user) {
        return (
            <Button
                onClick={() => openAuthModal()}
                variant="outline"
                className="flex items-center gap-2 rounded-lg border-gray-300 dark:border-gray-700"
            >
                <User className="h-4 w-4" />
                <span>Login</span>
            </Button>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative rounded-full h-10 w-10 p-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    <Avatar className="h-10 w-10 border border-gray-200 dark:border-gray-700">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                            {getInitials()}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground truncate">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/orders" className="cursor-pointer flex items-center">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        <span>Orders</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/saved-locations" className="cursor-pointer flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>Saved Locations</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/favorites" className="cursor-pointer flex items-center">
                        <Heart className="mr-2 h-4 w-4" />
                        <span>Favorites</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={logout}
                    className="cursor-pointer text-destructive focus:text-destructive"
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserProfileDropdown;