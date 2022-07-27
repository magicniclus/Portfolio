import React, { useEffect, useState, useRef } from 'react';
import SkillText from '../../components/skillText/SkillText';
import './_homePage.scss';
import { gsap, Power4 } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import AllProjects from '../../components/allProjects/AllProjects';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
    const [showSkillText, setShowSkillText] = useState(true);
    const [makeScroll, setMakeScroll] = useState(true);

    const [firsLetter, setFirstLetter] = useState('h');

    let locationOne;
    let locationTwo;

    const sectionOneRef = useRef(null)
    const sectionTwoRef = useRef(null)
    const homePage = useRef(null)
    const h = useRef(null)



    useEffect(() => {
        window.addEventListener('load', (event) => {
            console.log('page is fully loaded');
        });
        let sectionOneSelect = document.querySelector("#root > div > main > section.sectionOne")
        let sectionTwoSelect = document.querySelector("#root > div > main > section.sectionTwo")
        const tl = gsap.timeline({
            defaults: {
                ease: "power2",
            },
            scrollTrigger: {
                trigger: sectionTwoSelect,
                markers: true,
                scrub: true
            }
        })
            .to(
                h.current, {
                duration: 0.2,
                opacity: 1,
                rotationY: 180,
            })
            .add(() => {
                setFirstLetter(firsLetter === "m" ? "h" : "m")
            })
            .to(
                h.current, {
                duration: 0.2,
                rotationY: 360,
            })
    }, [])


    useEffect(() => {
        let sectionOneSelect = document.querySelector("#root > div > main > section.sectionOne")
        let sectionTwoSelect = document.querySelector("#root > div > main > section.sectionTwo")
        if (sectionTwoSelect !== null && sectionOneSelect !== null) {
            locationOne = sectionOneSelect.offsetTop;
            locationTwo = sectionTwoSelect.offsetTop;
        }
    }, [window.scrollY])

    if (makeScroll) {
        Observer.create({
            target: homePage.current,
            type: "wheel",
            onDown: () => {
                gsap.to(window, { duration: 0.8, scrollTo: locationTwo, ease: "power1.out" });
            },
            onUp: () => {
                gsap.to(window, { duration: 0.8, scrollTo: locationOne, ease: "power1.out" });
            },
            tolerance: 10,
            preventDefault: true,
        })
    }

    const sectionTwo = () => {
        return (
            <section ref={sectionTwoRef} className="sectionTwo">
                <AllProjects />
            </section>
        )
    }

    return (
        <>
            <header className='homePageHeader'>
                <div className="topContainer">
                    <div className="titleContainer">
                        <h1 className='title'>Nicolas Castera</h1>
                        <h2 className="skill">Frontend developper</h2>
                    </div>
                </div>
                <div className="bottomContainer">
                    <div className="reseauxContainer">
                        <button className="reseaux github">Github</button>
                        <button className="reseaux instagram">Instagram</button>
                        <button className="reseaux tweeter">Tweeter</button>
                        <button className="reseaux linkedin">Linkedin</button>
                    </div>
                    <div className="contactContainer">
                        <button className="contact">Contact</button>
                    </div>
                </div>
            </header>
            <main ref={homePage} className='homePageMain'>
                <div className="hiYou">
                    <div className='hiYouContainer'>
                        <div className="cards">
                            <p className="front">h</p>
                            <p className="back">m</p>
                        </div>
                        <div className="cards">
                            <p className="front">i</p>
                            <p className="back">y</p>
                        </div>
                        <div className="cards">
                            <p className="front">Y</p>
                            <p className="back">W</p>
                        </div>
                        <div className="cards">
                            <p className="front">o</p>
                            <p className="back">o</p>
                        </div>
                        <div className="cards">
                            <p className="front">u</p>
                            <p className="back">r</p>
                        </div>
                        <div className="cards">
                            <p className="front">.</p>
                            <p className="back">k</p>
                        </div>
                    </div>
                </div>
                <section ref={sectionOneRef} className="sectionOne">
                    <SkillText translate={200} show={showSkillText} observation={locationTwo} />
                </section>
                {
                    makeScroll ? sectionTwo() : null
                }
            </main>
        </>
    );
};

export default HomePage;