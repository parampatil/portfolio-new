import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Footer = () => {
    const footerLinks = [
        {
            title: "Home",
            path: "/",
            links: [
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Contact Me", path: "/contact" },
            ],
        },
        {
            title: "About",
            path: "/about",
            links: [
                { name: "Introduction", path: "/about#introduction" },
                { name: "Skills", path: "/about#skills" },
                { name: "Education", path: "/about#education" },
                { name: "Experience", path: "/about#experience" },
                { name: "Achievements", path: "/about#achievements" },
            ],
        },
        {
            title: "Projects",
            path: "/projects",
            links: [
                { name: "Research Papers", path: "/projects#research-papers" },
                { name: "Projects", path: "/projects#projects" },
            ],
        },
        {
            title: "Blogs",
            path: "/blogs",
            links: [{ name: "Blogs", path: "/blogs" }],
        },
        {
            title: "Hobby",
            path: "/hobby",
            links: [
                { name: "YouTube", path: "/hobby#youtube" },
                { name: "Photography", path: "/hobby#photography" },
            ],
        },
    ];

    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <motion.footer 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="bg-gray-800 text-white p-8"
            ref={ref}
        >
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-left">
                {footerLinks.map((section, index) => (
                    <div key={section.title}>
                        <motion.h3 
                            className="text-lg font-bold mb-4"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                            transition={{ type: "spring", stiffness: 100, delay: index * 0.5 }}
                            style={{ color: 'lightgreen' }}
                        >
                            <Link to={section.path} className="hover:text-gray-400">
                                {section.title}
                            </Link>
                        </motion.h3>
                        <ul className="space-y-2">
                            {section.links.map((link, linkIndex) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                                    transition={{ type: "spring", stiffness: 100, delay: (index * 0.5) + (linkIndex * 0.1) }}
                                >
                                    <Link to={link.path} className="hover:text-gray-400">
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.footer>
    );
};

export default Footer;
