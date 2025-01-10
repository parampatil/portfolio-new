import { Link } from 'react-router-dom';

interface ButtonThemedProps {
    to: string;
    className?: string;
    children: React.ReactNode;
}

const ButtonThemed: React.FC<ButtonThemedProps> = ({ to, className, children }) => {
    return (
        <Link
            to={to}
            className={`my-auto flex h-fit w-fit items-center rounded-lg bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 px-6 py-2 text-center font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:text-white ${className}`}
        >
            {children}
        </Link>
    );
};

export default ButtonThemed;