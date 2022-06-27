import React, { useEffect, useState } from 'react';
import "./_skillText.scss"

const SkillText = (props) => {
    const showLight = ["js", "gsap", "react", "jest", "sass"]
    const show = props.show

    const [light, setLight] = useState("")
    
    useEffect(()=>{
        udateLight()
    }, [])

    const udateLight = ()=>{
        setInterval(async ()=>{
            const randomIndex = Math.floor(Math.random()*5)
            await setLight(showLight[randomIndex])
        }, numberRandom(2000, 6000))
    }

    const numberRandom = (min, max)=>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className={show ? "skillTextContainer" : "skillTextContainer hidden"}>
            <p>
                <span className='top'>
                    It is a long established fact that a reader will be distracted by the
                    readable content <span className={light === "js" ? 'jsText show' : "jsText"}>Js</span> a page when lookingat its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here.
                    'lorem ipsum' will uncover many web sites still in <span className={light === "gsap" ? 'gsapText show' : "gsapText"}>Gsap</span> infancy. 
                </span>
                <span className='middle'>
                    Now use Many desktop public <span className={light === "react" ? 'reactText show' : "reactText"}>react</span> packages and web page editors 
                </span>
                <span className='bottom'>
                    It is a long established fact that a <span className={light === "jest" ? 'jestText show' : "jestText"}>jest</span> will be distracted by the
                    now use Lorem Ipsum as their default model text, and a search for
                    'lorem ipsum' will uncover many web sites still in <span className={light === "sass" ? 'sassText show' : "sassText"}>Sass</span> infancy. Various 
                    versions have evolved over the years, sometimes by accident, sometimes on 
                    purpose.
                </span>
            </p>
        </div>
    );
};

export default SkillText;