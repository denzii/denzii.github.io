// {} allows importing a library contained within the imported one
// advantage being no need to explicitly specify full path eg. extends React.Component{
import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        const NavLinks = ([
            "work",
            "education",
            "projects",
            "hobbies",
            "resume"
        ])
            .map(section => <li><a href={"#" + section}>{section.toUpperCase()}</a></li>);

        return (
            <div class="nav-container">
                <nav>
                    <a href="#" class="nav-header">{this.props.Header}</a>
                    <input class="menu-btn" type="checkbox" id="menu-btn" />
                    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <ul class="menu">
                        {NavLinks}
                    </ul>
                </nav>
            </div>

        );
    }
}

// this file will export Navigation class by default
//a file could contain multiple classes, must specify a default for convenience
export default Navigation;


// could also export multiple
// module.exports = {
//     Navigation : Navigation,
//     X : X
//   }