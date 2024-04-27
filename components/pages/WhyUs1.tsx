import {WHYUS} from "@/constants";
import MeteorsCard from "@/components/ui/metro-card";

const WhyUs1 =  () => {
    return (
        <section>
            <div className="flex px-4">
                <div className="max-w-md mx-auto justify-center text-center">
                    <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                        Effortless Deliveries with Queek
                    </h2>
                    <p className="mt-4 text-center mb-16">
                        Queek delivery service is your ultimate solution for hassle-free deliveries
                    </p>
                </div>
            </div>

                <div className="grid grid-cols-1 px-4 sm:grid-cols-3 mb-16 max-w-[500px] h-full md:max-w-6xl mx-auto justify-center gap-12">
                    { WHYUS.map((item, index) => (
                        <MeteorsCard image={item.icon} key={item.id} title={item.title} description={item.description} metros={5} />
                    ))}
                </div>
         </section>
    );
}

export default WhyUs1;
