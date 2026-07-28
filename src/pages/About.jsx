import AboutHero from "../components/about/AboutHero";
import WhatIDo from "../components/about/WhatIDo";
import Skills from "../components/about/Skills";
import CurrentlyLearning from "../components/about/CurrentlyLearning";
import Education from "../components/about/Education";

const About = () => {
  return (
    <main className="bg-[#050505] pt-28 lg:pt-36">
      <AboutHero />
      <WhatIDo />
      <Skills />
      <CurrentlyLearning />
      <Education />
    </main>
  );
};

export default About;
