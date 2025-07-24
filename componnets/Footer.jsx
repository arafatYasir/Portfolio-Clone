import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1D293A] h-[135px] mt-[100px]">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between pt-[50px]">
                {/* Languages */}
                <div className="flex gap-[15px]">
                    <div className="bg-[#111A28] rounded-[4px] pt-[3px]">
                        <span className="text-white/85 text-lg font-black leading-[26px] px-[10px]">ধন্যবাদ</span>

                        {/* Progress Bar */}
                        <div className="bg-[#00CF5D] h-[3px] w-[100%] rounded-[4px] mt-[3px]"></div>
                    </div>
                    <div className="bg-[#111A28] rounded-[4px] pt-[3px]">
                        <span className="text-white/85 text-lg font-black leading-[26px] px-[10px]">THANKS</span>

                        {/* Progress Bar */}
                        <div className="bg-[#00CF5D] h-[3px] w-[80%] rounded-[4px] mt-[3px]"></div>
                    </div>
                    <div className="bg-[#111A28] rounded-[4px] pt-[3px]">
                        <span className="text-white/85 text-lg font-black leading-[26px] px-[10px]">شکریہ</span>

                        {/* Progress Bar */}
                        <div className="bg-[#00CF5D] h-[3px] w-[50%] rounded-[4px] mt-[3px]"></div>
                    </div>
                    <div className="bg-[#111A28] rounded-[4px] pt-[3px]">
                        <span className="text-white/85 text-lg font-black leading-[26px] px-[10px]">धन्यवाद</span>

                        {/* Progress Bar */}
                        <div className="bg-[#00CF5D] h-[3px] w-[55%] rounded-[4px] mt-[3px]"></div>
                    </div>
                    <div className="bg-[#111A28] rounded-[4px] pt-[3px]">
                        <span className="text-white/85 text-lg font-black leading-[26px] px-[10px]">ਧੰਨਵਾਦ</span>

                        {/* Progress Bar */}
                        <div className="bg-[#00CF5D] h-[3px] w-[20%] rounded-[4px] mt-[3px]"></div>
                    </div>
                </div>

                <div className="flex items-center gap-[18px]">
                    <p className="uppercase text-white/85 text-lg font-black leading-[26px]">By Me</p>
                    <div className="bg-[#00CF5D] px-[5px] pt-1 pb-[8.5px] rounded-[4px] cursor-pointer">
                        <FaAngleUp className="text-white" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;