import React from "react";

// --- Type Definitions ---
interface Project {
    id: number;
    title: string;
    description: string;
    img: string;
    link?: string; // optional link
    tech: string[];
}

// --- Projects Data ---
const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Modern Landing Page",
        description:
            "A clean, responsive landing page designed for fast loading and smooth user experience. Built with Tailwind CSS to look perfect on mobile, tablet, and desktop devices.",
        img: "/imgas/1.png",
        link: "https://my-portfolio-main-6c7cone4p-jihad-mias-projects-d29a1189.vercel.app/",
        tech: ["HTML", "React", "CSS", "Tailwind", "JavaScript"],
    },
    {
        id: 2,
        title: "Educational Website",
        description:
            "A full-featured school website showcasing courses, announcements, and an easy contact form. Developed with HTML, CSS, and JavaScript for a clear UI.",
        img: "/imgas/2.png",
        link: "https://online-mdrasha-web-site.vercel.app/",
        tech: ["HTML", "React", "CSS", "Tailwind", "JavaScript"],
    },
    {
        id: 3,
        title: "Personal Website",
        description:
            "A stylish restaurant site featuring menu display, online reservations, and contact details. Fully responsive so visitors can browse and book from any device.",
        img: "/imgas/3.png",
        link: "https://porsonal-wevsite.vercel.app/",
        tech: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
    },
];

// --- Custom Hook ---
const useProjects = (): Project[] => PROJECTS_DATA;

// --- Tech Stack Component ---
interface TechStackProps {
    tech: string[];
}

const TechStack: React.FC<TechStackProps> = ({ tech }) => (
    <div className="flex flex-wrap gap-2 mt-4" aria-label="Technologies used">
        {tech.map((skill) => (
            <span
                key={skill}
                className="px-3 py-1 rounded-full border border-purple-500 text-purple-300 text-xs font-medium dark:bg-gray-950  hover:bg-purple-900 transition duration-150"
            >
                {skill}
            </span>
        ))}
    </div>
);

// --- Project Card Component ---
interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const hasLink = !!project.link;
    const overlayText = hasLink ? "View Live Site" : "Details Coming Soon";

    const cardContent = (
        <div className="h-full rounded-2xl overflow-hidden shadow-xl bg-gray-900 transition duration-300 transform hover:shadow-2xl hover:scale-[1.02] flex flex-col group">
            {/* Image & Hover Overlay */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    loading="lazy"
                    src={project.img}
                    alt={`Preview of ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                    className={`absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 ${hasLink ? "group-hover:opacity-100 cursor-pointer" : ""
                        }`}
                >
                    <span className="text-white text-lg font-bold border-2 border-purple-400 px-6 py-2 rounded-full uppercase tracking-wide">
                        {overlayText}
                    </span>
                </div>
            </div>

            {/* Card Content */}
            <div className="flex-grow bg-gray-800 p-6 border-t-4 border-purple-500 flex flex-col justify-between transition duration-300">
                <div>
                    <h4 className="text-white font-extrabold text-xl mb-2 tracking-wide">
                        {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
                <TechStack tech={project.tech} />
            </div>
        </div>
    );

    if (hasLink) {
        return (
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live project: ${project.title}`}
                className="block h-full"
            >
                {cardContent}
            </a>
        );
    }

    return cardContent;
};

// --- Main Projects Container ---
const CartProject: React.FC = () => {
    const projects = useProjects();

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="sr-only">Project Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default CartProject;
