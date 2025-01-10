interface NavItem {
    name: string;
    path: string;
    dropdown: { name: string; path: string }[];
  }

export type { NavItem };