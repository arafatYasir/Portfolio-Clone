const Skill = ({ name, percent }) => {
    return (
        <div className="w-[95%] sm:w-[510px] h-[85px] bg-[#1D293A] rounded-[4px]">
            <div className="flex items-center justify-between pt-[25px] pb-[20px] pl-[25px] pr-[15px]">
                <p className="text-white/85 text-[22px] font-black leading-6">{name}</p>
                <span className="text-white font-black text-lg leading-[26px] bg-[#00CF5D] px-[4.5px] py-[2.6px] rounded-[4px]">{percent}%</span>
            </div>

            {/* Progress Bar */}
            <div style={{width: `${percent}%`}} className="bg-[#00CF5D] h-[10px] rounded-[4px]"></div>
        </div>
    );
};

export default Skill;