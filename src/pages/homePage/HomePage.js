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

    let locationOne;
    let locationTwo;

    const sectionOneRef = useRef(null);
    const sectionTwoRef = useRef(null);
    const homePage = useRef(null);
    const h = useRef(null);
    const i = useRef(null);
    const y = useRef(null);
    const o = useRef(null);
    const u = useRef(null);
    const point = useRef(null);
    const tlOne = useRef();
    const tlTwo = useRef();

    //Manage load
    useEffect(()=>{
        window.addEventListener('load', (event) => {
            console.log('page is fully loaded');
        });
    })

    //Manage scrolltrigger
    useEffect(() => {

        let sectionOneSelect = document.querySelector("#root > div > main > section.sectionOne")
        let sectionTwoSelect = document.querySelector("#root > div > main > section.sectionTwo")

        tlOne.current = gsap.timeline({
            defaults:{
                duration: 0.2,
                ease: "Power4.inOut"
            },
            scrollTrigger: {
                trigger: sectionTwoSelect,
                // markers: true,
                start: "top 50%",
                toggleActions: "play complete reverse reverse",
            }
        })
        .to(
            h.current, {
                rotationY: -180,
            }, "-=0.1"
        )
        .to(
            i.current,{
                rotationY: -180,
            }, "-=0.1"
        )
        .to(
            y.current,{
                rotationY: -180,
            }, "-=0.1"
        )
        .to(
            o.current,{
                rotationY: -180,
            }, "-=0.1"
        )
        .to(
            u.current,{
                rotationY: -180,
            }, "-=0.1"
        )
        .to(
            point.current,{
                rotationY: -180,
            }, "-=0.1"
        )
        .reverse()
    }, [])

    //Manage scroll section apparition
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
                        <div ref={h} className="cards">
                            <span className="front">w</span>
                            <span className="back">m</span>
                        </div>
                        <div ref={i} className="cards">
                            <span className="front">h</span>
                            <span className="back">y</span>
                        </div>
                        <div ref={y} className="cards">
                            <span className="front">o</span>
                            <span className="back">W</span>
                        </div>
                        <div ref={o} className="cards">
                            <span className="front">I</span>
                            <span className="back">o</span>
                        </div>
                        <div ref={u} className="cards">
                            <span className="front">A</span>
                            <span className="back">r</span>
                        </div>
                        <div ref={point} className="cards">
                            <span className="front">m</span>
                            <span className="back">k</span>
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