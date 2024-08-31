'use client'

import {useState} from "react";

import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import {useAuth} from "@/hooks/auth";
import Link from "next/link";
import BasicButton from "@/components/BasicButton";

const SignUpForm = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])


}

export default SignUpForm
