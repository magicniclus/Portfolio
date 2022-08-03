import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./_content.scss"
import { gsap } from "gsap";

const Content = (props) => {
    //Gsap
    const tl = useRef()

    const refTitle = useRef(null)
    const refCity = useRef(null)
    const refParams = useRef(null)

    useEffect(()=>{
        tl.current = gsap.timeline({
            default:{
                duration: 0.3,
                ease: "Power4.inOut"
            }
        })
        .fromTo(refTitle.current, {y: 500}, {y:0, delay:0.6})
        .fromTo(refCity.current, {y: 200}, {y:0}, "<+=0.2")
        .fromTo(refParams.current, {x: -500}, {x:0},"-=0.1")
    },[])

    //component
    const content = props.content;
    const blockActive = props.active

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
    const changeTheWordAnArray = (word)=>{
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
                    changeTheWordAnArray(word).map(letter =>
                        <div key={letter} className={"letterTitleContainer " + letter}>
                            <span style={{color:color}}>{letter}</span>
                        </div>    
                    )
                }
            </>
        )
    }

    const showContent = (content)=>{
        return(
            <>
                <div className="titleContainer">
                    {/* <h3 ref={refTitle} style={{color: content.textColor}} className='title'>{changeTheFirstLettersToUppercase(content.title)}</h3> */}
                    {
                        changingAllLettersOfAWordToSpanInDiv(changeTheFirstLettersToUppercase(content.title), content.textColor)
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