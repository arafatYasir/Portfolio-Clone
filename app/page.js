import AboutMe from "@/componnets/AboutMe";
import Header from "@/componnets/Header";
import Logo from "@/icons/Logo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
      </main>
    </>
  );
}