import React, { useEffect, useState, useRef  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./_skillText.scss"
import moi from "../../assets/me/me-desktop.jpg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const SkillText = (props) => {
    const showLight = ["js", "gsap", "react", "sass", "strapi"];

    const [showSkillText, setShowSkillText] = useState(false);

    const [ready, setReady] = useState(false)

    const [light, setLight] = useState("");

    const [lignName, setLignName] = useState("lign")
    const [imgName, setImgName] = useState("imgContainer")
    const [lignContainerNoAnimation, setLignContainerNoAnimation] = useState("visible")
    const [containerAnnimation, setContainerAnimation] = useState('container')

    const text = useRef(null);

    const isLoading = useSelector(state=>state.isLoading)
    const projectIsOpen = useSelector(state => state.projectIsOpen)

    useEffect(()=>{
        udateLight()
    }, [])

    /**
     * It will change the light randomly every 2-6 seconds.
     */
    const udateLight = ()=>{
        setInterval(async ()=>{
            const randomIndex = Math.floor(Math.random()*5)
            await setLight(showLight[randomIndex])
        }, numberRandom(2000, 6000))
    }

    /**
     * It returns a random number between the min and max values
     * @param min - The minimum number that can be returned.
     * @param max - The maximum number that can be generated.
     * @returns A random number between the min and max values.
     */
    const numberRandom = (min, max)=>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const changeCursorOver = async ()=>{
        if(!ready) await ready
        else setShowSkillText(true)
    }

    useEffect(()=>{
        if(!isLoading){
            setTimeout(()=>{
                setReady(true)
            }, 2000)
        }
    }, [isLoading || lignName])

    return (
        <div className={showSkillText ? "skillTextContainer " + lignContainerNoAnimation : "skillTextContainer"}>
            <div ref={text}  onMouseEnter={changeCursorOver} className='lignContainer'>
                <div className={"lignOneContainer "+containerAnnimation}>
                    <p className={!isLoading ? lignName : ""}>Jeune développeur passionné, ambitieux et très curieux, je voue une</p>
                </div> 
                <div className={"lignTwoContainer "+containerAnnimation}>
                    <p className={!isLoading ? lignName : ""}> appétence particulière pour l’écosystème <span className={light === "js" ? 'jsText show' : "jsText"}>Javascript</span>. En veille constante </p> 
                </div>
                <div className={"lignThreeContainer "+containerAnnimation}>
                    <p className={!isLoading ? lignName : ""}>sur les nouvelles technologies, j’accorde un intérêt tout particulier </p>
                </div>
                <div className={"lignFourContainer "+containerAnnimation}>
                    <p className={!isLoading ? lignName : ""}>pour  <span className={light === "react" ? 'reactText show' : "reactText"}>React</span>. J’ai complété mes compétences en Front avec le CMS </p>
                </div>
                <div className={"lignFiveContainer "+containerAnnimation}>
                    <p className={!isLoading ? lignName : ""}><span className={light === "strapi" ? "strapiText show" : "strapiText"}>Strapi</span>  (API first) proposant entre autre une authentification des plus</p>
                </div>
                <div className={"lignSixContainer "+containerAnnimation}>
                    <p className={!isLoading ? lignName : ""}>sécurisée, la gestion des permissions, de la création de contenu ainsi</p> 
                </div>
                <div className={"lignSevenContainer "+containerAnnimation}>
                    <p className={!isLoading ? lignName : ""}>qu’un générateur d’API REST rapide et efficace. J'attache une importance</p>
                </div>
                <div className={"lignEightContainer "+containerAnnimation}>
                    <p className={!isLoading ? lignName : ""}>capitale au détail dans les animations avec <span className={light === "gsap" ? "gsapText show" : "GsapText"}>Gsap</span> ou encore <span className={light === "sass" ? 'sassText show' : "sassText"}>Sass</span> pour un </p>
                </div>
                <div className={"lignNineContainer "+containerAnnimation}>
                    <p className={!isLoading ? lignName : ""}>code optimisé et facilement compréhensible. À l’écoute de mes clients,</p>
                </div>
                <div className={"lignTenContainer "+containerAnnimation}>
                    <p className={!isLoading ? lignName : ""}>je saurai conseiller, orienter, et adapter mon savoir-faire a vos attentes.</p>
                </div>
            </div>
            <div className={imgName}>
                <img src={moi} alt="Nicolas Castera" />
            </div>
        </div>
    );
};

export default SkillText;