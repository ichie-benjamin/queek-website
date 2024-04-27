import React from 'react';

function SiteFooter() {
    return (
        <footer>

            <div
                className="grid xl:grid-cols-6 col-span-1 xl:flex gap-5 text-center xl:justify-between space-y-10 px-8"
            >
                <div
                    className="xl:flex text-center mx-auto xl:me-16 xl:mx-1 order-1 xl:order-1"
                >
                    <div className="space-x-4">
                        <a href="index.html">
                            <img
                                src="images/express/careem_logo_new.png"
                                className="w-28 translate-y-1 hover:translate-y-0 duration-200 mx-auto xl:mx-1"
                                alt=""
                            />
                        </a>
                        <a href="index.html">
                            <img
                                src="images/express/app-store.webp"
                                className="w-32 translate-y-1 hover:translate-y-0 duration-200 mx-auto xl:mx-1"
                                alt=""
                            />
                        </a>
                        <a href="index.html">
                            <img
                                src="images/express/google-play.webp"
                                className="w-32 translate-y-1 hover:translate-y-0 duration-200 mx-auto xl:mx-1"
                                alt=""
                            />
                        </a>
                        <a href="index.html">
                            <img
                                src="images/express/apk-download.webp"
                                className="w-32 translate-y-1 hover:translate-y-0 duration-200 mx-auto xl:mx-1"
                                alt=""
                            />
                        </a>
                    </div>
                </div>

                <div className="space-y-6 xl:space-y-3 order-3 xl:order-2 -pt-8">
                    <h1 className="text-lg text-center font-semibold text-[#00493E]">
                        Services
                    </h1>
                    <ul className="space-y-2">
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-6 text-[#474747] font-semibold text-[16.5px] text-center"
                        >
                            <a href="">Go </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-6 text-[#474747] font-semibold text-[16.5px] text-center"
                        >
                            <a href="">Eat </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-6 text-[#474747] font-semibold text-[16.5px] text-center"
                        >
                            <a href="">Get </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-6 text-[#474747] font-semibold text-[16.5px] text-center"
                        >
                            <a href="">Pay </a>
                        </li>
                    </ul>
                    <div className="text-center">
                        <a
                            href=""
                            className="hover:text-[#00EB79] duration-200 text-center text-base hover:underline-offset-2 hover:underline font-semibold text-[#2D2E2E]"
                        >
                            Careem Plus
                        </a>
                    </div>
                </div>
                <div className="space-y-6 xl:space-y-3 xl:-ms-8 order-4 xl:order-3">
                    <h1 className="text-lg text-center font-semibold text-[#00493E]">
                        Partners
                    </h1>
                    <ul className="space-y-2">
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-[168px] text-[#474747] font-semibold text-[16.5px] text-center"
                        >
                            <a href="" className="">Corporate packages </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-[164px] text-[#474747] font-semibold text-[16.5px] text-center"
                        >
                            <a href="">Restaurant delivery </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-28 text-[#474747] font-semibold text-[16.5px] text-center"
                        >
                            <a href="">B2B delivery </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-48 text-[#474747] font-semibold text-[16.5px] text-center"
                        >
                            <a href="">Pay merchant solutions </a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-6 xl:space-y-3 xl:-mx-8 order-5 xl:order-4">
                    <h1 className="text-lg text-center font-semibold text-[#00493E]">
                        Join our team
                    </h1>
                    <ul className="space-y-2">
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-20 text-[#474747] font-semibold text-[16px] text-center"
                        >
                            <a href="">About us </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-[184px] text-[#474747] font-semibold text-[16px] text-center"
                        >
                            <a href="">Engineering at Careem </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-16 text-[#474747] font-semibold text-[16.5px] text-center"
                        >
                            <a href="">Careers </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-36 text-[#474747] font-semibold text-[16px] text-center"
                        >
                            <a href="">Explore open roles </a>
                        </li>
                    </ul>
                    <div className="text-center">
                        <a
                            href=""
                            className="hover:text-[#00EB79] duration-200 text-center text-base hover:underline-offset-2 hover:underline font-semibold text-[#2D2E2E]"
                        >
                            Why Careem
                        </a>
                    </div>
                </div>
                <div className="space-y-6 xl:space-y-3 order-6 xl:order-5">
                    <h1 className="text-lg text-center font-semibold text-[#00493E]">
                        About us
                    </h1>
                    <ul className="space-y-2">
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-36 text-[#474747] font-semibold text-[16px] text-center"
                        >
                            <a href="">Our social impact </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-40 text-[#474747] font-semibold text-[16px] text-center"
                        >
                            <a href="">Information security </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] hover:border-b-2 border-[#00EB79] mx-auto w-9 text-[#474747] font-semibold text-[16.5px] text-center"
                        >
                            <a href="">Blog </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="space-y-6 xl:space-y-3 xl:ms-10 text-center order-2 xl:order-6"
                >
                    <ul className="space-y-2 text-center xl:text-start">
                        <li>
                            <button
                                type="button"
                                id="dropdownDefaultButtontwo"
                                data-dropdown-toggle="dropdowntwo"
                                className="inline-flex font-medium items-center py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer dark:hover:text-white"
                            >
                                <i className="fa-solid fa-location-dot text-lg text-[#00493E]"></i>
                                <span className="ms-2 me-4"> U.A.E. </span>
                                <i className="fa-solid fa-caret-down text-gray-600"></i>
                            </button>
                            <div
                                id="dropdowntwo"
                                className="z-10 bg-white divide-y divide-gray-100 rounded-b-lg shadow border dark:bg-gray-700 hidden"

                                data-popper-placement="bottom"
                            >
                                <ul
                                    className="justify-center text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefaultButtontwo"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-7 py-2 bg-[#00EB79] dark:bg-slate-700 dark:text-white"
                                        >
                                            U.A.E.</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button
                                type="button"
                                id="dropdownDefaultButtonone"
                                data-dropdown-toggle="dropdownone"
                                className="inline-flex font-medium items-center py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer dark:hover:text-white"
                            >
                                <i className="fa-solid fa-globe text-[#00493E]"></i>
                                <span className="ms-2 me-4"> English </span>
                                <i className="fa-solid fa-caret-down text-gray-600"></i>
                            </button>
                            <div
                                id="dropdownone"
                                className="z-10 bg-white divide-y divide-gray-100 rounded-b-lg shadow border dark:bg-gray-700 hidden"

                                data-popper-placement="bottom"
                            >
                                <ul
                                    className="justify-center text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefaultButtonone"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-[#00EB79] dark:hover:bg-slate-700 dark:hover:text-white"
                                        >Englishrg</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-[#00EB79] dark:hover:bg-slate-700 dark:hover:text-white"
                                        >Settings</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className="hover:text-[#00EB79] mx-auto text-[#474747] font-semibold text-[16px]"
                        >
                            <a href="">
                                <i className="fa-regular fa-circle-question text-[#00493E]"></i>
                                Help Centre
                            </a>
                        </li>
                        <li
                            className="hover:text-[#00EB79] mx-auto text-[#474747] font-semibold text-[16px]"
                        >
                            <a href="">
                                <i className="fa-regular fa-circle-question text-[#00493E]"></i>
                                Book your ride
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="px-9 xl:mt-16">
                <div className="xl:border-t">
                    <div
                        className="grid xl:grid-cols-3 grid-cols-1  xl:flex items-center text-center xl:justify-between px-8"
                    >
                        <div className=" items-center flex order-3 xl:order-1 mx-auto xl:mx-1">
                            <p className="text-xs flex items-cente h-full">
                                All rights reserved. Careem © 2024
                            </p>
                        </div>
                        <div className="flex items-center gap-4 order-2 xl:order-2 mx-auto xl:mx-1 mt-8 mb-12">
                            <a href="#"><p
                                className="text-xs flex items-center h-full hover:border-b-2 border-[#00EB79] hover:text-[#00EB79]"
                            >
                                Terms of Service
                            </p></a>
                            <a href="#"><p
                                className="text-xs flex items-center h-full hover:border-b-2 border-[#00EB79] hover:text-[#00EB79]"
                            >
                                Privacy Notices
                            </p></a>

                        </div>
                        <div className="flex items-center space-x-8 order-1 xl:order-3 mx-auto xl:mx-1">
                            <p className="rounded-full bg-black text-white w-6 h-6">
                                <a href="#"> <i className="fa-brands fa-facebook-f"></i> </a>
                            </p>
                            <p className="rounded-full bg-black text-white w-6 h-6">
                                <a href="#"> <i className="fa-brands fa-x-twitter"></i> </a>
                            </p>
                            <p className="rounded-full bg-black text-white w-6 h-6">
                                <a href="#"> <i className="fa-brands fa-linkedin-in"></i> </a>
                            </p>
                            <p className="rounded-full bg-black text-white w-6 h-6">
                                <a href="#"> <i className="fa-brands fa-instagram"></i> </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default SiteFooter;
