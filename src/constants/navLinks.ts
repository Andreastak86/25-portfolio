import { IconType } from "react-icons";
import { GiCharacter } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { GiDiploma } from "react-icons/gi";
import { GiOpenFolder } from "react-icons/gi";
import { GiEnvelope } from "react-icons/gi";

export interface NavLink {
    id: string;
    label?: string;
    href: string;
    icon: IconType;
}

export const navLinks: NavLink[] = [
    { id: "/", label: "Hjem", href: "/", icon: GiCharacter },
    { id: "#about", label: "Om meg", href: "#about", icon: GiBookshelf },
    {
        id: "#experience",
        label: "erfaring",
        href: "#experience",
        icon: GiDiploma,
    },
    {
        id: "#portfolio",
        label: "Portfolio",
        href: "#portfolio",
        icon: GiOpenFolder,
    },
    { id: "#contact", label: "Kontakt", href: "#contact", icon: GiEnvelope },
];
