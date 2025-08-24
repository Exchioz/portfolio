import Experiences from "@/components/experiences";
import Educations from "@/components/educations";
import Skills from "@/components/skills";
import Projects from "@/components/project";
import About from "@/components/about";

export default function Home() {
    return (
        <section>
            <About />
            <Experiences />
            <Educations />
            <Skills />
            <Projects />
        </section>
    );
}
