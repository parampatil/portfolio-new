import { motion, useInView } from "motion/react"; // Ensure correct package name
import { Link } from "react-router-dom";
import { useRef } from "react";

import { navItems } from "@/components/NavbarComponents/NavbarMenuItems";

const Footer = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    
    // Parent and child animation variants
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger animation for child elements
                delayChildren: 0.3, // Start after a slight delay
            },
        },
    };

    const sectionVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15, // Smooth effect
            },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 10,
            },
        },
    };

    return (
        <motion.footer
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            ref={ref}
            className="bg-gray-800 text-white p-8"
        >
            <motion.div
                className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-left"
                variants={containerVariants}
            >
                {navItems.map((section) => (
                    <motion.div
                        key={section.name}
                        variants={sectionVariants}
                        className="mb-6"
                    >
                        <h3 className="text-lg font-bold mb-4" style={{ color: "lightgreen" }}>
                            <Link to={section.path} className="hover:text-gray-400">
                                {section.name}
                            </Link>
                        </h3>
                        <motion.ul className="space-y-2" variants={containerVariants}>
                            {section.dropdown.map((link) => (
                                <motion.li key={link.name} variants={linkVariants}>
                                    <Link to={link.path} className="hover:text-gray-400">
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </motion.div>
        </motion.footer>
    );
};

export default Footer;