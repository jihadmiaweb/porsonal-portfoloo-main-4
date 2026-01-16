import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const CV = () => {
    const cvRef = useRef();

    const handleDownloadPDF = async () => {
        if (!cvRef.current) return;

        const input = cvRef.current;
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // Capture canvas
        const canvas = await html2canvas(input, { scale: 2, useCORS: true });
        const imgData = canvas.toDataURL("image/png");

        const imgProps = pdf.getImageProperties(imgData);
        const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

        // Scale to fit one page
        const scale = pageHeight / pdfHeight;

        pdf.addImage(imgData, "PNG", 0, 0, pageWidth, pdfHeight * scale);
        pdf.save("Siam_Sheikh_CV.pdf");
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-50 text-gray-900 font-sans">


            {/* CV Content */}
            <div ref={cvRef} className="man-h-screen">
                {/* Header */}
                <header className="text-center mb-6">
                    <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">JIHAD MIA</h1>
                    <p className="text-lg sm:text-xl text-gray-700">Front-End Developer</p>

                    <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm text-gray-600">
                        <span>📞 +8801940386783</span>
                        <span>📞 +8801940386783</span>

                        <span>✉ jihadmiaweb@gmail.com</span>
                    </div>

                    <div className="flex justify-center mt-1 space-x-4 text-sm text-gray-600">
                        <a href="https://github.com/jihadmiaweb" className="hover:text-blue-500">GitHub </a>
                        <a href="https://www.linkedin.com/in/jihad-mia-aa97a1395/" className="hover:text-blue-500">LinkedIn </a>
                        <a href="https://jihad-porsonall-portfolio-2.vercel.app/" className="hover:text-blue-500">Portfolio</a>
                    </div>
                </header>

                {/* Career Objective */}
                <section className="mb-4">
                    <h2 className="text-blue-600 font-semibold border-b border-gray-300 pb-1 mb-2">Career Objective</h2>
                    <p>
                        Passionate and detail-oriented Front-End Developer with expertise in building scalable,
                        responsive, and user-focused web applications using React, Next.js, and modern front-end
                        technologies. Dedicated to writing clean, efficient code and continuously improving UI/UX.
                    </p>
                </section>

                {/* Education */}
                <section className="mb-4">
                    <h2 className="text-blue-600 font-semibold border-b border-gray-300 pb-1 mb-2">Education</h2>
                    <p><span className="font-semibold">Govt Adiabad Islamia High School & College<br /></span>
                        (Intermediate / HSC level)
                    </p>
                    <p><span className="font-semibold">Ahmad’s Education</span> — 2025<br />Course: English Language & Web Development</p>
                </section>

                {/* Technical Skills */}
                <section className="mb-4">
                    <h2 className="text-blue-600 font-semibold border-b border-gray-300 pb-1 mb-2">Technical Skills</h2>
                    <ul className="list-disc list-inside">
                        <li><span className="font-semibold">Front-End:</span> HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js</li>
                        <li><span className="font-semibold">Back-End:</span> Node.js, Express.js, MongoDB, Mongoose</li>
                        <li><span className="font-semibold">Version Control:</span> Git, GitHub</li>
                    </ul>
                </section>

                {/* Projects */}
                <section className="mb-4">
                    <h2 className="text-blue-600 font-semibold border-b border-gray-300 pb-1 mb-2">Projects</h2>
                    <div className="mb-2">
                        <p className="font-semibold">
                            Educational Website — <a href="https://online-mdrasha-web-site.vercel.app/" className="text-blue-500 hover:underline">Live</a> | <a href="https://github.com/jihadmiaweb/Online-mdrasha-web-site" className="text-blue-500 hover:underline">GitHub</a>
                        </p>
                        <p>An interactive educational platform with content, videos, and audio lessons. Fully responsive and user-friendly.</p>
                        <span className="text-14px">Technologies: HTML, CSS, React, Tailwind CSS</span>
                    </div>

                    <div className="mb-2">
                        <p className="font-semibold">
                            Blog Website — <a href="https://conten-bolog-site.vercel.app/" className="text-blue-500 hover:underline">Live</a> | <a href="https://github.com/jihadmiaweb/Conten-Bolog-site" className="text-blue-500 hover:underline">GitHub</a>
                        </p>
                        <p>Responsive blog with educational articles, comments, and clean UI.</p>
                        <span className="text-14px">Technologies: HTML, CSS, React, Tailwind CSS</span>
                    </div>

                    <div className="mb-2">
                        <p className="font-semibold">
                            Portfolio Website — <a href="https://porsonal-wevsite.vercel.app/" className="text-blue-500 hover:underline">Live</a> | <a href="https://github.com/jihadmiaweb/porsonal-wevsite" className="text-blue-500 hover:underline">GitHub</a>
                        </p>
                        <p>Personal portfolio with interactive sections, animations, and responsive design.</p>
                        <span className="text-14px">Technologies: HTML, CSS, React, Tailwind CSS</span>
                    </div>
                </section>

                {/* Languages */}
                <section className="mb-3">
                    <h2 className="text-blue-600 font-semibold border-b border-gray-300 pb-1 mb-2">Languages</h2>
                    <p>Bangla (Native) | English (Fluent)</p>
                </section>

                {/* Certifications */}

            </div>
        </div>
    );
};

export default CV;
