import CV from "@/components/pagas/cv";
import About from "@/components/pagas/Home/Aboutpagas/Aboute";
import MainContact from "@/components/pagas/Home/contact/mainContact";
import LayoutOfExperience from "@/components/pagas/Home/experience/layoutOfExperience";
import Hero from "@/components/pagas/Home/hirosistion";
import MainProject from "@/components/pagas/Home/projects/mainProject";

import Services from "@/components/pagas/Home/Servicespagas/servicespagah";

function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <LayoutOfExperience />
            <MainProject />
            <MainContact />
            <CV />

        </div>
    );
}

export default Home;