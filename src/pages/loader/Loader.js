import React from 'react';
import "./_loader.scss";
import ellipse from '../../assets/svg/Ellipse.svg';
import BackgroudSVG from './component/BackgroudSVG';

const Loader = () => {
    return (
        <div className='loader'>
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