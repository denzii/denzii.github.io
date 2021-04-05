import React, { Component } from 'react';
import './Navigation.css';
import './Header.css';
import Hero from './images/kilise.webp';
import Deniz from './images/deniz.webp';

const Styles = {
    'backgroundImage': `url(${Hero})`,
    'backgroundPosition': 'center',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundAttachment': 'fixed',
    'paddingTop': '80px'
};



class Header extends Component {
    render() {
        return (
            <header style={Styles}>
                <img src={Deniz} srcSet={Deniz + " 0.60x"} alt='Deniz Arca Headshot' height="425px" width="425px" className="midImage" />
            </header>
        );
    }
}

export default Header;