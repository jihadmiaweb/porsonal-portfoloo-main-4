import { BiSolidPhoneCall } from "react-icons/bi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";

function RightContact() {
    // Reusable Tailwind classes for icons
    const iconClasses =
        "bg-gray-500 cursor-pointer text-[65px] text-black p-5 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300";

    const smallIconClasses =
        "bg-gray-500 cursor-pointer text-[45px] text-black p-3 rounded-full hover:bg-[#16F2B3] hover:scale-105 transition-all duration-300";

    // Social links array (to make code DRY)
    const socialLinks = [
        { href: "https://github.com/jihadmiaweb", icon: <FaGithub className={iconClasses} />, label: "GitHub Profile" },
        { href: "https://www.linkedin.com/in/jihad-mia-aa97a1395/", icon: <IoLogoLinkedin className={iconClasses} />, label: "LinkedIn Profile" },
        { href: "https://www.instagram.com/", icon: <FaInstagram className={iconClasses} />, label: "Instagram Profile" },
        { href: "https://www.facebook.com/profile.php?id=61582888187110", icon: <TiSocialFacebookCircular className={`${iconClasses} hidden sm:block`} />, label: "Facebook Profile" },
    ];

    return (
        <div className="lg:w-1/2 rounded-2xl bg-gray-900 flex items-start text-white">
            {/* Contact Info */}
            <div className="lg:pl-20 pt-8">
                {/* Email */}
                <div className="flex gap-5 md:pt-20 mb-7 items-center">
                    <MdOutlineAlternateEmail className={smallIconClasses} />
                    <a
                        href="mailto:jihadmiaweb@gmail.com"
                        className="text-xl hover:underline"
                    >
                        jihadmiaweb@gmail.com
                    </a>
                </div>

                {/* Phone */}
                <div className="flex gap-5 mb-7 items-center">
                    <BiSolidPhoneCall className={smallIconClasses} />
                    <a
                        href="tel:+8801940386783"
                        className="hover:underline text-xl"
                    >
                        +8801940386783
                    </a>
                </div>

                {/* Location */}
                <div className="flex gap-5 items-center">
                    <LuMapPin className={smallIconClasses} />
                    <p className="text-xl">Dhaka, Bangladesh</p>
                </div>

                {/* Social Icons */}
                <div className="flex flex-wrap gap-10 mt-12">
                    {socialLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            aria-label={item.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Vertical CONTACT Button */}
            <div className="ml-5">
                <button className="hidden md:mt-15 sm:block font-bold border borderAnimation px-3 py-2 [writing-mode:vertical-rl] text-center relative">
                    CONTACT
                    <span className="absolute top-[102px] right-[17px] bg-white w-[1px] h-20 animated-line"></span>
                </button>
            </div>
        </div>
    );
}

export default RightContact;
