import React, { useEffect, useState, useRef } from 'react';
import "./style/_background.scss";
import { gsap } from "gsap";
import { useDispatch, useSelector } from 'react-redux';

const BackgroudSVG = () => {
    const pathOne = useRef(null)
    let repeat = false;

    const tl = useRef();

    const isLoading = useSelector(state => state.isLoading)

    useEffect(() => {
        if (isLoading) {
            setTimeout(()=>{
                const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
                const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
                tl.current = gsap.timeline({
                    // paused: true
                })
                    .to(pathOne.current, {
                        duration: 1.2,
                        attr: { d: start },
                        ease: "Power2.easeOut"
                    })
                    .to(pathOne.current, {
                        attr: { d: end },
                    }, "-=0.3")
            }, 3300)
        }
    }, [isLoading])

    return (
        <div className="svgContainer">
            <svg className="transition" width="100vw" viewBox="0 0 100 100" preserveAspectRatio="none" fill='#EDEAE6'>
                <path className="path" ref={pathOne} stroke="#000" stroke-width="2px" dur="10s" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
            </svg>
        </div>
    );
};

export default BackgroudSVG; 