import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Skills extends Component {

    constructor(props){
        super(props);

        this.state = {
            "myskill": [
            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png"} alt="imglogo" className="picturelogo" /></a>,
            <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"} alt="imglogo" className="picturelogo2" /></a>,
            <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"} alt="imglogo" className="picturelogo" /></a>,
            <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer"><img src={"https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"} alt="imglogo" className="picturelogo3" /></a>
            ],
            "myskill2": [
                <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noopener noreferrer"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1200px-The_C_Programming_Language_logo.svg.png"} alt="imglogo" className="picturelogo2" /></a>,
                <a href="https://en.wikipedia.org/wiki/PHP" target="_blank" rel="noopener noreferrer"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"} alt="imglogo" className="picturelogo3" /></a>,
                <a href="https://en.wikipedia.org/wiki/Arduino" target="_blank" rel="noopener noreferrer"><img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/1280px-Arduino_Logo.svg.png"} alt="imglogo" className="picturelogo4" /></a>
            ],
        }
    }
    render() {
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskill.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <br/>
                <ul>
                    {this.state.myskill2.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <br/><br/>
                <h1 className="subtopic">My Project</h1>
                <div>
                <a className="texturl" href="https://www.coe.phuket.psu.ac.th/projects/969/กล่องยา-SOS.html?fbclid=IwAR1HAB3meylH-Qpw-zH2vW08720Dfe9h7ZjUNa_DQ04oRhq2U1WtcIWegf0" target="_blank" rel="noopener noreferrer">
                <Widecard title="Medicine Box SOS" where="Computer Engineer Project II's Prince of Songkla University" from="2020" to="2022" />
                </a>
                </div>
            </div> 
        );
    }
}

export default Skills;
