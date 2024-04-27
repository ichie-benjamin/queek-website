"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {PROMOS} from "@/constants";

const PromotionalSlider = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {PROMOS.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex items-center justify-center p-6">
                                    <div
                                        className="w-full"
                                    >
                                        <div
                                            className="h-[145px] md:h-[160px] lg:h-[290px] max-h-40- py-3 pb-8 lg:py-10 px-4 lg:px-16 grid relative items-center rounded-lg lg:rounded-3xl w-full bg-gradient-to-r from-[#00493E] via-[#00493E] to-[#00945F] to-60%-"
                                        >
                                            <div className="h-full grid items-center w-7/12">
                                                <img
                                                    src={item.icon}
                                                    className="h-[30px] lg:h-[60px]"
                                                    alt=""
                                                />
                                                <h1
                                                    className="text-sm md:text-lg lg:text-4xl text-white flex items-"
                                                >
                                                    <p>{ item.title }</p>
                                                </h1>
                                            </div>

                                            <img
                                                src={item.image}
                                                className="absolute h-44 lg:h-auto right-8 -bottom-6 lg:-bottom-12"
                                                alt=""
                                            />
                                        </div>
              </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default PromotionalSlider;
