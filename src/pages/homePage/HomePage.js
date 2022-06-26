import React, { useState } from 'react';
import SkillText from '../../components/skillText/SkillText';
import './_homePage.scss'

const HomePage = () => {
    const [showSkillText, setShowSkillText] = useState(true)

    return (
        <>
            <header className='homePageHeader'>
                <div className="topContainer">
                    <div className="titleContainer">
                        <h1 className='title'>Nicolas Castera</h1>
                        <h2 className="skill">Frontend developper</h2>
                    </div>
                    <div className="scrollContainer">
                        <h4 className="scroll">
                            <span className='s'>S</span>
                            <span className='c'>C</span>
                            <span className='r'>R</span>
                            <span className='o'>O</span>
                            <span className='l'>L</span>
                            <span className='l'>L</span>
                        </h4>
                    </div>
                </div>
            </header>
            <main className='homePageMain'>
                <SkillText show={showSkillText}/>
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
            </main>
        </>
    );
};

export default HomePage;