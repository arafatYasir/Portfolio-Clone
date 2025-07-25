import AboutMe from "@/componnets/AboutMe";
import Contact from "@/componnets/Contact";
import Footer from "@/componnets/Footer";
import Header from "@/componnets/Header";
import Hobbies from "@/componnets/Hobbies";
import Portfolio from "@/componnets/Portfolio";
import Skills from "@/componnets/Skills";

export default function Home() {
  return (
    <>
        <AboutMe />
        <Skills />
        <Hobbies />
        {/* <Portfolio /> */}
        {/* <Contact /> */}
    </>
  );
}