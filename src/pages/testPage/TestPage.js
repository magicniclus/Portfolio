import React from 'react';
import { useState, useEffect } from 'react';
import "./_testPage.scss";

const TestPage = () => {

    const [active, setActive] = useState(false)
    const [secondShow, setSecondShow] = useState(false)
    const [blockActive, setBlockActive] = useState(null)
    const [showClassName, setShowClassName] = useState("testPageContainer")

    const handleClick = (value)=>{
        setActive(true)
        setBlockActive(value)
    }

    const handleClickBack = ()=>{
        setActive(false)
        setSecondShow(true)
    }

    const containerLeft = ()=>{
        return(
            <div className="containerLeft">
                <div onClick={handleClickBack} className='back'>Back</div>
            </div>
        )
    }

    const makeClassName = ()=>{
        if(active) return "testPageContainer containerActive"
        else if (secondShow) return "testPageContainer secondShow"
        else return "testPageContainer"
    }

    return (
        <div className='globalContainer'>
            {
                active ? containerLeft() : null
            }
            <div className={makeClassName()}>
                <div className="blockContainer">
                    <div className={blockActive === 1 ? "blockOne block active":"blockOne block"} onClick={()=>handleClick(1)}>One</div>
                    <div className={blockActive === 2 ? "blockTwo block active":"blockTwo block"} onClick={()=>handleClick(2)}>Two</div>
                    <div className={blockActive === 3 ? "blockThree block active":"blockThree block"} onClick={()=>handleClick(3)}>Three</div>
                    <div className={blockActive === 4 ? "blockFour block active":"blockFour block"} onClick={()=>handleClick(4)}>Four</div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;