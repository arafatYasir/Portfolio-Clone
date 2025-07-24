import Banner from "./Banner";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="max-w-[1200px] mx-auto">
            <Navbar />
            <Banner />
        </header>
    );
};

export default Header;