import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Domaines from "@/components/sections/Domaines";
import Equipe from "@/components/sections/Equipe";
import Publications from "@/components/sections/Publications";
import Contact from "@/components/sections/Contact";
import Loader from "@/components/ui/Loader";
import Cursor from "@/components/ui/Cursor";
import EasterEggs from "@/components/ui/EasterEggs";

export default function Home() {
  return (
    <>
      <Cursor />
      <Loader />
      <Header />
      <main>
        <Hero />
        <Domaines />
        <Equipe />
        <Publications />
        <hr
          style={{
            border: "none",
            height: 2,
            background: "var(--rule)",
            margin: "0 var(--margin)",
          }}
        />
        <Contact />
      </main>
      <Footer />
      <EasterEggs />
    </>
  );
}
