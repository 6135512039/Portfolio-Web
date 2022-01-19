import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="PSU Phuket Computer Engineering" where="prince of songkla university" from="2018" to="Present" />
                <Widecard title="Math-Science" where="phuketwittayalia High School" from="2015" to="2017" />
            </div> 
        );
    }
}

export default Education;
