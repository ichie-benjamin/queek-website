
import React from "react";

import {HoverEffect} from "@/components/ui/card-hover";
import { WHYPARTNER} from "@/constants";
import Image from "next/image";
import {siteConfig} from "@/config/site";
import ExternalLinkButton from "@/components/ExternalLinkButton";
export default async function BusinessPage(){
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
                                    <h1 className="bold-26 sm:bold-52">Join Queek <strong className="text-primary">As a vendor </strong></h1>

                                    <p className="text-base my-4 font-medium">
                                        At Queek, we are committed to partnering with the best vendors to provide our
                                        customers with exceptional service and quality products.
                                        If you are a business owner looking to expand your reach and grow your customer base,
                                        we invite you to join us as a Queek vendor.
                                    </p>


                                    <div className="flex mt-6">
                                        <ExternalLinkButton
                                            href={ siteConfig.vendor_signup }
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
                            <img src="/images/app_bg.png" className="w-full md:w-auto" alt="" />
                        </div>
                    </div>
                </section>
            </div>




            <div className="max-w-[500px] mx-auto md:max-w-6xl md:px-12 mt-16">
                <div className="flex px-4">
                    <div className="max-w-md mx-auto justify-center text-center">
                        <h2 className="bold-26 sm:bold-52"><strong className="text-primary">Why Partner with Queek</strong></h2>

                        <p className="mt-4 text-center mb-6">
                            Discover why Queek is the solution you have been searching for with these compelling reasons to make it your go-to service platform.
                        </p>
                    </div>
                </div>

                <HoverEffect items={WHYPARTNER} />
            </div>





            <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-20 mx-auto">
                <div className="grid place-content-center h-full w-full">
                    <div
                        className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                    >
                        <div className="md:col-span-4 bg-section-light rounded-3xl dark:bg-background p-6 lg:col-span-6 w-full flex justify-end">
                            <Image
                                height="1000"
                                width="800"
                                src="/images/banner/efficient.png"
                                className="w-full md:w-auto rounded-3xl"
                                alt=""
                            />
                        </div>
                        <div className="md:col-span-8 lg:col-span-6 w mx-auto px-5">
                            <div className="h-full sm:px-0 flex items-center">
                                <div>
                                    <h2
                                        className="text-[28px] md:text-[32px] lg:text-4xl  font-bold"
                                    >
                                        Flexible Solutions
                                    </h2>
                                    <p className="text-base my-4 font-medium ">
                                        Whether you are a restaurant, grocery store, service provider, or retailer, Queek offers flexible solutions tailored to your specific needs. We will work with you to create a customized plan that aligns with your business goals and objectives.
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
                                    src="/images/banner/partnership.jpg"
                                    className="min-w-40 rounded-3xl md:w-auto"
                                    alt=""
                                />
                            </div>
                            <div className="md:col-span-6 lg:col-span-6 w mx-auto px-5">
                                <div className="h-full sm:px-0 flex items-center">
                                    <div>
                                        <h2
                                            className="text-[28px] md:text-[32px] lg:text-4xl text-white font-bold"
                                        >
                                            Transparent Partnership
                                        </h2>
                                        <p className="text-base my-4 font-medium text-white">
                                            At Queek, we believe in transparency and fairness. We strive to maintain open communication with our vendors and provide them with the support and resources they need to thrive in the marketplace.
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
                                    className="text-[28px] md:text-[32px] lg:text-4xl  font-bold"
                                >
                                    Ready to Grow Your Business?
                                </h2>
                                <p className="text-base my-4 font-medium ">
                                    Don&apos;t miss out on the opportunity to reach more customers and expand your business with Queek. Join us today and become part of our growing community of vendors committed to delivering excellence to our customers.
                                </p>
                                <div className="flex mt-6">
                                    <ExternalLinkButton
                                        href={ siteConfig.vendor_signup }
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
                        <img src="/images/banner/business_owner.jpg" className="w-full rounded-3xl md:w-auto" alt="" />
                    </div>
                </div>
            </section>



            <div className="h-[100px]"></div>

        </div>
    )
}
