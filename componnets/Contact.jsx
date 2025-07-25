import ContactText from "./ContactText";

const Contact = () => {
    return (
        <section className="relative flex items-center sm:items-start flex-col  sm:flex-row gap-[37px] mt-[160px] sm:mt-[200px]">
            <div className="flex flex-col items-center sm:block">
                <p className="max-w-[510px] text-white/85 sm:text-lg leading-[2] text-center sm:text-left sm:leading-[36px] mb-[25px]">I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>

                <a href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf" target="_blank" className="text-white/85 sm:text-lg sm:leading-[26px] px-5 py-[10px] sm:px-[26.5px] sm:py-[16.5px] bg-[#00CF5D] inline-block border-2 border-[#00CF5D] rounded-[4px]">
                    Contact Me
                </a>
            </div>

            <div className="flex flex-col gap-[15px]">
                <div className="flex flex-col items-center sm:block">
                    <h4 className="text-white text-[26px] leding-[28.5px] font-black">Email</h4>
                    <p className="text-white/85 sm:text-lg sm:leading-[26px]">zonayedpca@gmail.com <span className="font-light">(Recommended)</span></p>
                </div>
                <div className="flex flex-col items-center sm:block">
                    <h4 className="text-white text-[26px] leding-[28.5px] font-black">Skype</h4>
                    <p className="text-white/85 sm:text-lg sm:leading-[26px]">zonayedpca <span className="font-light">(Always Available)</span></p>
                </div>
                <div className="flex flex-col items-center sm:block">
                    <h4 className="text-white text-[26px] leding-[28.5px] font-black">Social</h4>
                    <p className="text-white/85 sm:text-lg sm:leading-[26px]">Facebook/Twitter - @zonayedpca <span className="font-light">(Slow response)</span></p>
                </div>
                <div className="flex flex-col items-center sm:block">
                    <h4 className="text-white text-[26px] leding-[28.5px] font-black">Address</h4>
                    <p className="text-white/85 sm:text-lg sm:leading-[26px]">Gouripur, Daudkandi, Cumilla, Bangladesh - 3517</p>
                </div>
            </div>

            {/* Contact side text */}
            <div className="absolute top-[-80px] right-1/2 translate-1/2 sm:translate-0 sm:top-0 sm:right-[-80px]">
                <ContactText />
            </div>
        </section>
    );
};

export default Contact;