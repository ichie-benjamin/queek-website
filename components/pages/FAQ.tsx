import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {FAQS} from "@/constants";

const FAQ = () => {
    return (
        <section className="px-4">
            <div className="flex">
                <div className="max-w-md mx-auto justify-center text-center">
                    <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                        Frequently Asked Questions
                    </h2>
                    <div className="my-10"></div>
                </div>
            </div>

            <div className="flex flex-wrap mb-16 max-w-[500px] h-full md:max-w-6xl mx-auto justify-center gap-12">

            <Accordion type="single" collapsible className="w-full">
            { FAQS.map((item, index) => (
                <AccordionItem value={ item.title } key={'faq-'+index}>
                    <AccordionTrigger>{ item.title }</AccordionTrigger>
                    <AccordionContent>
                        { item.description }
                    </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
            </div>
        </section>
    )
}

export default FAQ;
