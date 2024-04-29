import About from "./_components/about";
import Blogs from "./_components/blogs";
import Education from "./_components/education";
import Experience from "./_components/experience";
import Projects from "./_components/project";
import Skills from "./_components/skills";

export default function Home() {
  return (
    <div>
      <About/>
      <Experience/>
      <Skills/>
      <Education/>
      <Blogs/>
      <Projects/>
    </div>
  );
}
