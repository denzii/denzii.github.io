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
            .map(section => <li key={section}><a href={"#" + section}>{section.toUpperCase()}</a></li>);

        return (
            <div className="nav-container">
                <nav>
                    <button onClick={()=>window.scrollTo(0,0)} className="nav-header" >{this.props.Header}</button>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <ul className="menu"> 
                        {NavLinks}
                    </ul>
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
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