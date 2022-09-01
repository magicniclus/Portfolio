import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
import "./_allProjects.scss";
import petitPlats from "../../assets/projects/two.jpg";
import terabois from "../../assets/projects/one.jpg";
import fishEye from "../../assets/projects/three.jpg";
import kaza from "../../assets/projects/four.jpg";
import { projects } from "../utils/projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Content from './components/Content';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeTextColor, projectIsClose, projectIsOpen } from '../../redux/actions/actions';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Observer);

const AllProjects = (props) => {

    const state = useSelector(state => state)

    //GSAP
    const observer = props.observer;
    const location = props.location;

    const tl = useRef();

    const blockOneRef = useRef(null)
    const blockTwoRef = useRef(null)
    const blockThreeRef = useRef(null)
    const blockFourRef = useRef(null)

    let locationOne;
    let locationTwo;

    const refReturn = useRef(null)

    useEffect(()=>{
            tl.current = gsap.timeline({
                defaults:{
                    duration: 0.7,
                    ease: "power4.out"
                },
                scrollTrigger: {
                    trigger: observer,
                    toggleActions: "play",   
                    start: "50% 50%",
                    end: "90% 20%"
                }
            })
            .fromTo(blockOneRef.current, {y: 150}, {y:0, autoAlpha:1, delay:1})
            .fromTo(blockTwoRef.current, {y: 150}, {y:0, autoAlpha:1}, "-=0.6")
            .fromTo(blockThreeRef.current, {y: 150}, {y:0, autoAlpha:1}, "-=0.6")
            .fromTo(blockFourRef.current, {y: 150}, {y:0, autoAlpha:1}, "-=0.6")
    }, [])

    
    //Component
    const dispatch = useDispatch();

    const lockScroller = props.lockScroller;
    const setLockScroller = props.setLockScroller;

    const [wellProject, setWellProject] = useState(0)

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

    const changeBackgroundColor = (index)=>{
        dispatch(changeColor(projects[index-1].color))
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
        changeBackgroundColor(value)
        setWellProject(value)
        dispatch(changeTextColor(projects[value - 1].textColor))
        dispatch(projectIsOpen())
    }

    /**
     * It sets the active state to false and the secondShow state to true.
     */
    const handleClickBack = async ()=>{
        await setActive(false)
        await setSecondShow(true)
        await dispatch(changeColor("#EDEAE6"))
        await dispatch(projectIsClose())
        await dispatch(changeTextColor("#373634"))
        await location.current.scrollIntoView()
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
                    <div onClick={handleClickBack} ref={refReturn} className='back'>
                        <FontAwesomeIcon icon={faChevronLeft} color={projects[wellProject - 1].textColor} />
                       <span style={{color: projects[wellProject - 1].textColor}}>Back</span> 
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
                        <img ref={blockOneRef} style={state.projectIsOpen ? {transform: "translate(0px,0px)"}: {transform: "none"}} src={terabois} alt="terabois" />
                    </div>
                    <div className={blockTwo} onClick={()=>handleClick(2)}>
                        <img ref={blockTwoRef} src={petitPlats} alt="Les Petit Plats" />
                    </div>
                    <div className={blockThree} onClick={()=>handleClick(3)}>
                        <img ref={blockThreeRef} src={fishEye} alt="Fish Eye" />
                    </div>
                    <div className={blockFour} onClick={()=>handleClick(4)}>    
                        <img ref={blockFourRef} src={kaza} alt="kaza" /> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;