"use client";

import Image from "next/image";
import { Tab } from "../ui/tab";

const ServicesTab = () => {
    const tabs = [
        {
            title: "Queek Food",
            value: "food",
            content: (
                <div
                    className="w-full overflow-hidden justify-center relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-violet-900">
                    <div className="text-center">
                        <p>Food Delivery</p>
                    </div>
                    <DummyContent image="/images/banner/food.jpg"/>

                </div>
            ),
        },
        {
            title: "Home Cleaning",
            value: "home-cleaning",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-violet-900">
                    <div className="text-center">
                        <p>Home Cleaning</p>
                    </div>
                    <DummyContent image="/images/banner/home_cleaning.png"/>

                </div>
            ),
        },
        {
            title: "Queek Delivery",
            value: "delivery",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-violet-900">
                    <div className="text-center">
                        <p>Custom Delivery</p>
                    </div>
                    <DummyContent image="/images/banner/delivery.png"/>

                </div>
            ),
        },
        {
            title: "Laundry",
            value: "laundry",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-violet-900">
                    <div className="text-center">
                        <p>Queek Laundry</p>
                    </div>
                    <DummyContent image="/images/banner/laundry.png"/>

                </div>
            ),
        },
        {
            title: "Shop For Me",
            value: "shop_for_me",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-700 to-violet-900">
                    <div className="text-center">
                        <p>Lets do the shopping for you</p>
                    </div>
                    <DummyContent image="/images/banner/shop_for_me.png"/>

                </div>
            ),
        },


    ];

    return (
        <div
            className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tab tabs={tabs}/>
        </div>
    );
}

const DummyContent = ({image} : { image : string}) => {
    return (
        <Image
            src={image}
            alt="dummy image"
            width="1000"
            height="100"
            className="object-cover object-left-top h-[60%]  md:h-[70%] absolute bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};

export default ServicesTab
