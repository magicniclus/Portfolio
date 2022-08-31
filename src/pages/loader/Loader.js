import React from 'react';
import BackgroudSVG from './component/BackgroudSVG';
import { useDispatch } from 'react-redux';
import "./_loader.scss";

const Loader = () => {
    const dispatch = useDispatch()

    return (
        <div className='loader'>
            <BackgroudSVG />
            <div className="topContainer">
                <div className="number">
                    {/* <p>
                        95
                        <span className='pourcent'>%</span>
                    </p> */}
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