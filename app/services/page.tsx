
import React from "react";
import DownloadApp from "@/components/DownloadApp";
import WhyUs1 from "@/components/pages/WhyUs1";
import Services from "@/components/pages/Services";
import FAQ from "@/components/pages/FAQ";
import ContactInfo from "@/components/pages/ContactInfo";
import LinkButton from "@/components/LinkButton";
export default async function ContactUsPage(){
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
                                    <h1 className="bold-26 sm:bold-52">Welcome to <strong className="text-primary">Queek's Services </strong></h1>

                                    <p className="text-base my-4 font-medium">
                                        At Queek, we pride ourselves on offering a wide array of services designed to simplify and enhance every aspect of your life. From transportation to home maintenance, and from grocery delivery to utility payments, we've got you covered.
                                        Explore our diverse range of services below:
                                    </p>


                                    <div className="flex mt-6">
                                        <LinkButton
                                            href="/download"
                                            type="button"
                                            title="Download App"
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



            <section id="food_delivery" className="max-w-[500px] md:max-w-6xl md:px-12 mt-20 mx-auto">
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
                                    Food Delivery
                                </h2>
                                <p className="text-base my-4 font-medium">
                                    Queek's Food Delivery service brings the best of local and fast
                                    food straight to your door. Whether you're craving a burger,
                                    a hearty bowl of local soup, or a mouth-watering plate of bole,
                                    our network of delivery partners has you covered.
                                    Simply browse our extensive menu, place your order,
                                    and enjoy delicious meals delivered right to your doorstep.
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
                        <img src="/images/services/gloceries.jpeg" className="w-full rounded-3xl md:w-auto" alt="" />
                    </div>
                </div>
            </section>

            <section  className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-20 mx-auto">
                <div className="grid place-content-center h-full w-full">
                    <div
                        className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                    >
                        <div className="md:col-span-4 lg:col-span-6 w-full flex justify-end">
                            <img
                                src="/images/services/gloceries.jpeg"
                                className="w-full md:w-auto rounded-3xl"
                                alt=""
                            />
                        </div>
                        <div className="md:col-span-8 lg:col-span-6 w mx-auto px-5">
                            <div className="h-full sm:px-0 flex items-center">
                                <div>
                                    <h2
                                        className="text-[28px] md:text-[32px] lg:text-4xl font-bold"
                                    >
                                        Grocery Delivery
                                    </h2>
                                    <p className="text-base my-4 font-medium">
                                        Queek's Grocery Delivery service makes grocery shopping a breeze.
                                        With access to the best supermarkets in town,
                                        you can order all your essential groceries with just a
                                        few clicks. Whether you need fresh produce, or household items, our dedicated shoppers will handpick
                                        the best products and deliver them directly to your doorstep.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="home_cleaning" className="py-10 mt-16 bg-gradient-to-tr from-primary via-green-50 to-dark_primary dark:bg-background dark:from-[#020817] dark:via-[#020817] dark:to-[#020817d9]">
                <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-10 mx-auto">
                    <div className="grid place-content-center py-10 h-full w-full">
                        <div
                            className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                        >
                            <div className="md:col-span-6 lg:col-span-6 w-full flex justify-end">
                                <img
                                    src="/images/banner/home_cleaning.jpg"
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
                                            Home Cleaning
                                        </h2>
                                        <p className="text-base my-4 font-medium text-white">
                                            Queek Clean is your trusted partner for maintaining a
                                            clean and tidy living space.
                                            Our professional cleaners are equipped with the tools
                                            and expertise to tackle any cleaning task,
                                            leaving your home sparkling and refreshed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>


            <section id="utility_payment" className="max-w-[500px] md:max-w-6xl md:px-12 mt-20 mx-auto">
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
                                    Utility Payments
                                </h2>
                                <p className="text-base my-4 font-medium">
                                    Queek BillPay simplifies the process of paying your utility bills,
                                    allowing you to settle your payments with ease.
                                    Whether it's electricity, airtime, data, internet, betting, or TV subscriptions,
                                    Queek BillPay ensures that your payments are processed securely and on time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="md:col-span-4 lg:col-span-6 w-full flex justify-end order-1 md:order-2"
                    >
                        <img src="/images/services/pay_bill.jpeg" className="w-full rounded-3xl md:w-auto" alt="" />
                    </div>
                </div>
            </section>



            <section id="delivery_service" className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-20 mx-auto">
                <div className="grid place-content-center h-full w-full">
                    <div
                        className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                    >
                        <div className="md:col-span-4 lg:col-span-6 w-full flex justify-end">
                            <img
                                src="/images/services/delivery.jpeg"
                                className="w-full md:w-auto rounded-3xl"
                                alt=""
                            />
                        </div>
                        <div className="md:col-span-8 lg:col-span-6 w mx-auto px-5">
                            <div className="h-full sm:px-0 flex items-center">
                                <div>
                                    <h2
                                        className="text-[28px] md:text-[32px] lg:text-4xl font-bold"
                                    >
                                        Delivery Service
                                    </h2>
                                    <p className="text-base my-4 font-medium">
                                        Shop, send or receive from anywhere with Queek's delivery service.
                                        Simply select the items you need from your
                                        favorite stores or initiate a pickup and our team will take care of
                                        the rest, ensuring that your purchases / items are delivered promptly to your doorstep.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="waste_disposal" className="max-w-[500px] md:max-w-6xl md:px-12 mt-20 mx-auto">
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
                                    Waste Disposal
                                </h2>
                                <p className="text-base my-4 font-medium">
                                    Queek's Waste Disposal Service offers tailored solutions for
                                    efficient and environmentally responsible waste management.
                                    From residential to commercial and industrial clients, we ensure reliable and
                                    sustainable disposal solutions for all your waste management needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="md:col-span-4 lg:col-span-6 w-full flex justify-end order-1 md:order-2"
                    >
                        <img src="/images/banner/waste.jpg" className="w-full rounded-3xl md:w-auto" alt="" />
                    </div>
                </div>
            </section>


            <section id="laundry" className="bg-section-light dark:bg-background text-base mt-16">
                <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-10 mx-auto">
                    <div className="grid place-content-center py-10 h-full w-full">
                        <div
                            className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                        >
                            <div className="md:col-span-6 lg:col-span-6 w-full flex justify-end">
                                <img
                                    src="/images/services/laundry.jpeg"
                                    className="min-w-40 md:w-auto"
                                    alt=""
                                />
                            </div>
                            <div className="md:col-span-6 lg:col-span-6 w mx-auto px-5">
                                <div className="h-full sm:px-0 flex items-center">
                                    <div>
                                        <h2
                                            className="text-[28px] md:text-[32px] lg:text-4xl font-bold"
                                        >
                                            Laundry Service
                                        </h2>
                                        <p className="text-base my-4 font-medium">
                                            Queek Laundry offers meticulous care for your garments, ensuring that your clothes are cleaned and cared for to the highest standards. With our tailored processes and high-quality detergents, your clothes will look and feel their best after every wash.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>


            <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 mt-20 mx-auto">
                <div className="grid place-content-center h-full w-full">
                    <div
                        className="grid grid-cols-1 gap-4 justify-between items-center md:grid-cols-12 md:gap-8 px-4"
                    >
                        <div className="md:col-span-4 lg:col-span-6 w-full flex justify-end">
                            <img
                                src="/images/services/wash.jpeg"
                                className="w-full md:w-auto rounded-3xl"
                                alt=""
                            />
                        </div>
                        <div className="md:col-span-8 lg:col-span-6 w mx-auto px-5">
                            <div className="h-full sm:px-0 flex items-center">
                                <div>
                                    <h2
                                        className="text-[28px] md:text-[32px] lg:text-4xl font-bold"
                                    >
                                        Car Wash Services
                                    </h2>
                                    <p className="text-base my-4 font-medium ">
                                        Queek AutoCare brings professional car wash services directly to your doorstep.
                                        Our eco-friendly products and techniques ensure that your car
                                        receives a thorough clean while minimizing environmental impact.
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
                                    utility bills, Queek's empowers you to
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



            <div className="h-[100px]"></div>

            <WhyUs1 />


            <FAQ />

            <div className="h-[100px]"></div>
        </div>
    )
}
