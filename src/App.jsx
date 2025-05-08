/**
 * @copyright 2025 xeynacode
 * @license Apache-2.0
 */

// components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
const App = () => {
    return (
        <>
        <Header/>
        <main>
            <Hero />
            <About />
            <Skill />
            <Work />
            <Review />
            <Contact />
        </main>
    </>
    )
}

export default App;