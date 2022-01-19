import React, { Component } from 'react'
import profilepic from '../img/profile.jpg';
import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <h1 className="subtopic2">My Portfolio</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Kongkom Sumlee.','I am a Web Deverloper.']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;