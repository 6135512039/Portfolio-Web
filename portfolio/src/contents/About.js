import React,{ Component } from 'react'
import profilepic from '../img/profile.jpg';

class About extends Component {
    render() {
        return(
            <div className="condev about">
            <h1 className="subtopic">About Me</h1>
            <img src={profilepic} alt="profile" className="profilepic" />
            <h3>Hi, I'm Kongkom Sumlee.</h3>
            <p>test</p>

            </div>
        );
    }
}

export default About;

