"use client";

import React, { useState } from "react";
import { navLinks } from "@/constants/navLinks";

export default function Navbar() {
    const [activeNav, setActiveNav] = useState<string>("#");

    return (
        <nav className='fixed bottom-16 left-1/2 -translate-x-1/2 bg-[var(--color-secondary)] backdrop-blur-sm px-8 py-4 rounded-full flex gap-4 z-50 navbar-pulse'>
            {navLinks.map(({ href, icon: Icon, id }) => (
                <a
                    key={id}
                    href={href}
                    onClick={() => setActiveNav(id)}
                    className={`...`}
                    aria-current={activeNav === id ? "page" : undefined}
                >
                    <Icon size={32} />
                </a>
            ))}
        </nav>
    );
}
