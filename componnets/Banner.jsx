import FollowText from "./FollowText";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="sm:pl-[120px] sm:mt-[175px] relative flex flex-col items-center sm:block">
            <p className="text-lg sm:text-[22px] text-[#00cf5d]">Hello! I am</p>
            <h1 className="text-[34px] sm:text-[78px] font-black mb-[25px] sm:leading-[80px] text-white">Zonayed Ahmed</h1>
            <h4 className="text-[#00cf5d] font-bold text-xl sm:text-[25px] leading-[27px]">Full Stack Developer</h4>
            <p className="flex flex-col sm:flex-row gap-[2px] items-center sm:gap-[26px]">
                <span className="text-white/85 text-sm sm:text-lg sm:leading-[26px] relative sm:after:content-[''] sm:after:absolute sm:after:w-2 sm:after:h-2 sm:after:rounded-full sm:after:bg-[#00CF5D] sm:after:top-[60%] sm:after:-translate-y-1/2 sm:after:right-[-16px]">Web Developer</span>

                <span className="text-white/85 text-sm sm:text-lg sm:leading-[26px] relative sm:after:content-[''] sm:after:absolute sm:after:w-2 sm:after:h-2 sm:after:rounded-full sm:after:bg-[#00CF5D] sm:after:top-[60%] sm:after:-translate-y-1/2 sm:after:right-[-16px]">Programmer</span>

                <span className="text-white/85 text-sm sm:text-lg sm:leading-[26px]">Software Engineer</span>
            </p>

            {/* Buttons */}
            <div className="flex gap-[15px] mt-[24px]">
                <a href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf" target="_blank" className="text-white/85 sm:text-lg sm:leading-[26px] py-[10px] px-5 sm:px-[26.5px] sm:py-[16.5px] bg-[#00CF5D] inline-block border-2 border-[#00CF5D] rounded-[4px]">
                    Get Resume
                </a>
                <a href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf" target="_blank" className="text-white/85 sm:text-lg sm:leading-[26px] py-[10px] px-5 sm:px-[26.5px] sm:py-[16.5px] inline-block border-2 border-[#00CF5D] rounded-[4px]">
                    About Me
                </a>
            </div>

            {/* Side Text */}
            <div >
                {/* Social Icons */}
                <div className="absolute left-[-28px] top-[-12%] flex flex-col gap-[18px]">
                    <a href="https://github.com/zonayedpca" target="_blank">
                        <FaGithub className="text-xl text-white/85" />
                    </a>
                    <a href="https://codepen.io/zonayedpca" target="_blank">
                        <FaCodepen className="text-xl text-white/85" />
                    </a>
                    <a href="https://www.linkedin.com/in/zonayedpca" target="_blank">
                        <FaLinkedinIn className="text-xl text-white/85" />
                    </a>
                    <a href="https://medium.com/@zonayedpca" target="_blank">
                        <FaMediumM className="text-xl text-white/85" />
                    </a>
                    <a href="https://x.com/zonayedpca" target="_blank">
                        <FaTwitter className="text-xl text-white/85" />
                    </a>
                </div>
                <div className="absolute left-[-80px] top-[90%]">
                    <FollowText />
                </div>
            </div>
        </section>
    );
};

export default Banner;