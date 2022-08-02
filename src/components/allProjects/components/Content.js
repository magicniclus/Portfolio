import React from 'react';
import "./_content.scss"

const Content = (props) => {
    const content = props.content;
    const blockActive = props.active

    const showContent = (content)=>{
        return(
            <>
                <div className="titleContainer">
                    <h3 style={{color: content.textColor}} className='title'>{content.title.charAt(0).toUpperCase() + content.title.slice(1)}</h3>
                </div>
                <div className="cityContainer">
                    <h4 className='city'>{content.city.charAt(0).toUpperCase() + content.city.slice(1)}, <span className='date'>{content.years.charAt(0).toUpperCase() + content.years.slice(1)}</span></h4>
                </div>
                <div className="paramsContainer">
                    <p className='params'>{content.text}</p>
                </div>
            </>
        )
    }

    return (
        <div className='contentContainer'>
            {
                content.map(x=>
                    x.id === blockActive? showContent(x) : null
                )
            }
        </div>
    );
};

export default Content;