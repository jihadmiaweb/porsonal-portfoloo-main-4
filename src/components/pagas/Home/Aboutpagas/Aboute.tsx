"use client";

import { motion } from "framer-motion";
import aboutData from "@/components/data/aboutData";

const About = () => {
    return (
        <section id="about" className="py-20 lg:px-12 bg-gray-50 dark:bg-gray-900 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">

                    {/* Left Column - Floating Image with Hover */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <motion.div
                            className="overflow-hidden rounded-xl shadow-lg"
                            animate={{ y: [0, -10, 0] }} // floating effect
                            transition={{
                                y: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 4,
                                    ease: "easeInOut",
                                },
                            }}
                            whileHover={{ scale: 1.07, rotate: 2 }}
                        >
                            <motion.img
                                src={aboutData?.image}
                                alt={aboutData?.imageAlt}
                                className="w-full h-auto object-cover rounded-xl"
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-4 pt-20">
                            <h4 className="text-indigo-500 font-semibold text-lg">About Me</h4>
                            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold">
                                {aboutData?.title}
                            </h2>
                            <p
                                className="text-gray-700 dark:text-gray-300"
                                dangerouslySetInnerHTML={{ __html: aboutData?.description }}
                            ></p>

                            <div className="flex flex-wrap gap-4 mt-6">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    href="#contact"
                                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold shadow-lg"
                                >
                                    Hire Me Now
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    href="/cv.pdf"
                                    download
                                    className="px-6 py-3 rounded-lg border-2 border-indigo-500 text-indigo-500 font-semibold hover:bg-indigo-500 hover:text-white transition-all shadow-lg"
                                >
                                    Download CV
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
