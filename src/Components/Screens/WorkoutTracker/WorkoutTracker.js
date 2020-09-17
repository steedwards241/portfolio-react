import React, { Component } from 'react'

import Workout from './Workout/Workout';
import './WorkoutTracker.scss'

class WorkoutPlanner extends Component {

    constructor(){
        super()
        this.state = {
            exercise: "",
            sets: 0,
            reps: 0,
            weight: 0,
            workout: []
        }
    }

    exerciseChangeHandler = (event) => {
        this.setState({
            exercise: (event.target.value)
        })
    }

    setsChangeHandler = (event) => {
        if(this.state.sets > 4) {
            this.setState({
                sets: 5
            })
        }
        else if(this.state.sets < 0) {
            this.setState({
                sets: 0
            })
        }
        else {
            this.setState({ 
                sets: (event.target.value)
             })
        }
    }

    repsChangeHandler = (event) => {
        if(this.state.reps > 26) {
            this.setState({
                reps: 5
            })
        }
        else if(this.state.reps < 0) {
            this.setState({
                reps: 0
            })
        }
        else {
            this.setState({ 
                reps: (event.target.value)
             })
        }
    }

    weightChangeHandler = (event) => {
        if(this.state.weight < 0) {
            this.setState({
                weight: 0
            })
        }
        else {
            this.setState({
                weight: (event.target.value)
            })
        }
    }

    addWorkoutHandler = () => {
        this.setState({
            workout: [...this.state.workout, 
                <Workout 
                    exercise={this.state.exercise}
                    sets={this.state.sets}
                    reps={this.state.reps}
                    weight={this.state.weight}
                />
            ]
        })
        
    }

    render() {
        return (
            <div className="workout-tracker-container">
                <div className="tracker-container">
                    <h2>Workout Tracker</h2>
                    <h4>Add each exercise in your workout</h4>
                    <h4>Click an exercise to complete it</h4>
                    <h4>{this.state.exercise} - {this.state.sets} x {this.state.reps} - {this.state.weight}kg</h4>
                    <p>Exercise: <input onChange={this.exerciseChangeHandler}></input></p>
                    
                    
                    <div className="workout-planner-upper">
                        <p id="details">Sets</p>
                        <p id="details">Reps</p>
                        <p id="details">Weight</p>
                    </div>
                        <br></br><br></br>
                    <div className="workout-planner-lower">
                        <input id="details" onChange={this.setsChangeHandler} type="number" min="1" max="5" defaultValue="0"></input>
                        <input id="details" onChange={this.repsChangeHandler} type="number" min="1" max="25" defaultValue="0"></input>
                        <input id="details" onChange={this.weightChangeHandler} type="number" min="1" max="400" defaultValue="0"></input>
                    </div>


                    <br></br><br></br>
                    <button onClick={this.addWorkoutHandler}>Add</button>
                </div>
                <div className="workout-planner-component">
                    {this.state.workout}
                </div>
            </div>
        )
    }
}

export default WorkoutPlanner
