import React from 'react';

const SkillText = (props) => {
    const show = props.show
    return (
        <div className={show ? "textContainer" : "textContainer hidden"}>
            <p>It is a long established fact that a reader will be distracted by the
                readable content of a page when lookingat its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                as opposed to using 'Content here, content here', making it look like readable 
                English. Many desktop public<span className='reactText'>react</span>packages and web page editors 
                now use Lorem Ipsum as their default model text, and a search for
                'lorem ipsum' will uncover many web sites still in their infancy. Various 
                versions have evolved over the years, sometimes by accident, sometimes on 
                purpose.
            </p>
        </div>
    );
};

export default SkillText;