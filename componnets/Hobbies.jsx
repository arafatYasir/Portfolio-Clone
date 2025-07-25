import BloggingIcon from "@/icons/BloggingIcon";
import HikingIcon from "@/icons/HikingIcon";
import SwimmingIcon from "@/icons/SwimmingIcon";
import TravellingIcon from "@/icons/TravellingIcon";
import HobbieText from "./HobbieText";

const Hobbies = () => {

    const hobbies = [
        {
            name: "Blogging",
            icon: <BloggingIcon />
        },
        {
            name: "Travelling",
            icon: <TravellingIcon />
        },
        {
            name: "Mountain Hiking",
            icon: <HikingIcon />
        },
        {
            name: "Swimming",
            icon: <SwimmingIcon />
        }
    ]

    return (
        <section className="relative mt-[150px] sm:mt-[200px]">
            {/* Hobbies */}
            <div className="flex flex-col gap-y-[15px] sm:flex-row items-center sm:gap-[30px]">
                {hobbies.map((hobbie, idx) => (
                    <div key={idx} className="w-[90%] sm:w-[240px] h-[195px] rounded-[4px] bg-[#1D293A] px-[25px] py-[45px]">
                        {hobbie.icon}
                        <p className="text-white/85 text-[22px] font-black leading-6 mt-[15px]">{hobbie.name}</p>
                    </div>
                ))}
            </div>

            {/* Hobbie side text */}
            <div className="absolute right-1/2 top-[-60px] translate-x-1/2 sm:translate-0 sm:top-0 sm:right-[-80px]">
                <HobbieText />
            </div>
        </section>
    );
};

export default Hobbies;