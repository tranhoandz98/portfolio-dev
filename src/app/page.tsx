import About from "./_components/about";
import Blogs from "./_components/blogs";
import Education from "./_components/education";
import Experience from "./_components/experience";
import HeroSection from "./_components/hero-section";
import Projects from "./_components/project";
import Skills from "./_components/skills";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Experience/>
      <Skills/>
      <Education/>
      <Blogs/>
      <Projects/>
    </div>
  );
}
