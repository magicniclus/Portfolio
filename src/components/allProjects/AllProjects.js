import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import "./_allProjects.scss"
import terabois from "../../assets/terabois/one.jpg"
import maisonsur from "../../assets/terabois/two.jpg"
import magma from "../../assets/terabois/three.jpg"
import threeJs from "../../assets/terabois/four.jpg"
import { projects } from "../utils/projects"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Content from './components/Content';

const AllProjects = (props) => {
    //GSAP
    const observer = props.observer;

    const tl = useRef();

    const blockOneRef = useRef(null)
    const blockTwoRef = useRef(null)
    const blockThreeRef = useRef(null)
    const blockFourRef = useRef(null)

    const refReturn = useRef(null)

    useEffect(()=>{
        tl.current = gsap.timeline({
            defaults:{
                duration: 0.7,
                ease: "power4.out"
            },
            scrollTrigger: {
                trigger: observer,
                toggleActions: "play complete reverse reverse",
                start: "50% 50%",
                end: "90% 20%",
            }
        })
        .fromTo(blockOneRef.current, {y: 150}, {y:0, delay:1})
        .fromTo(blockTwoRef.current, {y: 150}, {y:0}, "-=0.6")
        .fromTo(blockThreeRef.current, {y: 150}, {y:0}, "-=0.6")
        .fromTo(blockFourRef.current, {y: 150}, {y:0}, "-=0.6")
    }, [])

    
    //Component
    const lockScroller = props.lockScroller;
    const setLockScroller = props.setLockScroller;

    const [active, setActive] = useState(false)
    const [secondShow, setSecondShow] = useState(false)
    const [blockActive, setBlockActive] = useState(null)
    
    const [whatHandle, setWhatHandle] = useState(true)
    
    const [blockOne, setBlockOne] = useState("blockOne block colorOne")
    const [blockTwo, setBlockTwo] = useState("blockTwo block colorTwo")
    const [blockThree, setBlockThree] = useState("blockThree block colorThree")
    const [blockFour, setBlockFour] = useState("blockFour block colorFour")

    useEffect(()=>{
        if(active){
            setLockScroller(true)
        }else{
            setLockScroller(false)
        }
    }, [active])
    /**
     * The function takes in an index and then sets the state of the blocks based on the index
     * @param index - the index of the block that is being clicked
     */
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

    /**
     * It takes in an index and then sets the state of the blocks based on the index
     * @param index - the index of the block that was clicked
     */
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

    /**
     * It sets the active state to true, sets the blockActive state to the value passed in, and then
     * calls the handleNameBlockOne or handleNameBlockTwo function depending on the value of the
     * whatHandle state
     * @param value - the value of the block that is clicked
     */
    const handleClick = (value)=>{
        setActive(true)
        setBlockActive(value)
        whatHandle ? handleNameBlockOne(value): handleNameBlockTwo(value)
    }

    /**
     * It sets the active state to false and the secondShow state to true.
     */
    const handleClickBack = ()=>{
        setActive(false)
        setSecondShow(true)
    }

    /**
     * It returns a div with a className of containerLeft, which contains a div with a className of
     * back, which has an onClick event handler that calls the handleClickBack function
     * @returns A div with a className of containerLeft.
     */
    const containerLeft = ()=>{
        return(
            <div className="containerLeft">
                <div className="topContainer">
                    <div ref={refReturn} className='back'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                       <span onClick={handleClickBack}>Back</span> 
                    </div>
                </div>
                <Content content={projects} active={blockActive}/>
            </div>
        )
    }

    /**
     * If the active variable is true, return the string "testPageContainer containerActive". If the
     * secondShow variable is true, return the string "testPageContainer secondShow". Otherwise, return
     * the string "testPageContainer"
     * @returns A string
     */
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
                        {/* <p>terabois</p> */}
                    </div>
                    <div className={blockTwo} onClick={()=>handleClick(2)}>
                        <img ref={blockTwoRef} src={maisonsur} alt="maisonsur" />
                        {/* <p>maison sur</p> */}
                    </div>
                    <div className={blockThree} onClick={()=>handleClick(3)}>
                        <img ref={blockThreeRef} src={magma} alt="magma" />
                        {/* <p>magma</p> */}
                    </div>
                    <div className={blockFour} onClick={()=>handleClick(4)}>    
                        <img ref={blockFourRef} src={threeJs} alt="threejs" /> 
                        {/* <p>threejs</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;