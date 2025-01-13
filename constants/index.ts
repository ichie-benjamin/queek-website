// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'services', label: 'Services', sub_menu :
            [
            { href: '/services', key: 'all_services',
                label: 'All Services',
                description : "Get started with queek"
            },
                { href: '/services#food_delivery', key: 'food_delivery',
                image : "/images/services/gloceries.jpeg",
                label: 'Food and Grocery Delivery',
                description : "Get your groceries and meals delivered to your doorstep hassle-free with Queek's Food and Grocery Delivery service."
            },
            { href: '/services#home_cleaning', key: 'house_cleaning',
                image : "/images/services/house_cleaning.jpeg",
                label: 'Home Cleaning',
                description : "Queek Clean offers thorough and trustworthy cleaning services, transforming your home into a haven of cleanliness and order, so you can relax and enjoy without the burden of chores."
            },

            { href: '/services#utility_payment', key: 'utility_payment',
                image : "/images/services/pay_bill.jpeg",
                label: 'Utility Payments',
                description : "Queek BillPay makes settling bills swift, secure, and hassle-free. From airtime to water bills, manage all your payments effortlessly."
            },

            { href: '/services#laundry', key: 'laundry',
                image : "/images/services/laundry.jpeg",
                label: 'Laundry Services',
                description : "Experience meticulous care for your garments with Queek Laundry. Your clothes are cleaned and treated with high-quality detergents for longevity."
            },

        ] },

    { href: '/contact', key: 'contact_us', label: 'Contact Us' },
    { href: '/store', key: 'store', label: 'Store' },
    { href: '/business', key: 'business', label: 'Business' },
];

export const SERVICES =  [
    { href: '/', key: 'food_delivery',
        image : "/images/services/gloceries.jpeg",
        label: 'Food and Grocery',
        items : ['Shoprite','Market Square','Kilimanjoro','and many more'],
        description : "Get your groceries and meals from your favourite supermarket & fast-food delivered to your doorstep hassle-free with Queek's Food and Grocery Delivery service."
    },
    { href: '/', key: 'house_cleaning',
        image : "/images/services/house_cleaning.jpeg",
        label: 'Home Cleaning',
        items : ['Scheduled home cleaning','On demand cleaning','Compound Cleaning'],
        description : "Queek Clean offers thorough and trustworthy cleaning services, transforming your home into a haven of cleanliness and order, so you can relax and enjoy without the burden of chores."
    },

    { href: '/', key: 'utility_payment',
        image : "/images/services/pay_bill.jpeg",
        label: 'Utility Payments',
        items : ['Airtime','Data','Electricity','and more ...'],
        description : "Queek BillPay makes settling bills swift, secure, and hassle-free. From airtime to water bills, manage all your payments effortlessly."
    },

    { href: '/', key: 'laundry',
        image : "/images/services/laundry.jpeg",
        label: 'Laundry Services',
        items: ['Garment'],
        description : "Experience meticulous care for your garments with Queek Laundry. Your clothes are cleaned and treated with high-quality detergents for longevity."
    },

]

// CAMP SECTION
export const PEOPLE_URL = [
    '/images/person-1.png',
    '/images/person-2.png',
    '/images/person-3.png',
    '/images/person-4.png',
];

export const CONTACT_DETAIL = [
    {
        "method": "Email",
        "address": "support@queek.com.ng",
        "description": "For general inquiries, feedback, or support issues, please don't hesitate to email us at support@queek.com. Our dedicated team of customer support representatives is standing by to assist you with any questions or concerns you may have. We strive to respond to all emails promptly, so you can expect a quick and helpful response from us."
    },
    {
        "method": "Phone",
        "number": "+2348030407060",
        "business_hours": "Monday through Saturday from 8:00 AM to 7:00 PM",
        "description": "If you prefer to speak with a member of our " +
            "team directly, you can reach us via phone at +2348030407060. " +
            "Our customer service representatives are available to assist " +
            "you during our business hours, Monday through Friday from " +
            "9:00 AM to 5:00 PM. Whether you need help with a booking, " +
            "have a billing question, or just want to chat, we're here to " +
            "lend an ear and provide assistance."
    },
    {
        "method": "Live Chat",
        "description": "For real-time assistance, you can chat with us directly through the Livechat and initiate a chat with one of our friendly customer service agents. We understand that some issues require immediate attention, and our live chat feature allows us to provide you with timely assistance whenever you need it."
    }
]
export const WHYCHOOSEUS = [
    {
        title: "Time-Saving Convenience",
        description:
            "With Queek, mundane tasks become effortless. Say goodbye to long queues and time-consuming errands. With just a few taps, you can book a make your deliveries, pay your utility bills, order groceries, or schedule a home cleaning, freeing up valuable time for more important things in life.",
    },
    {
        title: "Trust in Reliability",
        description:
            "Queek partners with only the most reputable and dependable service providers, ensuring that every interaction is met with professionalism and reliability. Rest assured that your needs will be met promptly and efficiently, every time.",
    },
    {
        title: "Exceptional Support",
        description:
            "Our dedicated customer support team is available around the clock to assist you with any questions or concerns you may have. Whether it's troubleshooting an issue or providing guidance, we're here to ensure your experience with Queek is nothing short of exceptional.",
    },
    {
        title: "Innovation at Your Fingertips",
        description:
            "Queek is continuously evolving to meet the ever-changing needs of our users. From introducing new features to expanding our service offerings, we're committed to staying ahead of the curve and providing you with the best possible experience. " +
            "With Queek, you can trust that you're always at the forefront of innovation.",
    },
    {
        title: "All-in-One Convenience:",
        description:
            "Queek is your one-stop destination for all your essential needs. From delivery to errands, home services, and utility payments, Queek offers a comprehensive suite of services, all accessible through one convenient app.",
    },
    {
        title: "Seamless Integration",
        description:
            "Queek seamlessly integrates all aspects of your life, making it easy to manage your day-to-day activities from one centralized platform. No more switching between multiple apps – Queek brings everything together for a smoother, more cohesive experience",
    },
]
export const WHYPARTNER = [
    {
        "title": "Increased Visibility",
        "description": "As a Queek vendor, your products or services will be showcased to our extensive customer base, giving you exposure to a wider audience and helping you attract new customers."
    },
    {
        "title": "Convenient Platform",
        "description": "Queek provides a user-friendly platform for customers to discover and purchase goods and services. By joining Queek as a vendor, you'll gain access to our streamlined system, making it easy to manage orders and fulfill customer requests."
    },
    {
        "title": "Marketing Support",
        "description": "We're dedicated to helping our vendors succeed. That's why we offer marketing support to promote your products or services to our customers through targeted campaigns and promotions."
    }
]


