import React, { Component } from 'react';
import './Navigation.css';
import './Header.css';
import Hero from './images/kilise.jpg';
import Deniz from './images/deniz.png';

const Styles = {
    'backgroundImage': `url(${Hero})`,
    'backgroundPosition': 'center',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundAttachment': 'fixed',
    'backgroundSize': 'cover',
    'paddingTop': '80px'
};



class Header extends Component {
    render() {
        return (
            <header style={Styles}>
                <img src={Deniz} class="midImage" />
            </header>
        );
    }
}

export default Header;