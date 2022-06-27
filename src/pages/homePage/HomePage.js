import React, { useEffect, useState, useRef } from 'react';
import SkillText from '../../components/skillText/SkillText';
import './_homePage.scss';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {Observer} from "gsap/Observer";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Observer);

const HomePage = () => {
    const [showSkillText, setShowSkillText] = useState(true)
    const [makeScroll, setMakeScroll] = useState(true)

    let globalPosition;
    let locationOne ;
    let locationTwo;
    
    const sectionOneRef = useRef(null)
    const sectionTwoRef = useRef(null)
    const homePage = useRef(null)
    
    useEffect(()=>{
        let sectionOneSelect = document.querySelector("#root > div > main > section.sectionOne")
        let sectionTwoSelect = document.querySelector("#root > div > main > section.sectionTwo")
        if(sectionTwoSelect !== null && sectionOneSelect !== null){
            locationOne = sectionOneSelect.offsetTop
            locationTwo = sectionTwoSelect.offsetTop
        }
    }, [window.scrollY])
    
    Observer.create({
        target: homePage.current,
        type: "wheel",
        onDown: ()=>{
            gsap.to(window, {duration: 1, scrollTo: locationTwo});
        },
        onUp: ()=>{
            gsap.to(window, {duration: 1, scrollTo: locationOne});
        },
        tolerance: 10,
        preventDefault: true,
    })

    const upTo = ()=>{
        console.log("up");
    }

    const sectionTwo = ()=>{
        return(
            <section className="sectionTwo">
                <SkillText ref={sectionTwoRef} show={showSkillText}/>
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
                    {/* <div className="scrollContainer">
                        <h4 className="scroll">
                            <span className='s'>S</span>
                            <span className='c'>C</span>
                            <span className='r'>R</span>
                            <span className='o'>O</span>
                            <span className='l'>L</span>
                            <span className='l'>L</span>
                        </h4>
                    </div> */}
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
                <section ref={sectionOneRef} className="sectionOne">
                    <SkillText show={showSkillText}/>
                </section>
                {
                    makeScroll ? sectionTwo() : null
                }
            </main>
        </>
    );
};

export default HomePage;