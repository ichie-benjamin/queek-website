import { AxiosError } from 'axios'
import {Router} from "lucide-react";
import {Dispatch, SetStateAction} from "react";


export interface ValidationErrors {
    [key: string]: string[]
}

export interface RegisterProps {
    name: string
    email: string
    password: string
    password_confirmation: string
    setErrors: (errors: ValidationErrors | []) => void
}

export interface LoginProps {
    email: string
    password: string
    remember?: boolean
    // setErrors: (errors: ValidationErrors | []) => void
    // setStatus: (status: string | null) => void
    setErrors: Dispatch<SetStateAction<ValidationErrors>>  // Updated
    setStatus: Dispatch<SetStateAction<string | null>>

}

export interface ForgotPasswordProps {
    email: string
    setErrors: (errors: ValidationErrors | []) => void
    setStatus: (status: string | null) => void
}

export interface ResetPasswordProps {
    email: string
    password: string
    password_confirmation: string
    setErrors: (errors: ValidationErrors | []) => void
    setStatus: (status: string | null) => void
}

export interface User {
    id: number
    name: string
    email: string
    email_verified_at: string | null
}

export interface UseAuthProps {
    middleware?: 'auth' | 'guest'
    redirectIfAuthenticated?: string
}


export interface EmailVerificationProps {
    setStatus: (status: string) => void
}

export type ApiError = AxiosError<{
    errors: Record<string, string[]>
    status: string
}>



export interface ExtendedAppRouter extends Router {
    reset?: string
}

export interface AuthSessionStatusProps {
    status: string | null
    className?: string
}

export interface LoginFormState {
    email: string
    password: string
    shouldRemember: boolean
    errors: ValidationErrors
    status: string | null
}
