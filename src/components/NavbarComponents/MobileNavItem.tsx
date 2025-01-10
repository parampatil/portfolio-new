import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";

import { ChevronDown } from "lucide-react";
import { NavItem } from "./NavbarTypes";


const MobileNavItem = ({ item }: { item: NavItem }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="flex items-center justify-between py-2">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `transition ${isActive ? "text-yellow-300" : "hover:text-gray-300"}`
            }
          >
            {item.name}
          </NavLink>
          <CollapsibleTrigger>
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="CollapsibleContent ml-2 rounded-lg bg-white/10 pl-2">
          {item.dropdown.map((subItem) => (
            <NavLink
              key={subItem.name}
              to={subItem.path}
              className="block py-1 transition hover:text-gray-300"
            >
              {subItem.name}
            </NavLink>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  };

export default MobileNavItem;