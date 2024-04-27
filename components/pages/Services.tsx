import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {SERVICES} from "@/constants";

const Services = () => {
    return (
        <div>


            <Tabs defaultValue="food_delivery">

                <section>
                    <div className="text-center my-8">
                        <h1
                            className="text-[#004B3E] font-extrabold text-7xl"
                        >
                            Queek
                        </h1>
                    </div>

                    <div className="flex mx-auto items-center justify-center flex-wrap gap-8">


                        <TabsList>
                            { SERVICES.map((service) => (
                                <TabsTrigger key={service.key} value={service.key}>
                                    <div  className="flex items-center">
                                    <div
                                        className="flex items-center py-3 px-5 rounded-2xl bg-[#F4F8FB]">
                                        <img
                                            src="https://upload-cdn.careem.com/product_bcef266a29.png"
                                            alt="Careem Wink Logo"
                                            className="w-5 h-5 md:w-6 md:h-6 me-2"
                                        />
                                        <h4>
                                            <span className="text-lg md:text-xl text-[#004B3E] font-bold">{ service.label}</span>
                                        </h4>
                                    </div>
                                </div>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                    </div>


                </section>



                { SERVICES.map((service) => (
                    <TabsContent key={'content_'+service.key} value={service.key}>
                        <section>
                            <div className="max-w-3xl lg:max-w-5xl mt-16 mb-28 mx-auto px-5 ps-10">
                                <div className="grid grid-cols-1 gap lg:grid-cols-2 items-center mx-auto">
                                    <div className="text-center md:text-star">
                                        <div className="flex text-center mx-auto items-center justify-center">
                                            <img
                                                src={ service.image }
                                                alt="Careem Wink Logo"
                                                className="md:w-24 rounded-full md:h-24 w-10 h-10 me-2"
                                            />
                {/*                            <h4>*/}
                {/*<span className="text-4xl md:text-7xl text-[#004B3E] font-black"*/}
                {/*>Rides</span>*/}
                {/*                            </h4>*/}
                                        </div>
                                        <div className="mt-3 text-center md:text-start">
                                            <p
                                                className="text-[#004B3E] text-lg lg:-ms-[70px] font-semibold font"
                                            >
                                                { service.description }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap mx-auto gap-8 mt-6 ps-4">
                                        <a href="#">
                                            <div className="bg-[#F4F8FB] py-4 px-2 rounded-xl">
                                                <img
                                                    src="images/express/taxi_car_one.png"
                                                    className="w-24"
                                                    alt=""
                                                />
                                                <p
                                                    className="text-2xs font-medium text-[#004B3E] mx-auto text-center"
                                                >
                                                    Hala
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="bg-[#F4F8FB] py-4 px-2 rounded-xl">
                                                <img
                                                    src="images/express/van_taxi_two.png"
                                                    className="w-24"
                                                    alt=""
                                                />
                                                <p
                                                    className="text-2xs font-medium text-[#004B3E] mx-auto text-center"
                                                >
                                                    Hala Max
                                                </p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="bg-[#F4F8FB] py-4 px-2 rounded-xl">
                                                <img src="images/express/hala_kids_.png" className="w-24" alt="" />
                                                <p
                                                    className="text-2xs font-medium text-[#004B3E] mx-auto text-center"
                                                >
                                                    Hala Kids
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </TabsContent>
                ))}

            </Tabs>

        </div>
    );
}

export default Services;
