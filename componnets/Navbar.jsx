import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-[25px]">
            <div>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <ul className="flex items-center">
                <Link href={"#about"}>
                    <li className="uppercase text-base font-normal mx-[15px]" style={{color: "rgba(255, 255, 255, 0.85)"}}>About</li>
                </Link>
                <Link href={"#skill"}>
                    <li className="uppercase text-base font-normal mx-[15px]" style={{color: "rgba(255, 255, 255, 0.85)"}}>Skill</li>
                </Link>
                <Link href={"#portfolio"}>
                    <li className="uppercase text-base font-normal mx-[15px]" style={{color: "rgba(255, 255, 255, 0.85)"}}>Portfolio</li>
                </Link>
                <Link href={"#contact"}>
                    <li className="uppercase text-base font-normal mx-[15px]" style={{color: "rgba(255, 255, 255, 0.85)"}}>Contact</li>
                </Link>
                <Link href={"#blog"}>
                    <li className="uppercase text-base font-normal mx-[15px]" style={{color: "rgba(255, 255, 255, 0.85)"}}>Blog</li>
                </Link>
                <Link href={"https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf"} target="_blank">
                    <li className="uppercase text-base font-normal border-2 border-[#00cf5d] px-[15px] py-[5px] mx-[15px]" style={{color: "rgba(255, 255, 255, 0.85)"}}>Resume</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;