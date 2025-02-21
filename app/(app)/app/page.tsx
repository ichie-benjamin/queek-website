"use client"

import React from "react";

import DownloadApp from "@/components/DownloadApp";
import WhyUs1 from "@/components/pages/WhyUs1";

import FAQ from "@/components/pages/FAQ";

// const APP_STORE_URL = 'https://apps.apple.com/app/queek-the-everything-app/id6692619520';
// const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.queekng.app';

export default function DownloadPage(){
    //
    // useEffect(() => {
    //     // Function to detect iOS devices
    //     const isIOS = (): boolean => {
    //         if (typeof window === 'undefined') return false;
    //         const userAgent = window.navigator.userAgent.toLowerCase();
    //         console.log('isIOS', userAgent)
    //         return /iphone|ipad|ipod/.test(userAgent);
    //     };
    //
    //     // Function to detect Android devices
    //     const isAndroid = (): boolean => {
    //         if (typeof window === 'undefined') return false;
    //         const userAgent = window.navigator.userAgent.toLowerCase();
    //         console.log('isAndroid', userAgent)
    //
    //         return /android/.test(userAgent);
    //     };
    //
    //     // Function to handle the redirect
    //     const handleRedirect = (): void => {
    //         if (isIOS()) {
    //             window.location.href = APP_STORE_URL;
    //         } else if (isAndroid()) {
    //             window.location.href = PLAY_STORE_URL;
    //         }
    //         // If neither, user stays on this page
    //     };
    //
    //     // Only run on client side
    //     handleRedirect();
    // }, []);



    return (
        <div className="w-full">
            <div className="bg-section-light dark:bg-background">
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
            </div>

            {/*<Services />*/}

            <WhyUs1 />


            <FAQ />

            <div className="h-[100px]"></div>
        </div>
    )
}
