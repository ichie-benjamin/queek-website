
import React from "react";

export default function Terms() {
    const sections = [
        {
            title: "Welcome to Queek!",
            content: [
                "These terms and conditions govern your use of Queek's comprehensive service platform, which includes delivery services, online payments, and other associated services provided via our website and mobile application."
            ]
        },
        {
            title: "1. Introduction",
            content: [
                "These Terms govern the access to and use of services provided by Queek. By accessing and using our services, you agree to these Terms and our Privacy Policy. If you do not agree, you must cease using our services immediately."
            ]
        },
        {
            title: "2. Modifications to Terms",
            content: [
                "Queek reserves the right to modify these terms at any time. Such modifications will be effective immediately upon posting. Your continued use of our services after modifications are posted constitutes your binding acceptance of such changes."
            ]
        },
        {
            title: "3. Eligibility and Account Registration",
            content: [
                "Eligibility Criteria: You must be at least 18 years old to use Queek's services.",
                "Account Setup: To access certain features, you must create an account providing accurate and current information. You are responsible for maintaining the confidentiality of your account and password."
            ]
        },
        {
            title: "4. Service Description",
            content: [
                "Queek provides a multi-faceted platform that allows users to:",
                "Order food delivery from various restaurants.",
                "Schedule on-demand grocery and laundry services.",
                "Book home cleaning and car wash services.",
                "Pay utility bills and order gas refills.",
                "Each service is subject to specific terms which will be disclosed at the point of use."
            ]
        },
        {
            title: "5. User Responsibilities",
            content: [
                "Compliance: You agree to comply with all local laws regarding online conduct and acceptable content.",
                "Content Accuracy: You are responsible for the accuracy of the data you input into the platform.",
                "Prohibited Uses: You may not use our service for any illegal or unauthorized purpose."
            ]
        },
        {
            title: "6. Fees and Payment",
            content: [
                "Fees: You agree to pay the fees for services that you purchase on our platform, and you authorize us to charge your debit or credit card or process other means of payment for those fees.",
                "Refunds: Refund policies are specified for each service offering and are incorporated into these Terms by reference."
            ]
        },
        {
            title: "7. Intellectual Property Rights",
            content: [
                "Ownership and Rights: All materials on Queek, including software, logos, text, graphics, and design, are the intellectual property of Queek or its licensors and are protected under copyright and intellectual property laws.",
                "Use of Material: You agree not to copy, modify, or distribute content from Queek without explicit permission from us."
            ]
        },
        {
            title: "8. Termination and Suspension",
            content: [
                "Queek may terminate or suspend your access to the platform at any time, without notice, for any reason, including breach of these Terms. Upon termination, your right to use the platform will cease immediately."
            ]
        },
        {
            title: "9. Disclaimer of Warranties",
            content: [
                "You expressly understand and agree that your use of Queek is at your sole risk. The service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. Queek expressly disclaims all warranties of any kind, whether express or implied."
            ]
        },
        {
            title: "10. Limitation of Liability",
            content: [
                "To the maximum extent permitted by applicable law, Queek shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use the services."
            ]
        },
        {
            title: "11. Governing Law and Dispute Resolution",
            content: [
                "These terms shall be governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms will be resolved through final and binding arbitration under the rules of arbitration of the Nigerian Arbitration Association."
            ]
        },
        {
            title: "12. General Provisions",
            content: [
                "Entire Agreement: These Terms constitute the entire agreement between you and Queek regarding your use of the platform.",
                "No Waiver: The failure of Queek to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision."
            ]
        },
        {
            title: "13. Contact Information",
            content: [
                "If you have any questions about these Terms, please contact us at support@queek.com."
            ]
        }
    ];

    return (
        <div className="bg-gray-10 mb-10">
            <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 pt-20 mx-auto">

                <h1 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h1>


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
