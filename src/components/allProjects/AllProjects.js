import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import "./_allProjects.scss"
import terabois from "../../assets/terabois/one.jpg"
import maisonsur from "../../assets/terabois/two.jpg"
import magma from "../../assets/terabois/three.jpg"
import threeJs from "../../assets/terabois/four.jpg"

const AllProjects = (props) => {

    //GSAP
    const observer = props.observer;

    const tl = useRef();

    const blockOneRef = useRef(null)
    const blockTwoRef = useRef(null)
    const blockThreeRef = useRef(null)
    const blockFourRef = useRef(null)

    useEffect(()=>{
        tl.current = gsap.timeline({
            defaults:{
                duration: 0.3,
                ease: "Power4.inOut"
            },
            scrollTrigger: {
                trigger: observer,
                toggleActions: "play complete reverse reverse",
                start: "50% 50%",
            }
        })
        .fromTo(blockOneRef.current, {y: 150}, {y:0, delay:1})
        .fromTo(blockTwoRef.current, {y: 150}, {y:0}, "-=0.1")
        .fromTo(blockThreeRef.current, {y: 150}, {y:0}, "-=0.1")
        .fromTo(blockFourRef.current, {y: 150}, {y:0}, "-=0.1")
    }, [])

    //Component
    const [active, setActive] = useState(false)
    const [secondShow, setSecondShow] = useState(false)
    const [blockActive, setBlockActive] = useState(null)

    const [whatHandle, setWhatHandle] = useState(true)

    const [blockOne, setBlockOne] = useState("blockOne block colorOne")
    const [blockTwo, setBlockTwo] = useState("blockTwo block colorTwo")
    const [blockThree, setBlockThree] = useState("blockThree block colorThree")
    const [blockFour, setBlockFour] = useState("blockFour block colorFour")

    const handleNameBlockOne = (index)=>{
        if(index === 1){
            setBlockOne("blockOne block active colorOne")
            setBlockTwo('blockTwo block colorTwo')
            setBlockThree("blockThree block colorThree")
            setBlockFour("blockFour block colorFour")
        }else if(index === 2){
            setBlockOne("blockTwo block colorOne")
            setBlockTwo('blockOne block active colorTwo')
            setBlockThree("blockTwo block colorThree")
            setBlockFour("blockThree block colorFour")
        }else if(index === 3){
            setBlockOne("blockThree block colorOne")
            setBlockTwo('blockTwo block colorTwo')
            setBlockThree('blockOne block active colorThree')
            setBlockFour("blockTwo block colorFour")
        }else if(index === 4){
            setBlockOne("blockFour block colorOne")
            setBlockTwo('blockThree block colorTwo')
            setBlockThree('blockTwo block colorThree')
            setBlockFour('blockOne block active colorFour')
        }
    }

    const handleNameBlockTwo= (index)=>{
        if(index === 1){
            setBlockOne("blockOne block active colorOne")
            setBlockTwo('blockTwo block colorTwo')
            setBlockThree("blockThree block colorThree")
            setBlockFour("blockFour block colorFour")
        }else if(index === 2){
            setBlockOne("blockOne block colorOne")
            setBlockTwo('blockTwo block active colorTwo')
            setBlockThree("blockThree block colorThree")
            setBlockFour("blockFour block colorFour")
        }else if(index === 3){
            setBlockOne("blockOne block colorOne")
            setBlockTwo('blockTwo block colorTwo')
            setBlockThree("blockThree block active colorThree")
            setBlockFour("blockFour block colorFour")
        }else if(index === 4){
            setBlockOne("blockOne block colorOne")
            setBlockTwo('blockTwo block colorTwo')
            setBlockThree("blockThree block colorThree")
            setBlockFour("blockFour block active colorFour")
        }
    }

    const handleClick = (value)=>{
        setActive(true)
        setBlockActive(value)
        whatHandle ? handleNameBlockOne(value): handleNameBlockTwo(value)
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
                    <div className={blockOne} onClick={()=>handleClick(1)}>
                        <img ref={blockOneRef} src={magma} alt="terabois" />
                    </div>
                    <div className={blockTwo} onClick={()=>handleClick(2)}>
                        <img ref={blockTwoRef} src={maisonsur} alt="maisonsur" />
                    </div>
                    <div className={blockThree} onClick={()=>handleClick(3)}>
                        <img ref={blockThreeRef} src={magma} alt="magma" />
                    </div>
                    <div className={blockFour} onClick={()=>handleClick(4)}>    
                        <img ref={blockFourRef} src={threeJs} alt="threejs" /> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;