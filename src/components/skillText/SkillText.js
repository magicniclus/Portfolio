import React, { useEffect, useState, useRef  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./_skillText.scss"
import moi from "../../assets/me/moi-optimizate.jpg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cursorDifferenceLeave, cursorDifferenceOver } from '../../redux/actions/actions';

gsap.registerPlugin(ScrollTrigger)

const SkillText = (props) => {
    const showLight = ["js", "gsap", "react", "jest", "sass"];

    const [showSkillText, setShowSkillText] = useState(false);

    const [light, setLight] = useState("");

    const text = useRef(null);
    const image = useRef(null);

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

    const dispatch = useDispatch()

    const changeCursorOver = ()=>{
        dispatch(cursorDifferenceOver())
        setShowSkillText(true)
    }

    const changeCursorLeave = ()=>{
        dispatch(cursorDifferenceLeave())
        console.log('leave');
    }

    return (
        <div className={showSkillText ? "skillTextContainer visible" : "skillTextContainer"}>
            <div ref={text}  onMouseEnter={changeCursorOver}  onMouseOut={changeCursorLeave} className='lignContainer'>
                <div className="lignOneContainer container">
                    <p className='lign lignOne'>It is a long established fact that a reader will be distracted <span className={light === "js" ? 'jsText show' : "jsText"}>Js</span></p>
                </div> 
                <div className="lignTwoContainer container">
                    <p className="lign lignTwo">when lookingat its layout. The point of using more-or-less sites</p> 
                </div>
                <div className="lignThreeContainer container">
                    <p className="lign lignThree">Lorem Ipsum is that it has a more-or-less normal distribution, </p>
                </div>
                <div className="lignFourContainer container">
                    <p className="lign lignFour">as opposed to using 'Conten tweb sites still in here sometimes.</p>
                </div>
                <div className="lignFiveContainer container">
                    <p className="lign lignFive">'lorem ipsum' will uncover many sites still in Ipsum <span className={light === "gsap" ? 'gsapText show' : "gsapText"}>Gsap</span> infancy. </p>
                </div>
                <div className="lignSixContainer container">
                    <p className="lign lignSix">Now use Many desktop <span className={light === "react" ? 'reactText show' : "reactText"}>react</span> packages and web page editors </p> 
                </div>
                <div className="lignSevenContainer container">
                    <p className="lign lignSeven">It is a long established sometimes by accident<span className={light === "jest" ? 'jestText show' : "jestText"}>jest</span> will be distracted.</p>
                </div>
                <div className="lignEightContainer container">
                    <p className="lign lignEight">Now use Lorem Ipsum as their default model text, and a search for</p>
                </div>
                <div className="lignNineContainer container">
                    <p className="lign lignNine">'lorem ipsum' will still in The point of using<span className={light === "sass" ? 'sassText show' : "sassText"}>Sass</span> infancy. Various </p>
                </div>
                <div className="lignTenContainer container">
                    <p className="lign lignTen">versions have evolved over the years, sometimes by accident</p>
                </div>
            </div>
            <div ref={image} className="imgContainer">
                <img src={moi} alt="Nicolas Castera" />
            </div>
        </div>
    );
};

export default SkillText;