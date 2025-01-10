import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

import MobileNavItem from "./MobileNavItem";

import { NavItem } from "./NavbarTypes";

interface MobileSidebarProps {
    navItems: NavItem[];
    user: boolean;
    handleSignOut: () => void;
  }
  
  const MobileSidebar = ({
    navItems,
    user,
    handleSignOut,
  }: MobileSidebarProps) => {
    return (
      <Sheet modal={false}>
        <SheetTrigger>
          <Menu size={24} className="text-black dark:text-white"/>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-transparent bg-gradient-to-r from-black/95 to-gray-800/90 text-white"
        >
          <div className="p-4">
            {navItems.map((item) => (
              <MobileNavItem key={item.name} item={item} />
            ))}
            {user && (
              <>
                <NavLink
                  to="/admin"
                  className="block py-2 transition hover:text-gray-300"
                >
                  Admin
                </NavLink>
                <button
                  onClick={handleSignOut}
                  className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium transition hover:bg-red-600"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    );
  };

export default MobileSidebar;