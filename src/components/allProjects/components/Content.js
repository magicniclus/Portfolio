import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./_content.scss"
import { gsap } from "gsap";

const Content = (props) => {
    //Gsap
    const tl = useRef()
    
    const refCity = useRef(null)
    const refParams = useRef(null)
    
    const lineRefs = useRef([]);
    lineRefs.current = []

    /* Creating a timeline that will animate the city and params. */
    useEffect(()=>{
        tl.current = gsap.timeline({
            default:{
                duration: 1,
                ease: "Power4.inOut"
            }
        })
        .fromTo(refCity.current, {y: 200}, {y:0, duration: 1})
        .fromTo(refParams.current, {x: -500}, {x:0},"-=0.1")
    },[])

    /* Creating a timeline that will animate the letters of the title. */
    useEffect(()=>{
        updateLineRefs()
    }, [])
    
    const updateLineRefs = () => {
        setTimeout(()=>{
            const timeline = gsap.timeline({
                default:{
                    ease: "Power4.inOut"
                }
            })
            lineRefs.current.map((el, i )=> {
                if(i === 0){
                    timeline.fromTo(el, {opacity:1, y: 300}, {autoAlpha:1, y:0, duration: 0.2, ease: "Power4.inOut", delay: 0.5})
                }else{
                    timeline.fromTo(el, {opacity:1, y: 300}, {autoAlpha:1, y:0, duration: 0.2, ease: "Power4.inOut"},"-=0.16")
                }
            })
        }, 100)
    }
    
    //component
    const content = props.content;
    const blockActive = props.active
    
    const [oldContent, setOldContent] = useState(null)
    const [newContent, setNewContent] = useState(null)

    const [counter, setCounter] = useState(0)

    
    /**
     * It takes an element as an argument and adds it to the lineRefs array if it's not already in
     * there
     * @param el - the element that is being added to the refs array
     */
    const addToRef = (el)=>{
        if(el && !lineRefs.current.includes(el)){
            lineRefs.current.push(el)
        }
    }  
    
    /* It's setting the new content to the content of the block that is active. */
    useEffect(()=>{
        setNewContent(content[blockActive -1])
        setOldContent(content[blockActive -1])
    }, [])

    /**
     * It takes a string, and returns the same string with the first letter capitalized
     * @param value - The value of the input field.
     * @returns The first letter of the string is being returned in uppercase.
     */
    const changeTheFirstLettersToUppercase = (value)=>{
        return value.charAt(0).toUpperCase() + value.slice(1)
    }

    /**
     * It takes a word and returns an array of the letters in that word
     * @param word - The word that you want to change into an array.
     * @returns An array of the letters of the word
     */
    const changeAllLattersInTheWordAnArray = (word)=>{
        return word.split("")
    }

    /**
     * It takes a word and a color as parameters, and returns a div with a span for each letter of the
     * word, with the color of the span being the color passed in as a parameter
     * @param word - the word you want to change
     * @param color - the color of the letters
     * @returns A div with a span inside of it.
     */
    const changingAllLettersOfAWordToSpanInDiv = (word, color)=>{
        return(
            <>
                {
                    changeAllLattersInTheWordAnArray(word).map((letter, i) =>
                        <div ref={addToRef} key={i.toString()} className={"letterTitleContainer " + letter}>
                            <span style={{color:color}}>{letter}</span>
                        </div>    
                    )
                }
            </>
        )
    }

    /**
     * It takes a content object as an argument and returns a div with the title, city, and text of the
     * content object
     * @param content - the content of the current slide
     * @returns a JSX element.
     */
    const showContent = (content)=>{
        return(
            <>
                <div className="titleContainer">
                    {
                        oldContent !== null ? changingAllLettersOfAWordToSpanInDiv(changeTheFirstLettersToUppercase(oldContent.title), oldContent.textColor) : null
                    }
                </div>
                <div className="cityContainer">
                    <h4 ref={refCity} className='city'>{changeTheFirstLettersToUppercase(content.city)}, <span className='date'>{changeTheFirstLettersToUppercase(content.years)}</span></h4>
                </div>
                <div className="paramsContainer">
                    <p ref={refParams} className='params'>{content.text}</p>
                </div>
            </>
        )
    }



    return (
        <div className='contentContainer'>
            {
                content.map(content=>
                    content.id === blockActive? showContent(content) : null
                )
            }
        </div>
    );
};

export default Content;