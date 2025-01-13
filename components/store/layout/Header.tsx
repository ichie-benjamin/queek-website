import { Search, MapPin, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <img src="/logo.svg" alt="Logo" className="h-8" />
                        <Button variant="outline" className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>Select Location</span>
                            <ChevronDown className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                className="pl-10"
                                placeholder="Search restaurants and foods"
                            />
                        </div>
                        <Button>Login</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
