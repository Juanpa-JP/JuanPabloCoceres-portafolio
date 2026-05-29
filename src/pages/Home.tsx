import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

/**
 * Pagina principal del portafolio
 * Integra todas las secciones en orden
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-void-900 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
