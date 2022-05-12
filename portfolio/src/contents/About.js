import React,{ Component } from 'react'
import profilepic from '../img/profile.jpg';
import Drive from '../components/Drive';

class About extends Component {
    render() {
        return(

            <div className="condiv about">
            <h1 className="subtopic">About Me</h1>
            <img src={profilepic} alt="profile" className="profilepic" />
            <h3>Hi, I'm Kongkom Sumlee.</h3>
            <p>Sex: Male Age: 22 years old. Currently studying at Computer Engineering. Faculty of Engineering,Prince of Songkla University Phuket Campus. Other Skills 
                Always learning new technologyPositve thinking ,Positive attitude and open mind
            </p>
            <Drive />
            </div>
            
        );
    }
}

export default About;

