import GetApp from "@/components/pages/GetApp";
import Hero from "@/components/pages/Hero";

import {HoverEffect} from "@/components/ui/card-hover";
import { WHYCHOOSEUS} from "@/constants";
import WhyUs1 from "@/components/pages/WhyUs1";
import FAQ from "@/components/pages/FAQ";
import React from "react";
import LinkButton from "@/components/LinkButton";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Queek - Your Ultimate Companion for Convenience | Simplify Your Life Today",
    description: "Discover the convenience of Queek - the all-in-one platform for transportation, food delivery, household services, and more. Revolutionize your routine and simplify your life with Queek.",
}


export default function Home() {
  return (
    <section>
        <Hero />






        {/*<Services />*/}


        {/*<ServicesTab />*/}

        <section className="py-10 bg-gradient-to-tr from-primary via-green-50 to-dark_primary dark:bg-background dark:from-[#020817] dark:via-[#020817] dark:to-[#020817d9]">
            <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-10 mx-auto">
                <div className="grid place-content-center py-10 h-full w-full">
                    <div
                        className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                    >
                        <div className="md:col-span-6 lg:col-span-6 w-full flex justify-end">
                            <img
                                src="/images/banner/everything.png"
                                className="min-w-40 md:w-auto"
                                alt=""
                            />
                        </div>
                        <div className="md:col-span-6 lg:col-span-6 w mx-auto px-5">
                            <div className="h-full sm:px-0 flex items-center">
                                <div>
                                    <h2
                                        className="text-[28px] md:text-[32px] lg:text-4xl text-white font-bold"
                                    >
                                        Everything in One Place
                                    </h2>
                                    <p className="text-base my-4 font-medium text-white">
                                        Say goodbye to juggling multiple apps.
                                        Queek brings together all the essential services you need under one roof.
                                        Whether ordering food, home cleaning, paying utility bills, shopping,
                                        making a quick delivery, or doing laundry, Queek covers you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>


        <section className="max-w-[500px] md:max-w-6xl md:px-12 mt-20 mx-auto">
            <div
                className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
            >
                <div
                    className="md:col-span-8 lg:col-span-6 order-2 md:order-1 w mx-auto px-5"
                >
                    <div className="h-full sm:px-0 flex items-center">
                        <div>
                            <h2
                                className="text-[28px] md:text-[32px] lg:text-4xl font-bold"
                            >
                                Tailored for You
                            </h2>
                            <p className="text-base my-4 font-medium">
                                Queek understands the unique needs of Nigerians.
                                That&apos;s why our platform is finely tuned to cater to your specific preferences,
                                ensuring a personalized experience every time you use it.
                            </p>
                            <div className="flex mt-6">
                                <LinkButton
                                    href="/download"
                                    type="button"
                                    title="Get Started"
                                    variant="btn_green"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="md:col-span-4 lg:col-span-6 w-full flex justify-end order-1 md:order-2"
                >
                    <img src="/images/banner/tailored.jpg" className="w-full rounded-3xl md:w-auto" alt="" />
                </div>
            </div>
        </section>

        <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-20 mx-auto">
            <div className="grid place-content-center h-full w-full">
                <div
                    className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                >
                    <div className="md:col-span-4 lg:col-span-6 w-full flex justify-end">
                        <img
                            src="/images/banner/everyday_helper.jpg"
                            className="w-full rounded-3xl md:w-auto"
                            alt=""
                        />
                    </div>
                    <div className="md:col-span-8 lg:col-span-6 w mx-auto px-5">
                        <div className="h-full sm:px-0 flex items-center">
                            <div>
                                <h2
                                    className="text-[28px] md:text-[32px] lg:text-4xl font-bold"
                                >
                                    Your Everyday Helper
                                </h2>
                                <p className="text-base my-4 font-medium ">
                                    Queek is like having a trusty sidekick for all your daily needs.
                                    Whether it is getting some quick foods, stocking up on groceries, sprucing up your home,
                                    or keeping your car sparkling clean, Queek has got your back.
                                    Just turn on the app, and Queek will take care of everything for you.
                                    This leaves you with more time to kick back and enjoy the things you love.
                                    With Queek by your side, life just got a whole lot simpler.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section
            className="bg-section mt-14"
        >
            <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-6 mx-auto">
                <div className="grid place-content-center h-full w-full">
                    <div
                        className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                    >
                        <div className="md:col-span-6 lg:col-span-6 w-full flex justify-end">
                            <img
                                src="/images/banner/smooth.png"
                                className="min-w-40 md:w-auto"
                                alt=""
                            />
                        </div>
                        <div className="md:col-span-6 lg:col-span-6 w mx-auto px-5">
                            <div className="h-full sm:px-0 flex items-center">
                                <div>
                                    <h2
                                        className="text-[28px] md:text-[32px] lg:text-4xl text-white font-bold"
                                    >
                                        Seamless Integration
                                    </h2>
                                    <p className="text-base my-4 font-medium text-white">
                                        Queek is designed to make your life simpler. Our platform is easy to use and seamlessly integrates all the services you rely on,
                                        so you can get so much done for you quickly and effectively
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>



        <section className="max-w-[500px] md:max-w-6xl md:px-12 mt-20 mx-auto">
            <div
                className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
            >
                <div
                    className="md:col-span-8 lg:col-span-6 order-2 md:order-1 w mx-auto px-5"
                >
                    <div className="h-full sm:px-0 flex items-center">
                        <div>
                            <h2
                                className="text-[28px] md:text-[32px] lg:text-4xl font-bold"
                            >
                                Effortless Efficiency
                            </h2>
                            <p className="text-base my-4 font-medium">
                                Queek is your ticket to a smoother,
                                more streamlined lifestyle. With the tap of your finger,
                                you unlock a world of convenience that spans every aspect
                                of daily living. From ordering groceries to scheduling
                                a home cleaning, arranging a car wash, or even settling
                                utility bills, Queek&apos;s empowers you to
                                effortlessly tackle your to-do list.
                            </p>
                            <div className="flex mt-6">
                                <LinkButton
                                    href="/download"
                                    type="button"
                                    title="Get Started"
                                    variant="btn_green"
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div
                    className="md:col-span-4 lg:col-span-6 w-full flex justify-end order-1 md:order-2"
                >
                    <img src="/images/banner/efficient.png" className="w-full md:w-auto" alt="" />
                </div>
            </div>
        </section>



        <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-20 mx-auto">
            <div className="grid place-content-center h-full w-full">
                <div
                    className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                >
                    <div className="md:col-span-4 lg:col-span-6 w-full flex justify-end">
                        <img
                            src="/images/banner/hassle-free.jpg"
                            className="w-full rounded-3xl md:w-auto"
                            alt=""
                        />
                    </div>
                    <div className="md:col-span-8 lg:col-span-6 w mx-auto px-5">
                        <div className="h-full sm:px-0 flex items-center">
                            <div>
                                <h2
                                    className="text-[28px] md:text-[32px] lg:text-4xl font-bold"
                                >
                                    Smooth, hassle-free transactions
                                </h2>
                                <p className="text-base my-4 font-medium ">
                                    With Queek, you can expect transactions to glide through
                                    effortlessly every time. Our platform ensures seamless processes
                                    from start to finish, guaranteeing that your payments,
                                    bookings, and orders are always completed without a hitch.
                                    Say goodbye to frustrating
                                    delays and hello to smooth, hassle-free transactions with Queek.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <div className="max-w-[500px] mx-auto md:max-w-6xl md:px-12 mt-16">

            <div className="flex px-4">
                <div className="max-w-md mx-auto justify-center text-center">
                    <h2 className="bold-26 sm:bold-52"><strong className="text-primary">Why Queek</strong></h2>

                    <p className="mt-4 text-center mb-6">
                        Discover why Queek is the solution you&apos;ve been searching for with these compelling reasons to make it your go-to service platform.
                    </p>
                </div>
            </div>

            <HoverEffect items={WHYCHOOSEUS} />
        </div>


        <WhyUs1 />


        <FAQ />

        <GetApp />
    </section>
  );
}
