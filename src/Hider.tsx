import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { ModeToggle } from "@/components/mode-toggle";

// --- Data Array ---
const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Learn", link: "#learn" },
    { name: "Contact", link: "#contact" },
    { name: "Blog", link: "#blog" },
];

// --- Social Icons ---
const SocialIcons = () => (
    <div className="flex gap-4 items-center">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-200 hover:text-sky-300 transition duration-200">
            <FaTwitter size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-200 hover:text-blue-400 transition duration-200">
            <FaLinkedinIn size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-200 hover:text-pink-400 transition duration-200">
            <FaInstagram size={20} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-200 hover:text-blue-400 transition duration-200">
            <FaFacebookF size={20} />
        </a>
        <ModeToggle />
    </div>
);

function Hider() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const mobileMenuClasses = `
    md:hidden
    bg-indigo-700
    w-full px-6 pb-4
    fixed left-0 shadow-xl z-40
    transition-all duration-300 ease-in-out
    ${open ? 'top-[72px] opacity-100' : 'top-[-500px] opacity-0 pointer-events-none'}
  `;

    return (
        <nav aria-label="Main Navigation" className="relative">
            {/* Solid Background */}
            <div className="bg-white dark:bg-blue-950 shadow relative z-50"></div>

            {/* Fixed Navbar */}
            <div className="flex justify-between items-center fixed top-0 left-0 w-full h-[72px] shadow-md px-6 md:px-12 z-50">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3 focus:outline-none rounded-lg p-1 -m-1">
                    {/* Animated Gradient Logo */}
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 animate-gradient-logo"
                        style={{ background: "linear-gradient(270deg, #F472B6, #A78BFA, #60A5FA, #22D3EE)", backgroundSize: "400% 400%" }}
                    >
                        JM
                    </div>

                    {/* Name & Role with gradient text animation */}
                    <div className="hidden sm:block">
                        <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-transparent bg-clip-text animate-gradient-text">
                            Jihad Mia
                        </span>
                        <p className="text-sm font-medium bg-gradient-to-r from-teal-400 via-indigo-400 to-pink-500 text-transparent bg-clip-text animate-gradient-text">
                            Frontend Developer
                        </p>
                    </div>
                </a>

                {/* Desktop Links */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.link}
                                    className={`px-4 py-2 rounded-xl transition-all duration-300 ease-in-out ${location.pathname === item.link
                                            ? "bg-[#854FEE] text-white shadow-md"
                                            : "text-gray-600 hover:text-[#854FEE] hover:bg-[#854fee1a]"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Social Icons Desktop */}
                <div className="hidden lg:flex">
                    <SocialIcons />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white p-2 z-50 ml-4"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                    <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className={mobileMenuClasses} role="region" aria-label="Mobile Navigation Links">
                <div className="flex flex-col gap-2 font-bold text-gray-200 mt-4">
                    {navLinks.map(link => (
                        <Link
                            key={link.name}
                            to={link.link}
                            onClick={() => setOpen(false)}
                            className={`py-2 pl-2 rounded transition duration-150 hover:bg-indigo-800 hover:text-white
                ${location.pathname === link.link ? 'bg-indigo-800 text-white' : ''}
              `}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="mt-6 border-t pt-6 border-gray-400">
                        <SocialIcons />
                    </div>
                </div>
            </div>

            {/* Page Content */}
            <div className="pt-[72px]">
                <Outlet />
            </div>

            {/* Animation Keyframes */}
            <style>{`
        @keyframes gradient-logo {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-logo {
          animation: gradient-logo 8s ease infinite;
        }

        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background-size: 400% 400%;
          animation: gradient-text 8s ease infinite;
        }
      `}</style>
        </nav>
    );
}

export default Hider;
