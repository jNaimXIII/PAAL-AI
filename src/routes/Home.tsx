import { FC } from "react";
import Hero from "../components/home/Hero";
import Parallax from "../components/parallax/Parallax";
import Discover from "../components/discover/Discover";
import Features from "../components/features/Features";
import Benefits from "../components/benefits/Benefits";
import Divider from "../components/site/Divider";
import Explore from "../components/explore/Explore";
import Tagline from "../components/tagline/Tagline";
import Empowered from "../components/empowered/Empowered";
import Services from "../components/services/Services";
import Whitelist from "../components/whitelist/Whitelist";
import Footer from "../components/site/Footer";

const Home: FC = () => {
    return (
        <>
            <Hero />

            <Divider />
            <Parallax />
            <Divider />

            <Discover />

            <Explore />

            <Divider />
            <Tagline />
            <Divider />

            <Features />

            <Benefits />

            <Divider />
            <Empowered />
            <Divider />

            <Services />

            <Whitelist />

            <Footer />
        </>
    );
};

export default Home;
