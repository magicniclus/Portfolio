import React, { useState } from 'react';
import SkillText from '../../components/skillText/SkillText';
import './_homePage.scss'

const HomePage = () => {
    const [showSkillText, setShowSkillText] = useState(true)

    return (
        <>
            <header className='homePageHeader'></header>
            <main className='homePageMain'>
                <div className="topContainer">
                    <div className="titleContainer">
                        <h1 className='title'>Nicolas Castera</h1>
                        <h2 className="skill">Frontend developper</h2>
                    </div>
                    <div className="scrollContainer">
                        <h4 className="scroll">SCROLL</h4>
                    </div>
                </div>
                <SkillText show={showSkillText}/>
                <div className="bottomContainer">
                    <div className="reaseauxContainer">
                        <button className="reseaux github">Github</button>
                        <button className="reseaux instagram">Instagram</button>
                        <button className="reseaux tweeter">Tweeter</button>
                        <button className="reseaux linkedin">Linkedin</button>
                    </div>
                    <div className="contactContainer">
                        <button className="contact">Contact</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomePage;