import About from "@/components/About";
import Badges from "@/components/Badges";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promises from "@/components/Promises";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import StickyCall from "@/components/StickyCall";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <About />
        <Promises />
        <Badges />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
