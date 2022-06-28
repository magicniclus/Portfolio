import React from 'react';
import "./_allProjects.scss"

const AllProjects = () => {
    return (
        <div className='allProjectsContainer'>
            <div className="projects">
                <div className="projectContainer one">
                    <div className="imgContainer"></div>
                    <div className="descriptionContainer">
                        <div className="description">
                            <div className="topContainer">
                                <h3 className="projectTitle">
                                    Rêve
                                </h3>
                            </div>
                            <div className="bottomContainer">
                                <p className='number'>1</p>
                                <p className='date'>2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectContainer two">
                    <div className="imgContainer"></div>
                    <div className="descriptionContainer">
                        <div className="description">
                            <div className="topContainer">
                                <h3 className="projectTitle">
                                    KosiKaza
                                </h3>
                            </div>
                            <div className="bottomContainer">
                                <p className='number'>2</p>
                                <p className='date'>2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectContainer terabois">
                    <div className="imgContainer"></div>
                    <div className="descriptionContainer">
                        <div className="description">
                            <div className="topContainer">
                                <h3 className="projectTitle">
                                    TeraBois
                                </h3>
                            </div>
                            <div className="bottomContainer">
                                <p className='number'>3</p>
                                <p className='date'>2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projectContainer four">
                    <div className="imgContainer"></div>
                    <div className="descriptionContainer">
                        <div className="description">
                            <div className="topContainer">
                                <h3 className="projectTitle">
                                    JustMining
                                </h3>
                            </div>
                            <div className="bottomContainer">
                                <p className='number'>4</p>
                                <p className='date'>2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title">
                <h2>Projects</h2>
            </div>
        </div>
    );
};

export default AllProjects;