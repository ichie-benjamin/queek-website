
import React from "react";

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "Privacy Notice",
            content: [
                "Queek Technology Limited ('Queek', 'we', 'us', 'our') provides a multi-service platform through three main applications: Queek App for users requesting services, Queek Rider for delivery partners, and Queek Merchant for service providers and vendors.",
                "This Privacy Policy outlines our commitment to protecting your information in accordance with the Nigeria Data Protection Act 2023 (NDPA) and Nigeria Data Protection Regulation 2019 (NDPR)."
            ]
        },
        {
            title: "Updates to Privacy Policy",
            content: [
                "Our services and features are continuously evolving. When we update this Policy, we will notify you through the app or email, post updates on our website, and indicate the last updated date.",
                "Your continued use of our services after changes indicates acceptance of the updated policy."
            ]
        },
        {
            title: "Information Collection - Queek App Users",
            content: [
                "When you use the Queek App, we collect your profile and contact details including name, email, and phone number.",
                "We store your delivery addresses and order history to improve service delivery.",
                "Payment information is securely collected and processed for transactions.",
                "Device information and usage data help us optimize the app performance."
            ]
        },
        {
            title: "Information Collection - Queek Riders",
            content: [
                "For delivery partners, we collect identity verification documents including valid ID and proof of address.",
                "Vehicle information including registration and insurance details are required for service provision.",
                "We track delivery performance data and location during active deliveries.",
                "Banking information is collected for payment processing."
            ]
        },
        {
            title: "Information Collection - Queek Merchants",
            content: [
                "Business registration details and store information are collected for verification.",
                "Product catalogs and pricing information are stored for display on our platform.",
                "Transaction records and payment details are maintained for business operations.",
                "Store manager and key personnel contact information is stored for communication."
            ]
        },
        {
            title: "Understanding Your Preferences",
            content: [
                "We use cookies and similar technologies to remember your preferences and improve app performance.",
                "These technologies help us enhance security and analyze usage patterns.",
                "You can manage cookie preferences through your device settings.",
                "Essential cookies required for basic platform functionality cannot be disabled."
            ]
        },
        {
            title: "Location Services",
            content: [
                "Location access is essential for showing nearby vendors and services.",
                "Real-time location tracking enables efficient delivery management.",
                "We optimize delivery routes using location data.",
                "You can control location permissions through your device settings, but this may limit service functionality."
            ]
        },
        {
            title: "Use of Information",
            content: [
                "Your information helps us process orders and facilitate deliveries efficiently.",
                "We use data to improve our services and ensure platform safety.",
                "Information is used to comply with legal requirements and prevent fraud.",
                "Customer support and service updates are provided using your contact information."
            ]
        },
        {
            title: "Communication",
            content: [
                "We send in-app notifications for order updates and important alerts.",
                "SMS alerts are used for time-sensitive information and delivery updates.",
                "Email communications include receipts, promotional offers, and policy updates.",
                "Phone calls are made only for urgent matters requiring immediate attention."
            ]
        },
        {
            title: "Information Sharing",
            content: [
                "Service providers receive necessary information for order fulfillment.",
                "Payment processors handle transaction data securely.",
                "Delivery partners receive delivery details and contact information.",
                "Law enforcement agencies may receive information when legally required."
            ]
        },
        {
            title: "Security Measures",
            content: [
                "We implement strong encryption protocols to protect your data.",
                "Regular security audits are conducted to maintain platform safety.",
                "Access controls restrict data visibility to authorized personnel.",
                "Staff undergo regular training on data protection and security."
            ]
        },
        {
            title: "Data Retention",
            content: [
                "Active accounts: We retain data for the duration of service plus 7 years.",
                "Inactive accounts: Data is kept for 7 years from last activity.",
                "Legal requirements may extend retention periods for specific information.",
                "You can request data deletion subject to legal obligations."
            ]
        },
        {
            title: "Marketing Communications",
            content: [
                "Marketing communications are sent only with your consent.",
                "You can opt-out of promotional messages at any time.",
                "Service-related communications cannot be opted out of.",
                "Preference settings can be managed in your app profile."
            ]
        },
        {
            title: "Third-Party Links",
            content: [
                "Our platform may contain links to external services and websites.",
                "We are not responsible for third-party privacy practices.",
                "Review privacy policies of linked services before sharing information.",
                "Exercise caution when accessing external links."
            ]
        },
        {
            title: "Your Rights",
            content: [
                "You have the right to access and review your personal data.",
                "Incorrect information can be updated through our support team.",
                "You may request account deletion subject to service obligations.",
                "Contact privacy@queek.com.ng to exercise your data rights."
            ]
        },
        {
            title: "Governing Law",
            content: [
                "This Privacy Policy is governed by Nigerian Law.",
                "We comply with the Nigeria Data Protection Act 2023 (NDPA).",
                "Our practices align with the Nigeria Data Protection Regulation 2019 (NDPR).",
                "Disputes will be resolved under Nigerian jurisdiction."
            ]
        }
    ];

    return (
        <div className="bg-gray-10 dark:bg-background mb-10">
            <section className="max-w-[500px] h-full md:max-w-6xl md:px-12 pt-20 mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

                {sections.map((section, index) => (
                    <div key={index} className="bg-white dark:bg-background shadow-md rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                        <div className="space-y-4">
                            {section.content.map((item, itemIndex) => (
                                <p key={itemIndex} className="text-gray-700 dark:text-gray-300">{item}</p>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="bg-white shadow-md dark:bg-background rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        For privacy-related inquiries, please contact us at <a
                        href="mailto:privacy@queek.com.ng" className="text-blue-600 hover:underline">privacy@queek.com.ng</a>.
                        For general support, reach us at <a
                        href="mailto:support@queek.com.ng" className="text-blue-600 hover:underline">support@queek.com.ng</a>.
                    </p>
                </div>
            </section>
            <div className="h-[100px]"></div>
        </div>
    );
}
