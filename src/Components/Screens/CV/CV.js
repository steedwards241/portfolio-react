import React, { Component } from 'react'

import './CV.css';

class CV extends Component {

    constructor() {
        super()
        this.state = {
            content: 
                <svg 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    x="0px" 
                    y="0px" 
                    width="80px" 
                    height="80px" 
                    viewBox="0 0 80 80">
                    <text x="18" y="45">Begin</text>
                    <circle 
                        transform="rotate(-90 40 40)" 
                        class="another-circle" 
                        cx="40" 
                        cy="40" 
                        r="36" 
                        fill="transparent" 
                        stroke="black" 
                        stroke-width="4" />
                </svg>,
            newContent: <div></div>
        }
    }

    contentHandler = () => {
        this.setState({
            content: "",
            newContent: <p>Coming Soon...</p>
        })
    }

    render() {
        return(
            <div className="progress-container">
                <h1>CV</h1>
                <div className="svg-container">
                    <div className="svg" onClick={this.contentHandler}>
                        {this.state.content}
                    </div>
                </div>
                <div className="new-content-container">
                        {this.state.newContent}
                </div>
                <div className="progress-container-sorry">
                    <p>Sorry</p>
                </div>
            </div>
        )
    }
}

export default CV