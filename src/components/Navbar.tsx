import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/state/authStore";
import { signOut } from "firebase/auth";
import { auth } from "@/features/auth/firebase";

const Navbar = () => {
    const { user, setUser } = useAuthStore();
    const navigate = useNavigate();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blogs", path: "/blogs" },
        { name: "Hobby", path: "/hobby" },
        { name: "Contact Me", path: "/contact" },
    ];

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null); // Clear the user from Zustand store
            navigate("/login"); // Redirect to login page after sign out
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <motion.nav 
            initial={{ y: -100 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    className="text-xl font-bold cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    My Portfolio
                </motion.div>
                <div className="flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            to={item.path} 
                            className={"hover:text-gray-300 transition"}
                        >
                            {item.name}
                        </Link>
                    ))}
                    {user ? (
                        <>
                            <Link 
                                to="/admin" 
                                className={"hover:text-gray-300 transition"}
                            >
                                Admin
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleSignOut}
                                className="bg-red-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition"
                            >
                                Sign Out
                            </motion.button>
                        </>
                    ) : (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate("/login")}
                            className="bg-green-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition"
                        >
                            Log In
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
