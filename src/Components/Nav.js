import React from 'react'
import { Link } from 'react-router-dom'
//import './Nav.css'

const Nav = () => {

    const linkStyles = {
        textDecoration: 'none',
        width: '100%',
        color: 'white'
    }

    return (
        <div className="nav-container">
            <Link style={ linkStyles } to="/"><p>Home</p></Link>
            <Link style={ linkStyles } to="/calculator"><p>Calculator</p></Link>
            <Link style={ linkStyles } to="/workout"><p>Workout Tracker</p></Link>
            <Link style={ linkStyles } to="/standings"><p>Custom League Standings</p></Link>
            <Link style={ linkStyles } to="/custombutton"><p>Custom Button</p></Link>
            <Link style={ linkStyles } to="/clickgame"><p>Click Game</p></Link>
            <p style={{cursor: "pointer"}} onClick={event => window.location.href="https://github.com/steedwards241/portfolio-react"}>GitHub</p>
        </div>
    )
}

export default Nav

/*

<Link style={ linkStyles } to="/cv"><p>CV</p></Link>

*/
