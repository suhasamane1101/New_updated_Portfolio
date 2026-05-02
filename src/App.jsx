import "./styles/global.css";
import Cursor    from "./components/Cursor";
import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import Marquee   from "./components/Marquee";
import About     from "./components/About";
import Experience from "./components/Experience";
import Projects  from "./components/Projects";
import Skills    from "./components/Skills";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
