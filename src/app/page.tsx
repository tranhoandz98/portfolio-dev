import { personalData } from "@/data/personal-data";
import About from "./_components/about";
import Blogs from "./_components/blogs";
import Education from "./_components/education";
import Experience from "./_components/experience";
import HeroSection from "./_components/hero-section";
import Projects from "./_components/project";
import Skills from "./_components/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  // const filtered = data.filter((item:any) => item?.cover_image).sort(() => Math.random() - 0.5);

  return data;
};
export default async function Home() {
  const blogs = await getData();

  return (
    <div>
      <HeroSection/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Education/>
      <Blogs blogs={blogs}/>
    </div>
  );
}
