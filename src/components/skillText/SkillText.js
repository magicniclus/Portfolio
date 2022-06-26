import React from 'react';
import "./_skillText.scss"

const SkillText = (props) => {
    const show = props.show
    return (
        <div className={show ? "skillTextContainer" : "skillTextContainer hidden"}>
            <p>
                <span className='top'>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when lookingat its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here.
                    'lorem ipsum' will uncover many web sites still in their infancy. Various 
                </span>
                <span className='middle'>
                    Now use Many desktop public <span className='reactText'>react</span> packages and web page editors 
                </span>
                <span className='bottom'>
                    It is a long established fact that a reader will be distracted by the
                    now use Lorem Ipsum as their default model text, and a search for
                    'lorem ipsum' will uncover many web sites still in their infancy. Various 
                    versions have evolved over the years, sometimes by accident, sometimes on 
                    purpose.
                </span>
            </p>
        </div>
    );
};

export default SkillText;