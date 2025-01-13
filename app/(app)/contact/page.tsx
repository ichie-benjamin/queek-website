"use client"


import React from "react";

import DownloadApp from "@/components/DownloadApp";
import WhyUs1 from "@/components/pages/WhyUs1";
import FAQ from "@/components/pages/FAQ";
import ContactInfo from "@/components/pages/ContactInfo";
export default async function ContactUsPage(){
    return (
        <div className="w-full ">

            <section className="
            dark:bg-background bg-section-light px-4 flex items-center flex-col gap-20 py-10 sm:pb-32 md:gap-28 lg:py-20 justify-center">

                <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                    <h1 className="bold-26 sm:bold-52">Contact Us: <strong className="text-primary">Get in Touch with Queek!</strong></h1>
                    <p className="regular-16 mt-6 text-gray-30_ xl:max-w-[520px]">
                        Whether you have a question, need assistance,
                        or just want to say hello, we&apos;re here to help! <br/>
                        At Queek, we are committed to providing exceptional customer service and ensuring that your experience with us is nothing short of excellent.
                        Here is how you can reach out to us:
                    </p>
                </div>

            </section>


            <ContactInfo />

            <section className="bg-section-light dark:bg-background px-4 py-2">
                <section className="max-w-[500px] md:max-w-6xl md:px-12 mt-20 mx-auto">
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
                                        create an account, and you&apos;re ready to go.
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
            </section>

            {/*<Services />*/}

            <WhyUs1 />


            <FAQ />

            <div className="h-[100px]"></div>
        </div>
    )
}
