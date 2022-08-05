import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./_content.scss"
import { gsap } from "gsap";
import { Timeline } from 'gsap/gsap-core';

const Content = (props) => {
    const content = props.content;
    const blockActive = props.active
    
    const [oldContent, setOldContent] = useState(content[blockActive -1])
    const [newContent, setNewContent] = useState(content[blockActive -1])
    
    const [counter, setCounter] = useState(0)
    
    const tl = useRef()
    
    const refCity = useRef(null)
    const newRefCity = useRef(null)

    const refParams = useRef(null)
    const newRefParams = useRef(null)
    
    const lineRefs = useRef([]);
    lineRefs.current = []
    
    const newLineRefs = useRef([]);
    newLineRefs.current = []
    
    let arrayLength;
    
    //Gsap

    /* Creating a timeline that will animate the city and params. */
    useEffect(()=>{
        tl.current = gsap.timeline({
            default:{
                duration: 1,
                ease: "Power4.inOut"
            }
        })
        .fromTo(refCity.current, {y: 200}, {y:0, duration: 1, opacity:1})
        .fromTo(refParams.current, {x: -500}, {x:0, opacity: 1},"-=0.1")
    },[])

    /* Creating a timeline that will animate the letters of the title. */
    useEffect(()=>{
        updateLineRefs()
    }, [])
    
    /**
     * It's a function that uses the gsap library to animate the lines of text in the about section of
     * the website
     */
    const updateLineRefs = () => {
        setTimeout(()=>{
            const timeline = gsap.timeline({
                default:{
                    ease: "Power4.inOut"
                }
            })
            lineRefs.current.map((el, i )=> {
                if(i === 0){
                    timeline.fromTo(el, {opacity:0, y: 600}, {autoAlpha:1, y:0, duration: 0.2, ease: "Power4.inOut", opacity: 1})
                }else{
                    timeline.fromTo(el, {opacity:0, y: 600}, {autoAlpha:1, y:0, duration: 0.2, ease: "Power4.inOut", opacity: 1},"-=0.16")
                }
            })
        }, 100)
    }

    /**
     * It takes the current array of refs, maps over them, and animates them to the top of the screen
     */
    const updateTwoLineRefs = ()=>{
        const timeline = gsap.timeline({
            default:{
                ease: "Power4.inOut"
            }
        })
        lineRefs.current.map((el, i )=> {
            if(i === 0){
                timeline.fromTo(el, {y: 0, opacity: 1}, {autoAlpha:1, y:-300, duration:0.2, ease: "Power4.inOut", opacity: 1 })
            }else{
                timeline.fromTo(el, {y: 0, opacity: 1}, {autoAlpha:1, y:-300, duration: 0.2,  ease: "Power4.inOut", opacity: 1},"-=0.16")
            }
        })
    }

    const updateCityStyle = () =>{
        setTimeout(()=>{
            const timeline = gsap.timeline({
                default:{
                    ease: "Power4.inOut"
                }
            })
            timeline.fromTo(refCity.current, {},{opacity: 0, duration: 0.3, ease: "Power4.inOut"})
        }, 100)
    }
    
    const secondUpdateCityStyle = () =>{
        const timeline = gsap.timeline({
            default:{
                ease: "Power4.inOut"
            }
        })
        timeline.fromTo(newRefCity.current, {opacity: 0, y: 300},{opacity: 1, y:0, duration: 1, ease: "Power4.inOut"})
    }

    const updateParamsStyle = ()=>{
        setTimeout(()=>{
            const timeline = gsap.timeline({
                default:{
                    ease: "Power4.inOut"
                }
            })
            timeline.fromTo(refParams.current, {},{opacity: 0, duration: 0.3, ease: "Power4.inOut"})
        }, 100)
    }


    const secondUpdateParamsStyle = ()=>{
        const timeline = gsap.timeline({
            default:{
                duration: 1,
                ease: "Power4.inOut"
            }
        })
        .fromTo(refParams.current, {x: -500}, {x:0, opacity: 1, delay: 0.9})
    }
    
    //component

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

    const addToRefTwo = (el)=>{
        if(el && !newLineRefs.current.includes(el)){
            newLineRefs.current.push(el)
        }
    }  

    /* It's setting the new content to the content of the block that is active. */
    useEffect(()=>{
        managmentContent()
    }, [blockActive])

    const managmentContent = async ()=>{
        await setCounter( counter + 1)
        if(counter > 0){
            await setNewContent(content[blockActive -1])
            await updateTwoLineRefs()
            await updateCityStyle()
            await updateParamsStyle()
            await setTimeout(()=>{
                setOldContent(content[blockActive -1])
                updateLineRefs()
                secondUpdateCityStyle()
                secondUpdateParamsStyle()
            }, 300)
        }    
    }

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
        word = word.split("")
        arrayLength = word.length
        return word
    }
    

    /**
     * It takes a word and a color as parameters, and returns a div with a span for each letter of the
     * word, with the color of the span being the color passed in as a parameter
     * @param word - the word you want to change
     * @param color - the color of the letters
     * @returns A div with a span inside of it.
     */
    const changingAllLettersOfAWordToSpanInDiv = (word, color)=>{
        if(counter <= 1){
            return(
                <>
                    <div className="thirsTitleContainer">
                        {
                            changeAllLattersInTheWordAnArray(word).map((letter, i) =>
                                <div ref={addToRef} key={i.toString()} className={"letterTitleContainer " + letter}>
                                    <span style={{color:color}}>{letter}</span>
                                </div>    
                            )
                        }
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <div className="thirsTitleContainer">
                        {
                            changeAllLattersInTheWordAnArray(changeTheFirstLettersToUppercase(oldContent.title)).map((letter, i) =>
                                <div ref={addToRef} key={i.toString()} className={"letterTitleContainer " + letter}>
                                    <span style={{color:color}}>{letter}</span>
                                </div>    
                            )
                        }
                    </div>
                    <div className="secondTitleContainer">
                        {
                            changeAllLattersInTheWordAnArray(changeTheFirstLettersToUppercase(newContent.title)).map((letter, i) =>
                            <div ref={addToRefTwo} key={i.toString() + 2} className={"letterTitleContainer " + letter}>
                                <span style={{color:color}}>{letter}</span>
                            </div>    
                            )
                        }
                    </div>
                </>
            )
        }
    }

    const updateCity = (content)=>{
        if(counter <= 1){
            return(
                <>
                    <div className="thirsCityContainer">
                        <h4 ref={refCity} className='city'>{changeTheFirstLettersToUppercase(content.city)}, <span className='date'>{changeTheFirstLettersToUppercase(content.years)}</span></h4>
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <div className="thirsCityContainer">
                            <h4 ref={refCity} className='city'>{changeTheFirstLettersToUppercase(oldContent.city)}, <span className='date'>{changeTheFirstLettersToUppercase(oldContent.years)}</span></h4>
                    </div>
                    <div className="secondCityContainer">
                            <h4 ref={newRefCity} className='city'>{changeTheFirstLettersToUppercase(newContent.city)}, <span className='date'>{changeTheFirstLettersToUppercase(newContent.years)}</span></h4>
                    </div>
                </>
            )
        }
    }

    const updateParams = (content)=>{
        if(counter <= 1){
            return(
                <>
                    <div className="thirsParamsContainer">
                    <p ref={refParams} className='params'>{content.text}</p>
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <div className="thirsParamsContainer">
                    <p ref={refParams} className='params'>{changeTheFirstLettersToUppercase(oldContent.text)}</p>
                    </div>
                    <div className="secondParamsContainer">
                    <p ref={newRefParams} className='params'>{changeTheFirstLettersToUppercase(newContent.text)}</p>
                    </div>
                </>
            )
        }
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
                        content !== null ? changingAllLettersOfAWordToSpanInDiv(changeTheFirstLettersToUppercase(content.title), (content.textColor)) : null
                    }
                </div>
                <div className="cityContainer">
                    {
                        content !== null ? updateCity(content): null
                    }
                </div>
                <div className="paramsContainer">
                    {
                        content !== null ? updateParams(content): null
                    }
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