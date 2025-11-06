import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-white dark:bg-blue-950 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 py-8 mt-10">
            <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* --- Left Side --- */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-transparent bg-clip-text">
                        Jihad Mia
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Frontend Developer | React • Tailwind • Next.js
                    </p>
                    <p className="text-xs mt-1 text-gray-400">
                        © {new Date().getFullYear()} Jihad Mia. All rights reserved.
                    </p>
                </div>

                {/* --- Center Social Icons --- */}
                <div className="flex gap-4 text-lg">
                    <a
                        href="https://www.facebook.com/profile.php?id=61582888187110"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#1877F2] text-white hover:scale-110 transition-transform"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jihad-mia-aa97a1395/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#0A66C2] text-white hover:scale-110 transition-transform"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/jihadmiaweb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-800 text-white hover:scale-110 transition-transform"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:scale-110 transition-transform"
                    >
                        <FaInstagram />
                    </a>
                </div>

                {/* --- Right Side Links --- */}
                <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium">
                    <a href="#home" className="hover:text-[#854FEE] transition">Home</a>
                    <a href="#about" className="hover:text-[#854FEE] transition">About</a>
                    <a href="#portfolio" className="hover:text-[#854FEE] transition">Portfolio</a>
                    <a href="#contact" className="hover:text-[#854FEE] transition">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
