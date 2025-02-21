import LinkButton from "@/components/LinkButton";

import React from "react";

export default async function AboutPage(){
    return (
        <div className="w-full">
            <section className="p-4 sm:p-8  mt-5 mb-16">
                <div className="relative max-h-[80vh] mx-auto">
                    <img
                        src="/images/about.png"
                        className="relative w-full rounded-3xl max-h-[80vh] object-center"
                        alt=""
                    />
                    <div
                        className="md:h-28 md:w-56 absolute bottom-8 lg:bottom-16 left-5 lg:left-10 grid place-content-center"
                    >
                    </div>
                </div>
            </section>



            <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-20 mx-auto">
                <div className="grid place-content-center h-full w-full">
                    <div
                        className="flex  px-4"
                    >
                        <div className="mx-auto px-5">
                            <div className="h-full sm:px-0 flex items-center">
                                <div>
                                    <h2
                                        className="text-[28px] md:text-[32px] lg:text-4xl font-bold"
                                    >
                                        About us
                                    </h2>
                                    <p className="text-base my-4 font-medium">
                                        Queek is on a mission to redefine convenience in Nigeria,
                                        offering a comprehensive solution to simplify and elevate your daily life.<br/>
                                        At Queek, we are not just a service provider
                                        –we are a movement dedicated to <strong>revolutionizing the way you live your life</strong>.
                                        <br/>Our mission is simple: to make everyday
                                        tasks effortless and to enrich your experiences with unparalleled convenience.
                                        <br/>Our vision is to create the everything app for the region, making it effortless for you to move around, order food and groceries, manage payments, and more – all from one powerful platform.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    Our Purpose
                                </h2>
                                <p className="text-base my-4 font-medium">
                                    Queek is driven by a powerful purpose – to simplify and elevate the lives of people in Nigeria.
                                    We are here to make a positive impact by providing innovative
                                    solutions that empower individuals and communities to thrive.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div
                        className="md:col-span-4 lg:col-span-6 w-full dark:bg-background bg-section-light rounded-3xl p-4 flex justify-end order-1 md:order-2"
                    >
                        <img src="/images/banner/everything.png" className="w-full md:w-auto" alt="" />
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
                                    src="/images/banner/ahead.jpg"
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
                                            Looking Ahead
                                        </h2>
                                        <p className="text-base my-4 font-medium text-white">


                                            As we look to the future, Queek is committed to pushing the
                                            boundaries of innovation and exploring new opportunities for growth.
                                            With the support of our partners and the dedication of our team,
                                            we are confident that we can continue to redefine
                                            convenience and enrich the lives of millions across the Middle East.
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
                                    Are you a business owner?
                                </h2>
                                <p className="text-base my-4 font-medium">
                                    Don&apos;t miss out on the opportunity to reach more customers and expand your business with Queek. Join us today and become part of our growing community of vendors committed to delivering excellence to our customers.
                                </p>
                                <div className="flex mt-6">
                                    <LinkButton
                                        href="#"
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
                        <div>
                            <img src="/images/banner/business_owner.jpg" className="w-full rounded-3xl md:w-auto" alt="" />
                            <a href="https://www.freepik.com/free-photo/front-view-smiley-woman-running-business_33752901.htm#fromView=search&page=1&position=48&uuid=40425724-696b-4c7f-9140-f08a03fce54c">Image by freepik</a>

                        </div>
                     </div>
                </div>
            </section>



            <div className="h-[100px]"></div>

        </div>
    )
}
