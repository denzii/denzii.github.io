import React, { Component } from 'react';
import './Social.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Styles = {
    'backgroundColor': '#2f2f2f',
    /* Black Gray */
    'color': '#fff',
    'height': '75px',

};

class Social extends Component {
    render() {
        return (
            <div style={Styles}>
                <div className="fa-container">
                    <a href="https://www.linkedin.com/in/deniz-arca/" aria-label='Linkedin Profile' className='fa' > <FaLinkedin  /></a>
                    <a href="https://www.github.com/denzii/" aria-label='Github Profile' className="fa"><FaGithub  /></a>
                    <a href="mailto: denizarca.info@gmail.com" aria-label='Email Address' className="fa"><FaEnvelope  /></a>
                </div>
            </div>
        );
    }
}

export default Social;