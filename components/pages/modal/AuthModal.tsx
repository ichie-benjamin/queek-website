import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from 'lucide-react';
import Link from 'next/link';
import { AxiosErrorResponse, postRequest, setAuthToken } from '@/lib/axios';
import { useAuthModal } from '@/stores/useAuthModal';
import useUserStore from '@/stores/userStore';
import { ValidationErrors } from '@/constants/types/auth';
import { cn, logFunction } from '@/lib/utils';
import { AxiosError } from "axios";
import {endpoints} from "@/constants/endpoints";

type AuthStep = 'phone' | 'verify' | 'signup';

export default function AuthModal() {
    const { isOpen, onSuccess, close } = useAuthModal();
    const setUser = useUserStore(state => state.setUser);

    const [step, setStep] = useState<AuthStep>('phone');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
    const [otpCode, setOtpCode] = useState(['', '', '', '']);
    const [countdown, setCountdown] = useState(0);
    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone: '',
    });
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    // Reset state when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            // Reset all state when modal closes
            setTimeout(() => {
                setStep('phone');
                setPhoneNumber('');
                setFormattedPhoneNumber('');
                setOtpCode(['', '', '', '']);
                setCountdown(0);
                setUserData({
                    first_name: '',
                    last_name: '',
                    username: '',
                    email: '',
                    phone: '',
                });
                setErrors({});
            }, 300); // Small delay to allow animation to finish
        }
    }, [isOpen]);

    // Format phone input with Nigerian format
    useEffect(() => {
        // Remove all non-numeric characters
        const numericValue = phoneNumber.replace(/\D/g, '');

        // Format the number
        if (numericValue.length <= 3) {
            setFormattedPhoneNumber(numericValue);
        } else if (numericValue.length <= 7) {
            setFormattedPhoneNumber(`${numericValue.slice(0, 3)}-${numericValue.slice(3)}`);
        } else {
            setFormattedPhoneNumber(
                `${numericValue.slice(0, 3)}-${numericValue.slice(3, 7)}-${numericValue.slice(7, 11)}`
            );
        }
    }, [phoneNumber]);

    // Countdown timer for OTP resend
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    // Handle OTP input change
    const handleOtpChange = (index: number, value: string) => {
        // Only allow digits
        if (!/^\d*$/.test(value)) return;

        const newOtpCode = [...otpCode];
        newOtpCode[index] = value;
        setOtpCode(newOtpCode);

        // Auto-focus next input
        if (value !== '' && index < 3) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    // Handle OTP input key down (for backspace)
    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && otpCode[index] === '' && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    // Handle phone number submission
    const handlePhoneSubmit = async () => {
        if (phoneNumber.replace(/\D/g, '').length < 10) {
            setErrors({ phone: ['Please enter a valid phone number'] });
            return;
        }

        setIsLoading(true);
        setErrors({});

        try {
            // Format phone for API - clean out all non-digits
            const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
            // Remove country code if present, or leading zero
            const formattedPhone = cleanPhoneNumber.replace(/^(234|0)/, '');

            const response = await postRequest(endpoints.auth.check_phone, {
                phone: formattedPhone,
                sms_type: 'SMS'
            });

            // Handle successful response
            if (response.status === 'success') {
                setUserData(prev => ({ ...prev, phone: formattedPhone }));
                setStep('verify');
                setCountdown(60); // Start 60-second countdown for OTP resend

                // Auto-fill OTP if provided by backend (for testing/development)
                if (response.data?.auto_verify_code) {
                    const code = String(response.data.auto_verify_code);
                    const codeArray = code.split('').concat(Array(4 - code.length).fill(''));
                    setOtpCode(codeArray.slice(0, 4));
                }
            }
        } catch (error: unknown) {
            const axiosError = error as {response?: {data?: AxiosErrorResponse}};

            if (axiosError.response?.data?.errors) {
                setErrors(axiosError.response.data.errors);
            } else {
                setErrors({ phone: ['An error occurred. Please try again.'] });
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Handle OTP verification
    const handleVerifyOtp = async () => {
        const fullOtp = otpCode.join('');

        if (fullOtp.length !== 4) {
            setErrors({ otp: ['Please enter the complete verification code'] });
            return;
        }

        setIsLoading(true);
        setErrors({});

        try {
            const response = await postRequest(endpoints.auth.verify_phone, {
                code: fullOtp,
                phone: userData.phone
            });

            if (response.status === 'success') {
                // Successfully verified
                if (response.data?.user_exists && response.data?.token) {
                    // User exists and token provided - store token
                    setAuthToken(response.data.token);

                    // Store user data in userStore
                    if (response.data.user) {
                        setUser(response.data.user);
                    }

                    // Notify success and close modal
                    onSuccess?.();
                    close();
                } else if (response.data?.user_exists === false) {
                    // User doesn't exist, move to signup
                    setStep('signup');
                } else {
                    // No token or unexpected response
                    setErrors({ otp: ['Authentication failed. Please try again.'] });
                }
            } else {
                setErrors({ otp: ['Verification failed. Please try again.'] });
            }
        } catch (error) {
            const axiosError = error as AxiosError<{
                errors?: Record<string, string[]>;
                message?: string;
            }>;

            if (axiosError.response?.data?.errors) {
                setErrors(axiosError.response.data.errors);
            } else if (axiosError.response?.data?.message) {
                setErrors({ otp: [axiosError.response.data.message] });
            } else {
                setErrors({ otp: ['Invalid verification code'] });
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Handle signup submission
    const handleSignup = async () => {
        setIsLoading(true);
        setErrors({});

        try {
            const response = await postRequest(endpoints.auth.register, {
                ...userData,
                phone: userData.phone
            });

            if (response.status === 'success' && response.data) {
                // Store the token
                if (response.data.token) {
                    setAuthToken(response.data.token);
                }

                // Store user data in userStore
                if (response.data.user) {
                    setUser(response.data.user);
                }

                // Notify success and close modal
                onSuccess?.();
                close();
            } else {
                setErrors({ form: ['Registration succeeded but user data was not received.'] });
            }
        } catch (error) {
            const axiosError = error as AxiosError<{
                errors?: Record<string, string[]>;
            }>;

            if (axiosError.response?.data?.errors) {
                setErrors(axiosError.response.data.errors);
            } else {
                setErrors({ form: ['An error occurred during signup. Please try again.'] });
            }
        } finally {
            setIsLoading(false);
        }
    };

    // Handle resend OTP
    const handleResendOtp = async () => {
        if (countdown > 0) return;

        setIsLoading(true);

        try {
            const response = await postRequest(endpoints.auth.check_phone, {
                phone: userData.phone,
                sms_type: 'SMS'
            });

            if (response.status === 'success') {
                setCountdown(60); // Restart countdown
                setOtpCode(['', '', '', '']); // Reset OTP input

                // Auto-fill OTP if provided by backend (for testing/development)
                if (response.data?.auto_verify_code) {
                    const code = String(response.data.auto_verify_code);
                    const codeArray = code.split('').concat(Array(4 - code.length).fill(''));
                    setOtpCode(codeArray.slice(0, 4));
                }
            }
        } catch (error) {
            logFunction('error', error);
            setErrors({ otp: ['Failed to resend verification code'] });
        } finally {
            setIsLoading(false);
        }
    };

    // Prevent modal from closing when clicking outside
    const handleOpenChange = (open: boolean) => {
        if (!open) {
            // Only allow close via the close button
            return;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogContent className={cn(
                "flex flex-col max-h-[90vh] max-w-md p-0 py-4 gap-0",
                "bg-white dark:bg-gray-900",
                "border border-gray-200 dark:border-gray-800",
                "rounded-xl shadow-[0_0_50px_0_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_0_rgba(0,0,0,0.3)]",
                "overflow-hidden"
            )}>
                {/* Close Button */}
                <div className="absolute right-4 top-4 z-10">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={close}
                        className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                {/* Content Container */}
                <div className="px-8 py-6">
                    {/* Phone Number Step */}
                    {step === 'phone' && (
                        <>
                            <DialogHeader>
                                <div className="text-center space-y-6 mb-8">
                                    <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                                        Welcome
                                    </DialogTitle>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Enter your phone number <br /> to get started
                                    </p>
                                </div>
                            </DialogHeader>

                            <div className="space-y-6 mb-6">
                                <div className="flex gap-2">
                                    {/* Country Code Select */}
                                    <div className="flex-none">
                                        <select
                                            className="h-12 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 shadow-sm"
                                        >
                                            <option>🇳🇬 +234</option>
                                        </select>
                                    </div>

                                    {/* Phone Input */}
                                    <div className="flex-1">
                                        <Input
                                            type="tel"
                                            placeholder="81-3093-3920"
                                            className="h-12 rounded-lg border border-gray-300 dark:border-gray-700 px-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 shadow-sm"
                                            value={formattedPhoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.phone[0]}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <Button
                                className="w-full h-12 text-base bg-green-700 hover:bg-green-800 text-white rounded-lg shadow-sm transition-all hover:shadow-md"
                                onClick={handlePhoneSubmit}
                                disabled={isLoading}
                            >
                                {isLoading ? "Processing..." : "Continue"}
                            </Button>

                            <div className="mt-12">
                                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                                    By creating an account, you automatically accept our
                                    <Link className="text-primary" target="_blank" href={'/terms'}> Terms of service</Link> &
                                    <Link className="text-primary" target="_blank" href={'/privacy'}> Privacy Policy</Link> and Cookies Policy
                                </p>
                            </div>
                        </>
                    )}

                    {/* OTP Verification Step */}
                    {step === 'verify' && (
                        <>
                            <DialogHeader>
                                <div className="text-center space-y-6 mb-8">
                                    <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                                        Verify Phone Number
                                    </DialogTitle>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We have sent a 4-digit code to <br />
                                        <span className="font-medium text-gray-700 dark:text-gray-300">+234 {userData.phone}</span>
                                    </p>
                                </div>
                            </DialogHeader>

                            <div className="space-y-6 mb-6">
                                <div className="flex justify-center gap-3">
                                    {[0, 1, 2, 3].map((index) => (
                                        <Input
                                            key={index}
                                            id={`otp-${index}`}
                                            type="text"
                                            maxLength={1}
                                            className="h-16 w-16 text-center text-2xl font-semibold rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 shadow-sm"
                                            value={otpCode[index]}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                        />
                                    ))}
                                </div>
                                {errors.otp && (
                                    <p className="text-red-500 text-sm text-center mt-2">{errors.otp[0]}</p>
                                )}

                                <div className="text-center">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Did not receive a code?{' '}
                                        <button
                                            type="button"
                                            onClick={handleResendOtp}
                                            disabled={countdown > 0 || isLoading}
                                            className={`font-medium transition-colors ${
                                                countdown > 0 ? 'text-gray-400 dark:text-gray-600' : 'text-primary hover:text-green-700 dark:hover:text-green-400'
                                            }`}
                                        >
                                            {countdown > 0 ? `Resend in ${countdown}s` : 'Resend code'}
                                        </button>
                                    </p>
                                </div>
                            </div>

                            <Button
                                className="w-full h-12 text-base bg-green-700 hover:bg-green-800 text-white rounded-lg shadow-sm transition-all hover:shadow-md"
                                onClick={handleVerifyOtp}
                                disabled={isLoading || otpCode.some(digit => digit === '')}
                            >
                                {isLoading ? "Verifying..." : "Verify & Continue"}
                            </Button>

                            <div className="mt-6 text-center">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setStep('phone');
                                        setErrors({});
                                    }}
                                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors hover:underline"
                                >
                                    Change phone number
                                </button>
                            </div>
                        </>
                    )}

                    {/* Signup Step */}
                    {step === 'signup' && (
                        <>
                            <DialogHeader>
                                <div className="text-center space-y-4 mb-6">
                                    <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                                        Create Account
                                    </DialogTitle>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Complete your profile to continue
                                    </p>
                                </div>
                            </DialogHeader>

                            <div className="space-y-4 mb-6">
                                {errors.form && (
                                    <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg text-sm shadow-sm">
                                        {errors.form[0]}
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <Label htmlFor="first_name" className="text-gray-700 dark:text-gray-300 font-medium">First Name</Label>
                                        <Input
                                            id="first_name"
                                            placeholder="First Name"
                                            className="mt-1 h-12 rounded-lg shadow-sm border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-600 focus:border-green-600"
                                            value={userData.first_name}
                                            onChange={(e) => setUserData({...userData, first_name: e.target.value})}
                                        />
                                        {errors.first_name && (
                                            <p className="text-red-500 text-xs mt-1">{errors.first_name[0]}</p>
                                        )}
                                    </div>
                                    <div>
                                        <Label htmlFor="last_name" className="text-gray-700 dark:text-gray-300 font-medium">Last Name</Label>
                                        <Input
                                            id="last_name"
                                            placeholder="Last Name"
                                            className="mt-1 h-12 rounded-lg shadow-sm border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-600 focus:border-green-600"
                                            value={userData.last_name}
                                            onChange={(e) => setUserData({...userData, last_name: e.target.value})}
                                        />
                                        {errors.last_name && (
                                            <p className="text-red-500 text-xs mt-1">{errors.last_name[0]}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="username" className="text-gray-700 dark:text-gray-300 font-medium">Username</Label>
                                    <Input
                                        id="username"
                                        placeholder="Username"
                                        className="mt-1 h-12 rounded-lg shadow-sm border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-600 focus:border-green-600"
                                        value={userData.username}
                                        onChange={(e) => setUserData({...userData, username: e.target.value})}
                                    />
                                    {errors.username && (
                                        <p className="text-red-500 text-xs mt-1">{errors.username[0]}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email Address"
                                        className="mt-1 h-12 rounded-lg shadow-sm border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-green-600 focus:border-green-600"
                                        value={userData.email}
                                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email[0]}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 font-medium">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        disabled
                                        value={`+234${userData.phone}`}
                                        className="mt-1 h-12 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700"
                                    />
                                </div>
                            </div>

                            <Button
                                className="w-full h-12 text-base bg-green-700 hover:bg-green-800 text-white rounded-lg shadow-sm transition-all hover:shadow-md"
                                onClick={handleSignup}
                                disabled={isLoading}
                            >
                                {isLoading ? "Creating Account..." : "Create Account"}
                            </Button>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}