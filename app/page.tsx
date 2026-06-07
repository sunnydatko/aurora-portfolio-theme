import Ambient from "./components/Ambient";
import ResponsiveMenu from "./components/ResponsiveMenu";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Writing from "./components/Writing";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Ambient />
      <ResponsiveMenu />
      <ScrollReveal />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Writing />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
