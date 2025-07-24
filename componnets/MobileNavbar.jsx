"use client";

import MenuIcon from "@/icons/MenuIcon";
import Link from "next/link";
import { useState } from "react";

const MobileNavbar = () => {
    const [showNav, setShowNav] = useState(false);

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Skill", href: "#skill" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
        { label: "Blog", href: "#blog" },
    ];

    return (
        <>
            <button onClick={() => setShowNav(prev => !prev)} className="bg-[#00cf5d] p-[10.5px] rounded-[4px] sm:hidden">
                <MenuIcon />
            </button>

            {showNav && (
                <ul className="w-[345px] h-[300px] bg-[#1d293a] absolute top-[80px] left-[16px] z-10 rounded-[4px] transition p-[20px] flex flex-col justify-between">
                    {navLinks.map(({ label, href }) => (
                        <li key={label} className="mx-[15px]">
                            <Link
                                href={href}
                                className="uppercase text-base font-normal text-white/85 leading-[26px]"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}

                    <li className="mx-[15px]">
                        <Link
                            href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="uppercase text-base font-normal border-2 border-[#00cf5d] px-[15px] py-[8px] leading-[26px] rounded-[4px] text-white/85"
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            )}
        </>
    );
};

export default MobileNavbar;