import React, { Component } from 'react'

class Workout extends Component {

    constructor(){
        super()
        this.state = {
            backgroundColour: ""
        }
    }

    exerciseCompleteHandler = (event) => {
        if(this.state.backgroundColour === "" || this.state.backgroundColour === "white"){
            this.setState({
                backgroundColour: "green"
            })
        }
        else if(this.state.backgroundColour === "green"){
            this.setState({
                backgroundColour: "red"
            })
        }
        else if(this.state.backgroundColour === "red"){
            this.setState({
                backgroundColour: "white"
            })
        }
    }

    render(){
        return (
            <div className="workout-container" style={{backgroundColor: this.state.backgroundColour}} onClick={this.exerciseCompleteHandler}>
                <div>
                    <h3>{this.props.exercise}</h3>
                </div>
                <div>
                    <h4>{this.props.sets} x {this.props.reps} - {this.props.weight}kg</h4>
                </div>
            </div>
        )
    }
}

export default Workout

/*
const Workout = (props) => {
    return (
        <div className="workout-container">
            <div>
                <h3>{props.exercise}</h3>
            </div>
            <div>
                <h4>{props.sets} x {props.reps} - {props.weight}kg</h4>
            </div>
        </div>
    )
}
*/