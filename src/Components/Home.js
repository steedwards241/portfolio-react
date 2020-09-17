import React from 'react'

//import './Home.css'

const Home = () => {
    let htmlLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png";
    let cssLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png";
    let reactLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png";
    let javascriptLogo = "https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png"
    let scssLogo = "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"

    return (
        <div className="content-container home-container">
            <div className="home-title-container">
                <p>Hello</p>
                <h5>Welcome to my React portfolio</h5>
            </div>
            <div className="home-logo-container">
                <img src={htmlLogo} alt="HTML5" height="50px" width="50px"></img>
                <img src={cssLogo} alt="CSS3" height="50px" width="40px"></img>
                <img src={reactLogo} alt="React" height="50px" width="70px"></img>
                <img src={javascriptLogo} alt="ES6" height="50px" width="40px"></img>
                <img src={scssLogo} alt="SCSS" height="50px" width="50px"></img>
            </div>
        </div>
    )
}

/*
Caclulator - state, data type conversion, css grids
Workout Tracker - props, event handling, arrays, components
*/

export default Home
