import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <a className="texturl" href="https://www.coe.phuket.psu.ac.th" target="_blank" rel="noopener noreferrer"><Widecard title="Computer Engineering" where="Prince of Songkla University Phuket Campus" from="2018" to="Present" /></a>
                <a className="texturl" href="https://www.pkw.ac.th/pkw/index.php" target="_blank" rel="noopener noreferrer"><Widecard title="Math-Science" where="Phuketwittayalia High School" from="2015" to="2017" /></a>
            </div> 
        );
    }
}

export default Education;
