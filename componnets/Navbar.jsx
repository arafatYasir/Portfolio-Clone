import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skill", href: "#skill" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#blog" },
];

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-[25px] pt-[25px]">
            <div>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <ul className="flex items-center">
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
        </nav>
    );
};

export default Navbar;
