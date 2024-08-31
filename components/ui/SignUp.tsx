"use client";
import React, {useState} from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import {useAuth} from "@/hooks/auth";
// import SelectInput from "@/components/ui/SelectInput";


const vehicles = [
    { id: '1', name: 'Scooter', imageSrc: '/images/scooter.png' },
    { id: '2', name: 'Bicycle', imageSrc: '/images/bicycle.png' },
    { id: '3', name: 'Walking', imageSrc: '/images/walking.png' },
];


export function SignupFormDemo() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };


    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const items = [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
        { id: '3', name: 'Item 3' },
    ];


    return (
        <div className="max-w-md mt-6 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                To get started
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Please fill out the form below
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname"
                               required
                               value={first_name}
                               onChange={event => setFirstName(event.target.value)}
                               placeholder="John" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname"
                               required
                               value={last_name}
                               onChange={event => setLastName(event.target.value)}
                               placeholder="Doe" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email"
                           required
                           value={email}
                           onChange={event => setEmail(event.target.value)}
                           placeholder="johndoe@app.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone"
                           required
                           value={phone}
                           onChange={event => setPhone(event.target.value)}
                           placeholder="08020300000" type="tel" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="area">Area</Label>
                {/*<SelectInput items={items} />*/}
                </LabelInputContainer>

                <div className="max-w-4xl mx-auto p-4">
                    <label className="block text-lg font-medium text-gray-700 mb-4">Vehicle*</label>
                    <div className="flex space-x-4">
                        {vehicles.map((vehicle) => (
                            <div
                                key={vehicle.id}
                                className={`p-4 border rounded-lg cursor-pointer ${
                                    selectedVehicle === vehicle.id ? 'border-green-500' : 'border-gray-300'
                                }`}
                            >
                                <img src={vehicle.imageSrc} alt={vehicle.name} className="w-20 h-20 mx-auto" />
                                <p className="text-center mt-2">{vehicle.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Sign up &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
