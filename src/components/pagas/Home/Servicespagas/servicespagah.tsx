"use client";

import React, { type JSX } from "react";
import { motion, type Variants, } from "framer-motion";
import { Code, Database, Server, Component } from "lucide-react";

interface Service {
    title: string;
    desc: string;
    icon: JSX.Element;
}

interface ServiceCardProps {
    service: Service;
    delay: number;
    index: number;
}

const services: readonly Service[] = [
    { title: "Frontend Development", desc: "Building fast, responsive, and user-friendly web interfaces using React, Next.js, and modern CSS frameworks.", icon: <Component /> },
    { title: "Backend Development", desc: "Creating secure and scalable backend systems using Node.js, Express, and modern databases.", icon: <Server /> },
    { title: "Full-Stack Integration", desc: "Seamlessly connecting frontend and backend to deliver complete, production-ready web applications.", icon: <Code /> },
    { title: "Database Design", desc: "Designing and optimizing database structures using MongoDB, MySQL, and Firebase for better performance.", icon: <Database /> },
];

// Variants
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom,
            duration: 0.6,
            type: "spring",
            stiffness: 120,
            damping: 12,
        },
    }),
    float: {
        y: [0, -10, 0],
        transition: { repeat: Infinity, repeatType: "loop", duration: 3, ease: "easeInOut" },
    },
};

const ServiceCard = React.memo(({ service, delay, index }: ServiceCardProps) => {
    const colors = ["text-sky-500", "text-green-500", "text-yellow-500", "text-indigo-500"];
    const iconColor = colors[index % colors.length];
    const hoverGradient = "hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white";

    return (
        <motion.div
            className={`group w-full max-w-sm p-8 flex flex-col items-center text-center rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 dark:bg-gray-800 dark:ring-gray-700 transition-all duration-500 transform hover:shadow-2xl hover:scale-[1.03] hover:ring-0 ${hoverGradient} cursor-pointer`}
            role="article"
            tabIndex={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={delay}
            animate="float"
        >
            <div className="mb-4 mt-2 transition-colors duration-500">
                {React.cloneElement(service.icon, {
                    className: `${iconColor} group-hover:text-white transition-colors duration-500`,
                    size: 48,
                    strokeWidth: 2,
                })}
            </div>
            <h2 className="text-xl font-extrabold mb-3 text-gray-900 dark:text-white group-hover:text-white">{service.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-200">{service.desc}</p>
        </motion.div>
    );
});

export default function Services() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-inter transition-colors duration-300 py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Our Core <span className="font-bold">Development Services</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        We blend cutting-edge technologies with best practices to deliver robust, scalable, and delightful applications across the entire stack.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} delay={index * 0.15} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <motion.button
                        className="px-8 sm:px-10 py-3 sm:py-4 bg-indigo-600 text-white font-bold text-base sm:text-lg rounded-full shadow-xl hover:bg-indigo-700 transition duration-300 transform"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToContact}
                    >
                        CONTACT ME
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
