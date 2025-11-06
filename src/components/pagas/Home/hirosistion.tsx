import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";

const Hero = () => {
    const { theme } = useTheme();
    const darkMode = theme === "dark";

    const backgroundImageStyle = {
        backgroundImage: darkMode ? "url('/imgas/biner2.jpg')" : "url('/imgas/1.jpg')",
    };

    // Parallax state
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    // Floating animation
    const [floatOffset, setFloatOffset] = useState(0);
    useEffect(() => {
        let direction = 1;
        const interval = setInterval(() => {
            setFloatOffset(prev => {
                if (prev > 10) direction = -1;
                if (prev < -10) direction = 1;
                return prev + direction * 0.3;
            });
        }, 16); // roughly 60fps
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10 to 10
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setOffset({ x, y });
    };

    const handleMouseLeave = () => {
        setOffset({ x: 0, y: 0 });
    };

    return (
        <section
            className="relative bg-cover bg-center min-h-screen flex items-center transition-all duration-700"
            style={backgroundImageStyle}
        >
            {/* Overlay */}
            <div className={`absolute inset-0 ${darkMode ? 'bg-black/60' : 'bg-black/40'} transition-colors duration-500`}></div>

            {/* ModeToggle */}
            <div className="hidden absolute top-6 right-6 z-10">
                <ModeToggle />
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-12 md:grid md:grid-cols-2 md:items-center md:gap-8 py-20 lg:py-32 w-full">

                {/* Left Column */}
                <div className="text-left space-y-6 text-white z-10">
                    <h1 className="font-poppins text-4xl md:text-5xl font-bold">
                        <div className="relative inline-block">
                            <span className="text-2xl md:text-3xl">HELLO</span>
                            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 absolute -bottom-2 left-0 rounded-full"></div>
                        </div>
                        <div className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 font-bold">
                            I AM JIHAD MIA
                        </div>
                    </h1>

                    <p className="font-poppins text-lg md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        <ReactTyped
                            strings={["Frontend Developer", "React Developer", "JavaScript Enthusiast", "UI Designer"]}
                            typeSpeed={60}
                            backSpeed={40}
                            loop
                        />
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                        <a href="https://www.linkedin.com/in/jihad-mia-aa97a1395/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white hover:scale-110 transition-transform shadow-lg"><FaLinkedin size={20} /></a>
                        <a href="https://www.facebook.com/profile.php?id=61582888187110" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className="p-3 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white hover:scale-110 transition-transform shadow-lg"><FaFacebook size={20} /></a>
                        <a href="https://github.com/jihadmiaweb" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-3 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600 text-white hover:scale-110 transition-transform shadow-lg"><FaGithub size={20} /></a>
                        <a href="https://wa.me/8801940386783" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3 rounded-full bg-gradient-to-tr from-green-400 to-green-600 text-white hover:scale-110 transition-transform shadow-lg"><RiWhatsappFill size={20} /></a>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <a href="#contact" className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg hover:scale-105 transition-transform">Hire Me</a>
                        <a href="/cv.pdf" download className="px-6 py-3 rounded-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-[#854FEE] transition-all shadow-lg bg-transparent">Get CV</a>
                    </div>
                </div>

                {/* Right Column - Hero Image */}
                <div
                    className="mt-10 md:mt-0 flex justify-center z-10"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ perspective: 1000 }}
                >
                    <img
                        src="/imgas/home-right.png"
                        alt="Jihad Mia Hero"
                        style={{
                            transform: `rotateY(${offset.x}deg) rotateX(${-offset.y}deg) translateY(${floatOffset}px) scale(1.05)`,
                            transition: "transform 0.1s ease-out",
                        }}
                        className={`w-full max-w-sm md:max-w-md h-auto rounded-xl shadow-2xl ${darkMode ? 'shadow-white/50' : 'shadow-black/50'}`}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
