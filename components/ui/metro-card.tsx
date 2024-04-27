import React, {ReactNode} from "react";
import { Meteors } from "./meteors";
import Image from "next/image";

interface MeteorsDemoProps {
    title: string;
    description?: string;
    metros : number,
    image? : string,
    read_more? : string,
    children?: ReactNode;
}
const MeteorsCard: React.FC<MeteorsDemoProps> = ({ title, read_more, image, description, children, metros }) => {
    return (
        <div className="">
            <div className=" w-full relative max-w-xs-">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r  from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                <div className="relative shadow-xl dark:bg-gray-900 bg-[#F4F8FB] border dark:border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                    { image ? (
                        <div className=" rounded-full flex items-center justify-center mb-4">
                            <Image
                                src={image}
                                alt={title}
                                width={120}
                                height={120}
                                className="flex justify-self-center"
                            />
                        </div>
                    ) : null}

                    <h1 className="font-bold text-xl text-white_ mb-4 relative z-50">
                        { title }
                    </h1>

                    { description ? (
                        <p className="font-normal text-base text-center text-slate-500 mb-4 relative z-50">
                            { description }
                        </p>
                    ) : null}

                    { children ? (
                        <div className="font-normal text-base mb-4 relative z-50">
                            {children}
                        </div>
                    ) : null }

                    { read_more ? (
                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                        Read more
                    </button>
                    ) : null
                    }

                    {/* Meaty part - Meteor effect */}
                    { metros > 0 ? (
                        <Meteors number={metros} />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default MeteorsCard;
