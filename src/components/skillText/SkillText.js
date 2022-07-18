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
            <div className='lignContainer'>
                    <p className='lign lignOne'>It is a long established fact that a reader will be distracted <span className={light === "js" ? 'jsText show' : "jsText"}>Js</span> a page </p>
                    <p className="lign lignTwo">when lookingat its layout. The point of using</p> 
                    <p className="lign lignThree">Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
                    <p className="lign lignFour">as opposed to using 'Content here.</p>
                    <p className="lign lignFive">'lorem ipsum' will uncover many web sites still in <span className={light === "gsap" ? 'gsapText show' : "gsapText"}>Gsap</span> infancy. </p>
                    <p className="lign lignSix">Now use Many desktop public <span className={light === "react" ? 'reactText show' : "reactText"}>react</span> packages and web page editors </p> 
                    <p className="lign lignSeven">It is a long established fact that a <span className={light === "jest" ? 'jestText show' : "jestText"}>jest</span> will be distracted by the</p>
                    <p className="lign lignEight">now use Lorem Ipsum as their default model text, and a search for</p>
                    <p className="lign lignNine">'lorem ipsum' will uncover many web sites still in <span className={light === "sass" ? 'sassText show' : "sassText"}>Sass</span> infancy. Various </p>
                    <p className="lign lignTen">versions have evolved over the years, sometimes by accident</p>
                    <p className="lign lignEleven">purpose.</p>
            </div>
            <img src=".../.../" alt="" />
        </div>
    );
};

export default SkillText;