// FEATURES SECTION
export const FEATURES = [
    {
        title: 'Real maps can be offline',
        icon: '/images/map.svg',
        variant: 'green',
        description:
            'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
        title: 'Set an adventure schedule',
        icon: '/images/calendar.svg',
        variant: 'green',
        description:
            "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    },
    {
        title: 'Technology using augment reality',
        icon: '/images/tech.svg',
        variant: 'green',
        description:
            'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
        title: 'Many new locations every month',
        icon: '/images/location.svg',
        variant: 'orange',
        description:
            'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
];
export const PROMOS = [
    {
        title: 'Enjoy unlimited free delivery on Queek groceries',
        icon: '/images/logo.svg',
        image: '/images/fruit_basket.png',
     },
    {
        title: 'Get 10% off on laundry',
        icon: '/images/logo.svg',
        image: '/images/washing-machine.png',
     },
    {
        title: 'Get 20% off on home cleaning',
        icon: '/images/logo.svg',
        image: '/images/mop.png',
     },

];
export const FAQS = [
    {
        "title": "What services does Queek offer?",
        "description": "Queek offers a wide range of services including pickup and delivery, food and grocery delivery, home cleaning, laundry services, car wash, and utility bill payments, all accessible through one convenient platform."
    },
    {
        "title": "How do I book a service on Queek?",
        "description": "Booking a service on Queek is simple. Just download the app, sign up for an account, and browse through the available services. Once you find what you need, follow the prompts to book and schedule your service."
    },
    {
        "title": "Is Queek available in my area?",
        "description": "Queek is continuously expanding to serve more areas. To check if Queek is available in your area, simply download the app. You'll be notified if Queek services are available in your vicinity."
    },
    {
        "title": "How can I pay for services on Queek?",
        "description": "Queek wallet enables you make instant payment from your wallet balance. You can securely add your credit/debit card to your Queek account for easy wallet funding & transactions."
    },
    {
        "title": "Are the service providers on Queek vetted?",
        "description": "Yes, Queek carefully vets all service providers to ensure they meet our standards for quality and reliability. You can trust that the providers on Queek are skilled and trustworthy"
    },
    {
        "title": "Can I schedule recurring services on Queek?",
        "description": "Yes, Queek offers the option to schedule recurring services for your convenience. Whether it's weekly home cleanings or monthly car washes, you can set up a recurring schedule to have your services automatically booked at your preferred intervals."
    },
    {
        "title": "How can I contact Queek customer support?",
        "description": "If you have any questions or need assistance, you can contact Queek customer support directly through the app. Simply navigate to the support section and reach out to our team via chat or email. We're here to help!"
    }
];
export const WHYUS = [
    {
        title: 'Super fast delivery.',
        id: 'super_fast_delivery',
        description: 'We’ll only need 30-40 minutes to get your product into your customer’s hands.',
        icon: '/images/clock.png',
     },
    {
        title: 'Reliable delivery riders',
        id: 'reliable_delivery_riders',
        description: 'Queek’s advanced mapping and dispatching tech ' +
            'finds the fastest, cheapest route for you.',
        icon: '/images/bike.png',
     },
    {
        title: 'Real-time tracking.',
        id: 'real-time_tracking',
        description: "Check in any time to see where your delivery is " +
            "and when it’ll reach your customer.",
        icon: '/images/tracking.png',
    },

];

// FOOTER SECTION
export const FOOTER_LINKS = [
    {
        title: 'Learn More',
        links: [
            'About Queek',
            'Press Releases',
            'Environment',
            'Jobs',
            'Privacy Policy',
            'Contact Us',
        ],
    },
    {
        title: 'Our Services',
        links: ['Food & Glocery', 'Utility Payment', 'Laundry', 'Car Wash'],
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        { label: 'Contact Us', value: '+2349014412477' },
        { label: 'Email', value: 'support@queek.com.ng' },
    ],
};

export const SOCIALS = {
    title: 'Social',
    links: [
        '/images/facebook.svg',
        '/images/instagram.svg',
        '/images/twitter.svg',
        '/images/youtube.svg',
    ],
};


