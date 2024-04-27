"use client"

import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import DownloadApp from "@/components/DownloadApp";
import WhyUs1 from "@/components/pages/WhyUs1";
import Services from "@/components/pages/Services";
import FAQ from "@/components/pages/FAQ";
export default async function DownloadPage(){
    return (
        <div className="w-full">
            <div className="bg-section-light">
                <section className="max-w-[500px]  md:max-w-6xl md:px-12 mt-20- mx-auto">
                    <div
                        className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                    >
                        <div
                            className="md:col-span-8 lg:col-span-6 order-1 w mx-auto px-5"
                        >
                            <div className="h-full sm:px-0 flex items-center">
                                <div>
                                    <h1 className="bold-26 sm:bold-52">Get Started <strong className="text-primary">With Queek!</strong></h1>

                                    <p className="text-base my-4 font-medium">
                                        Getting started with Queek is easy.
                                        Simply download the app from the App Store or Google Play Store,
                                        create an account, and you're ready to go.
                                        Join the Queek community today and experience the ultimate
                                        convenience of having everything you need right at your fingertips.
                                    </p>


                                    <DownloadApp />

                                </div>
                            </div>
                        </div>
                        <div
                            className="md:col-span-4 lg:col-span-6 w-full flex justify-end order-1 md:order-2"
                        >
                            <img src="/images/app_bg.png" className="w-full md:w-auto" alt="" />
                        </div>
                    </div>
                </section>
            </div>

            <Services />

            <WhyUs1 />


            <FAQ />

            <div className="h-[100px]"></div>
        </div>
    )
}

function LampDemo() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Build lamps <br /> the right way
            </motion.h1>
        </LampContainer>
    );
}
