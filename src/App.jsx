import { BrowserRouter } from "react-router-dom";

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

import ParticlesComp from "./components/particles";

import { useCallback } from "react";

import Particles from "react-particles";
//import particle from "../utils/particles";
import { loadSlim } from "tsparticles-slim";

const App = () => {

    // const particlesInit = useCallback(async engine => {
    //     console.log(engine);
    //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     //await loadFull(engine);
    //     await loadSlim(engine);
    // }, []);

    // const particlesLoaded = useCallback(async container => {
    //     await console.log(container);
    // }, []);

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <div className="bg-primary z-[100]">
                    <About />
                    <Experience />
                    <Tech />
                    <Works />
                    <Feedbacks />
                    <div className="relative z-0">
                        <Contact />
                        <StarsCanvas />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;