import AboutMe from "@/componnets/AboutMe";
import Header from "@/componnets/Header";
import Hobbies from "@/componnets/Hobbies";
import Portfolio from "@/componnets/Portfolio";
import Skills from "@/componnets/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Hobbies />
        <Portfolio />
      </main>
    </>
  );
}