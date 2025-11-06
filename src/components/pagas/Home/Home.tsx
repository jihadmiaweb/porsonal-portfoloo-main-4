import About from "@/components/pagas/Home/Aboutpagas/Aboute";
import LayoutOfExperience from "@/components/pagas/Home/experience/layoutOfExperience";
import Hero from "@/components/pagas/Home/hirosistion";
import Services from "@/components/pagas/Home/Servicespagas/servicespagah";

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <LayoutOfExperience />
        </div>
    );
}

export default Home;