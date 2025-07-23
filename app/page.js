import AboutMe from "@/componnets/AboutMe";
import Header from "@/componnets/Header";
import Skills from "@/componnets/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Skills />
      </main>
    </>
  );
}