"use client"


import React from "react";

import RiderApplyHero from "@/components/pages/Career/Rider/RiderApplyHero";
import RiderApplyDetailBody from "@/components/pages/Career/Rider/RiderApplyDetailBody";
export default async function RiderJobPage(){
    return (
        <div className="w-full ">

            <section className="
            dark:bg-background bg-section-light px-4 flex items-center flex-col gap-20 py-10 sm:pb-32 md:gap-28 lg:py-20 justify-center">


            </section>

            <RiderApplyHero/>


            <RiderApplyDetailBody/>

            <div className="h-[100px]"></div>
        </div>
    )
}
