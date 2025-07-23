import AboutMeText from "./AboutMeText";

const AboutMe = () => {
    return (
        <section className="relative px-[25px] mt-[300px] flex items-center">
            <div>
                <p className="text-white/85 text-lg leading-[36px] max-w-[525px]">Hello! I'm Zonayed Ahmed, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.</p>

                {/* Buttons */}
                <div className="flex gap-[15px] mt-[25px]">
                    <a href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf" target="_blank" className="text-white/85 text-lg leading-[26px] px-[26.5px] py-[16.5px] bg-[#00CF5D] inline-block border-2 border-[#00CF5D] rounded-[4px]">
                        Get Resume
                    </a>

                    <a href="#skill" target="_blank" className="text-white/85 text-lg leading-[26px] px-[26.5px] py-[16.5px] inline-block border-2 border-[#00CF5D] rounded-[4px]">
                        My Skills
                    </a>
                </div>
            </div>
            <div className="w-[525px] h-[326px] group">
                <img src="https://zonayed.me/static/profile-bd1430b121f195d1f823a8e0b9bf2c46.jpg" alt="Zonayed Ahmed" className="rounded-[10px] w-[304px] h-[304px] mx-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-900" />
            </div>

            {/* About Me Side Text */}
            <div className="absolute top-0 right-[-80px]">
                <AboutMeText />
            </div>
        </section>
    );
};

export default AboutMe;