'use client'

import React, { JSX, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ExtendedAppRouter, AuthSessionStatusProps, ValidationErrors }
    from '@/constants/types/auth'

const AuthSessionStatus = ({
                               status,
                               className,
                           }: AuthSessionStatusProps): JSX.Element | null => {
    if (!status) return null

    return (
        <Alert variant="default" className={className}>
            <AlertDescription>{status}</AlertDescription>
        </Alert>
    )
}

const LoginScreen = () => {
    const router = useRouter() as ExtendedAppRouter

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [status, setStatus] = useState<string | null>(null)

    const [errors, setErrors] = useState<ValidationErrors>({})

    useEffect(() => {
        const hasReset = typeof router.reset === 'string' && router.reset.length > 0;

        if (hasReset && Object.keys(errors).length === 0) {
            setStatus(atob(router.reset as string));
        } else {
            setStatus(null);
        }
    }, [router.reset, errors]);


    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        await login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        value={email}
                        className="mt-1"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                        required
                        autoFocus
                    />

                    {errors?.email && (
                        <p className="text-sm text-red-500 mt-2">
                            {errors.email[0]}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>

                    <Input
                        id="password"
                        type="password"
                        value={password}
                        className="mt-1"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />

                    {errors.password && (
                        <p className="text-sm text-red-500 mt-2">
                            {errors.password[0]}
                        </p>
                    )}
                </div>

                {/* Remember Me */}
                <div className="mt-4 flex items-center space-x-2">
                    <Checkbox
                        id="remember_me"
                        checked={shouldRemember}
                        onCheckedChange={(checked: boolean | 'indeterminate') =>
                            setShouldRemember(checked as boolean)
                        }
                    />
                    <Label
                        htmlFor="remember_me"
                        className="text-sm text-gray-600"
                    >
                        Remember me
                    </Label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href="/forgot-password"
                        className="text-sm text-gray-600 hover:text-gray-900 underline"
                    >
                        Forgot your password?
                    </Link>

                    <Button type="submit" className="ml-3">
                        Login
                    </Button>
                </div>
            </form>
        </>
    )
}

export default LoginScreen
