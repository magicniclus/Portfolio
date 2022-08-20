import React from 'react';
import BackgroudSVG from './component/BackgroudSVG';
import { useDispatch, useSelector } from 'react-redux';
import "./_loader.scss";
import { cursorDifferenceLeave, cursorDifferenceOver } from '../../redux/actions/actions';

const Loader = () => {
    const dispatch = useDispatch()

    const changeCursorOver = ()=>{
        dispatch(cursorDifferenceOver())
    }

    const changeCursorLeave = ()=>{
        dispatch(cursorDifferenceLeave())
        console.log('leave');
    }

    return (
        <div className='loader' onMouseEnter={changeCursorOver} onMouseOut={changeCursorLeave}>
            <BackgroudSVG />
            <div className="topContainer">
                <div className="number">
                    <p>
                        95
                        <span className='pourcent'>%</span>
                    </p>
                </div>
            </div>
            <div className="bottomContainer">
                <div className="loaderAnnimationOne">
                    <div className="loaderContent">Loading</div>
                    <div className="loaderContent">Loading</div>
                    <div className="loaderContent">Loading</div>
                    <div className="loaderContent">Loading</div>
                    <div className="loaderContent">Loading</div>
                </div>
                <div className="loaderAnnimationTwo">
                    <div className="loaderContent">Loading</div>
                    <div className="loaderContent">Loading</div>
                    <div className="loaderContent">Loading</div>
                    <div className="loaderContent">Loading</div>
                    <div className="loaderContent">Loading</div>
                </div>
            </div>
        </div>
    );
};

export default Loader;