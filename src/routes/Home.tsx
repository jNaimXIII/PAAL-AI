import { FC } from "react";
import Hero from "../components/home/Hero";
import Parallax from "../components/parallax/Parallax";
// import Discover from "../components/discover/Discover";
import Features from "../components/features/Features";
import Benefits from "../components/benefits/Benefits";
import Divider from "../components/site/Divider";
import Explore from "../components/explore/Explore";
import Tagline from "../components/tagline/Tagline";
// import Empowered from "../components/empowered/Empowered";
import Services from "../components/services/Services";
import Whitelist from "../components/whitelist/Whitelist";
import Footer from "../components/site/Footer";
import MobileNavigation from "../components/site/MobileNavigation";
import Tools from "../components/tools/Tools.tsx";
import Swap from "../components/swap/Swap.tsx";

const Home: FC = () => {
    return (
        <>
            <MobileNavigation />

            <Hero />

            <Divider />
            <Parallax />
            <Divider />

            {/* NOT ACCESSED FROM HERE */}
            {/* <Discover /> */}

            <Explore />
            <Divider />

            <Tools />

            <Divider />
            <Tagline />
            <Divider />

            <Features />

            <Benefits />

            {/* <Empowered /> */}

            <Divider />
            <Swap />
            <Divider />

            <Services />

            <Whitelist />

            <Footer />
        </>
    );
};

export default Home;
