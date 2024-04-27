
import MeteorsCard from "@/components/ui/metro-card";
import {CONTACT_DETAIL} from "@/constants";
import LinkButton from "@/components/LinkButton";

const ContactInfo =  () => {
    return (
        <section className="mt-16 px-8">
            <div className="flex">
                <div className="max-w-md mx-auto justify-center text-center">
                    <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                        We’re always available
                    </h2>
                </div>
            </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 mb-16 mt-16 max-w-[500px] h-full md:max-w-6xl mx-auto justify-center gap-12">
                    { CONTACT_DETAIL.map((item, index) => (
                        <MeteorsCard key={index+'_contact'} title={item.method} metros={0}>
                            <p>{ item.description }</p>

                            { item.number ? (
                                <div className="mt-6 flex px-6">
                                    <LinkButton
                                        href={'tel:'+item.number}
                                        type="button"
                                        title="Call us"
                                        variant="btn_green"
                                    />
                                </div>
                            ) : null }

                            { item.address ? (
                                <div className="mt-6 flex px-6">
                                    <LinkButton
                                        href={'mailto:'+item.address}
                                        type="button"
                                        title="Mail us"
                                        variant="btn_green"
                                    />
                                </div>
                            ) : null }



                        </MeteorsCard>
                    ))}

                </div>
         </section>
    );
}

export default ContactInfo;
