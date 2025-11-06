// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left Side: Text */}
                <p className="text-sm text-center md:text-left">
                    © 2025 <span className="text-white font-semibold">JIHAD MIA</span>
                </p>

                {/* Middle: Links */}
                <nav className="flex gap-5 text-sm font-medium">
                    <Link to="/about" className="hover:text-white transition">About</Link>
                    <Link to="/learn" className="hover:text-white transition">Learn</Link>
                    <Link to="/portfolio" className="hover:text-white transition">Portfolio</Link>
                    <Link to="/blog" className="hover:text-white transition">Blog</Link>
                    <Link to="/contact" className="hover:text-white transition">Contact</Link>
                </nav>

                {/* Right Side: Social Icons */}
                <div className="flex gap-4 text-lg">
                    <Link to="https://github.com/jihadmiaweb" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaGithub />
                    </Link>
                    <Link to="/https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaLinkedin />
                    </Link>
                    <Link to="/https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
