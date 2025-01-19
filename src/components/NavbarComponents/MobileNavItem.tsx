import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SheetClose } from "@/components/ui/sheet";

import { ChevronDown } from "lucide-react";
import { NavItem } from "./NavbarTypes";

const MobileNavItem = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center justify-between py-2">
        <SheetClose asChild>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `transition ${isActive ? "text-yellow-300" : "hover:text-gray-300"}`
            }
          >
            {item.name}
          </NavLink>
        </SheetClose>
        <CollapsibleTrigger>
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="CollapsibleContent ml-2 rounded-lg bg-white/10 pl-2">
        {item.dropdown.map((subItem) => (
          <SheetClose asChild>
            <NavLink
              key={subItem.name}
              to={subItem.path}
              className="block py-1 transition hover:text-gray-300"
            >
              {subItem.name}
            </NavLink>
          </SheetClose>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MobileNavItem;
