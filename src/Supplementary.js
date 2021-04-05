import React, { Component } from 'react';
import './Supplementary.css';
import Wren from './images/wren.webp';
import Hull from './images/hull3.webp';
import NetCore from './images/project.webp'
import Hike from './images/hike2.webp'
import Meditation from './images/mandala.webp'
import Eye from './images/eye.webp'
import ReactJS from './images/logo192.webp'
import Resume from './documents/Deniz_Arca_Resume.PDF'

class Supplementary extends Component {
    render() {
        return (
            <div className="supplementaryContainer">
                <div className="light-background container-fluid" id="work">
                    <p className="unit-header">WORK</p>
                    <div className="unit-container">
                        <div className="unit">
                            <a href="https://www.wrenkitchens.com/" target="_blank" rel="noopener noreferrer"><img src={Wren} alt='Wren Kitchens Logo' className="bigger-icon" /></a>
                            <h3 className="lead">Wren Kitchens<br /> <small>October 2018 - February 2020</small></h3>
                            <p className="lead">Worked as a Junior Developer for Wren's Logistics team, my role mainly included but was not limited to backend systems.</p>
                        </div>
                    </div>
                </div>

                <div className="dark-background container-fluid" id="education">
                    <p className="unit-header">EDUCATION</p>
                    <div className="unit-container">
                        <div className="unit">
                            <a href="https://www.hull.ac.uk/" target="_blank" rel="noopener noreferrer"><img src={Hull} alt='University of Hull Logo' className="bigger-icon" /></a>
                            <h3 className="lead">University of Hull<br /> <small>2014 - 2018</small></h3>
                            <p className="lead">Bachelor's degree, Computer Software Engineering, First Class with Honours</p>
                        </div>
                    </div>
                </div>

                <div className="light-background container-fluid" id="projects">
                    <p className="unit-header">PROJECTS</p>
                    <div className="unit-container">
                        <div className="unit">
                            <a href="https://github.com/denzii/AuthManager" target="_blank" rel="noopener noreferrer"><img src={NetCore} alt='.NET Core Logo' className="project-icon" /></a>
                            <h3 className="lead">Auth Server API<br /> <small>April 2020</small></h3>
                            <p className="lead"> A REST appropriated JSON API project built using .NET Core 3.1.
                            The aim of this project is to provide Authentication / Authorization services which would be consumed by third party apps.
                            Includes a Unit Test project & a Client Side Library making it easier to implement JWT Bearer Authentication.
                        </p>
                        </div>

                        <div className="unit">
                            <a href="https://github.com/denzii/web-portfolio/" target="_blank" rel="noopener noreferrer"><img src={ReactJS} alt='ReactJS Logo' className="project-icon" /></a>
                            <h3 className="lead">Web Portfolio<br /> <small>July 2020</small></h3>
                            <p className="lead"> A simplistic Static Web Portfolio built using ReactJS as a first attempt on learning the framework</p>
                        </div>
                    </div>
                </div>

                <div className="dark-background container-fluid" id="hobbies">
                    <p className="unit-header">HOBBIES</p>

                    <div className="unit-container">
                        <div className="unit">
                            <img src={Hike} alt='Icon with Tents' className="bigger-icon" />
                            <h3 className="lead">Hiking<br /></h3>
                            <p className="lead">The best aspect of any hike is spending time with quality people</p>
                        </div>

                        <div className="unit">
                            <img src={Meditation} alt='Icon with a mandala' className="bigger-icon" />
                            <h3 className="lead">Meditation<br /></h3>
                            <p className="lead">Nothing is better than a sound mind</p>
                        </div>
                    </div>
                </div>

                <div className="light-background container-fluid" id="resume">
                    <p className="unit-header">RESUME</p>
                    <div className="unit-container">
                        <div className="unit">
                            <a href={`${Resume}`} target="_blank" rel="noopener noreferrer"><img src={Eye} alt='Icon with an eye' className="bigger-icon" /></a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Supplementary;