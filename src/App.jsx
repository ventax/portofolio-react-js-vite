/**
 * @copyright 2025 xeynacode
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
    useGSAP(()=> {
        const elements = gsap.utils.toArray('.reveal-up');

        elements.forEach((element) => {
        gsap.from(element, {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%', // Mulai animasi ketika 80% dari elemen masuk viewport
                end: 'bottom 20%', // Selesai ketika 20% dari elemen masih terlihat
                toggleActions: 'play none none none' // Hanya mainkan sekali
            }
        });
    });
});
    
    
    return (
         <ReactLenis root>
        <Header/>
        <main>
            <Hero />
            <About />
            <Skill />
            <Work />
            <Review />
            <Contact />
        </main>
            <Footer />
            </ReactLenis>
    )
}

export default App;