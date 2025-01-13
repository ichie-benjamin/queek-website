// components/auth/AuthModal.tsx
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useAuthModal } from '@/stores/useAuthModal'
import Link from "next/link";

export default function AuthModal() {
    const { isOpen, onSuccess, close } = useAuthModal()
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleSignIn = () => {
        // Handle sign in logic here
        // On success:
        onSuccess?.()
        close()
    }

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="flex flex-col max-h-[90vh] max-w-md p-0 py-4 gap-0 bg-white">
                {/* Close Button */}


                {/* Content Container */}
                <div className="px-8 py-6">
                    <DialogHeader>
                        <div className="text-center space-y-6 mb-8">
                            <DialogTitle className='text-2xl font-semibold text-gray-900'>
                                Welcome
                            </DialogTitle>
                            <p className="text-gray-500">
                                Enter your phone number <br/>   to get started
                            </p>

                        </div>
                    </DialogHeader>

                    {/* Phone Input */}
                    <div className="space-y-6 mb-6">

                        <div className="flex gap-2">
                            {/* Country Code Select */}
                            <div className="flex-none">
                                <select
                                    className="h-12 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                                >
                                    <option>🇳🇬 +234</option>
                                </select>
                            </div>

                            {/* Phone Input */}
                            <input
                                type="tel"
                                placeholder="81-3093-3920"
                                className="flex-1 h-12 rounded-md border border-gray-300 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <Button
                        className="w-full h-12 text-base bg-green-700 hover:bg-green-800"
                        onClick={handleSignIn}
                    >
                        Continue
                    </Button>



                    <div className="mt-12">
                        <p className="text-xs text-center">By creating an account, you automatically accept our
                            <Link className="text-primary" target="_blank" href={'/terms'}> Terms of service</Link> &
                            <Link className="text-primary" target="_blank"  href={'/privacy'}>Privacy Policy</Link> and Cookies Policy
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
