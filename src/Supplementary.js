import React, { Component } from 'react';
import './Supplementary.css';
import Wren from './images/wren.png';
import Hull from './images/hull3.png';
import NetCore from './images/project.png'
import Hike from './images/hike2.png'
import Meditation from './images/mandala.png'
import Eye from './images/eye.png'
import ReactJS from './images/logo192.png'
import Resume from './documents/Deniz_Arca_Resume.PDF'

const Styles = {
    'backgroundColor': '#2f2f2f', /* Black Gray */
    'color': '#fff',
    'height': '75px',

};

class Supplementary extends Component {
    render() {
        return (
            <div class="supplementaryContainer">
                <div class="light-background container-fluid" id="work">
                    <p class="unit-header">WORK</p>
                    <div class="unit">
                        <a href="https://www.wrenkitchens.com/"><img src={Wren} class="bigger-icon" /></a>
                        <h3 class="lead">Wren Kitchens<br /> <small>October 2018 - February 2020</small></h3>
                        <p class="lead">Worked as a Junior Developer for Wren's Logistics team, my role mainly included but was not limited to backend systems.</p>
                    </div>
                </div>
                <div class="dark-background container-fluid" id="education">
                    <p class="unit-header">EDUCATION</p>

                    <div class="unit">
                        <a href="https://www.hull.ac.uk/"><img src={Hull} class="bigger-icon" /></a>
                        <h3 class="lead">University of Hull<br /> <small>2014 - 2018</small></h3>
                        <p class="lead">Bachelor's degree, Computer Software Engineering, First Class with Honours</p>
                    </div>
                </div>
                <div class="light-background container-fluid" id="projects">
                    <p class="unit-header">PROJECTS</p>

                    <div class="unit">
                        <a href="https://www.github.com/denzii/"><img src={NetCore} class="project-icon" /></a>
                        <h3 class="lead">Auth Server API<br /> <small>April 2020</small></h3>
                        <p class="lead"> A REST appropriated JSON API project built using .NET Core 3.1.
                        The aim of this project is to provide Authentication/Authorization services which would be consumed by third party apps.
                        Includes a Unit Test project & a Client Side Library making it easier to implement JWT Bearer Authentication.
                        </p>
                    </div>

                    <div class="unit">
                        <a href="https://www.github.com/denzii/github.io/"><img src={ReactJS} class="project-icon" /></a>
                        <h3 class="lead">Web Portfolio<br /> <small>July 2020</small></h3>
                        <p class="lead"> A simplistic Static Web Portfolio built using ReactJS as a first attempt on learning the framework</p>
                    </div>
                </div>

                <div class="dark-background container-fluid" id="hobbies">
                    <p class="unit-header">HOBBIES</p>

                    <div class="unit">
                        <img src={Hike} class="bigger-icon" />
                        <h3 class="lead">Hiking<br /></h3>
                        <p class="lead">The best aspect of any hike is spending time with quality people</p>
                    </div>

                    <div class="unit">
                        <img src={Meditation} class="bigger-icon" />
                        <h3 class="lead">Meditation<br /></h3>
                        <p class="lead">Nothing is better than a sound mind</p>
                    </div>
                </div>

                <div class="light-background container-fluid" id="resume">
                    <p class="unit-header">RESUME</p>

                    <div class="unit">
                        <a href={`${Resume}`} target="_blank"><img src={Eye} class="bigger-icon" /></a>
                    </div>
                </div>

            </div>

        );
    }
}

export default Supplementary;