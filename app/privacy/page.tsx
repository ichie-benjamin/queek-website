
import React from "react";

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "Introduction",
            content: [
                "At Queek, we respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and share your personal information when you use our app."
            ]
        },
        {
            title: "What We Collect",
            content: [
                "We collect the following types of personal information:",
                "Account Information: When you create an account with us, we collect your name, email address, phone number, and password.",
                "Location Information: We collect your location information to provide you with services that are relevant to your area.",
                "Order Information: When you place an order through our app, we collect information about the services you have ordered, including the type of service, the date and time of the order, and any other relevant details.",
                "Payment Information: We collect payment information, such as your credit card details, to process your payments.",
                "Device Information: We collect information about the device you use to access our app, including the device type, operating system, and browser type."
            ]
        },
        {
            title: "How We Use Your Information",
            content: [
                "We use your personal information to:",
                "Provide Our Services: We use your information to provide you with the services you have requested, including food delivery, grocery shopping, laundry services, car wash, bill payments, gas refill, and more.",
                "Improve Our Services: We use your information to improve our services, including by analyzing your usage patterns and preferences.",
                "Communicate with You: We use your information to communicate with you about your orders, including sending you updates and notifications.",
                "Personalize Your Experience: We use your information to personalize your experience on our app, including by recommending services that may be of interest to you."
            ]
        },
        {
            title: "Who We Share Your Information With",
            content: [
                "We share your personal information with:",
                "Service Providers: We share your information with our service providers, including local businesses and third-party logistics providers, to provide you with the services you have requested.",
                "Payment Processors: We share your payment information with our payment processors to process your payments.",
                "Analytics Providers: We share your information with our analytics providers to analyze your usage patterns and preferences."
            ]
        },
        {
            title: "Your Rights",
            content: [
                "You have the following rights:",
                "Access: You have the right to access your personal information and to request a copy of your personal information.",
                "Correction: You have the right to correct any inaccuracies in your personal information.",
                "Deletion: You have the right to request that we delete your personal information.",
                "Objection: You have the right to object to our processing of your personal information."
            ]
        },
        {
            title: "Security",
            content: [
                "We take the security of your personal information seriously and have implemented appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, or use."
            ]
        },
        {
            title: "Changes to This Policy",
            content: [
                "We may update this privacy policy from time to time. If we make any changes, we will notify you by posting the updated policy on our app."
            ]
        },
        {
            title: "Contact Us",
            content: [
                "If you have any questions or concerns about this privacy policy, please contact us at [insert contact information]."
            ]
        }
    ];

    return (
        <div className="bg-gray-10 mb-10">
            <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 pt-20 mx-auto">

                <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>


                {sections.map((section, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {section.content.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p>
                        For more information or to resolve issues, please contact us at <a
                        href="mailto:support@queek.com" className="text-blue-600 hover:underline">support@queek.com</a>.
                        We are dedicated to improving your experience and addressing your concerns.
                    </p>
                </div>



            </section>

            <div className="h-[100px]"></div>
        </div>
    );
}
