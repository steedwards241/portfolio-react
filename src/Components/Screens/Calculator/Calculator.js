import React, { Component } from 'react'

import './Calculator.scss'

class Calculator extends Component {

    constructor(){
        super()
        this.state = {
            sum: "0",
            x: "",
            y: "",
            plus: "+",
            minus: "-",
            multiply: "*",
            divide: "/",
            operation: "",
            equals: ""
        }
    }

    numberHandler = (num) => {
        if(this.state.plus === "+"){
            this.setState({x: this.state.x + num, sum: ""})
        }
        else if(this.state.plus !== "+"){
            this.setState({y: this.state.y + num, sum: ""})
        }
    }

    plusHandler = () => {
        if(this.state.plus === "+"){
            this.setState({plus: "=", minus: "", multiply: "", divide: "", operation: "+"})
        }
        else if(this.state.plus === "="){
            this.setState({
                plus: "C",
                sum: ((parseInt(this.state.x)) + (parseInt(this.state.y))),
                equals: "="
            })
        }
        else if(this.state.plus === "C"){
            this.setState({
                plus: "+", minus: "-", multiply: "*", divide: "/",
                operation: "",
                equals: "",
                sum: "0",
                x: "",
                y: ""
            })
        }
    }

    minusHandler = () => {
        if(this.state.minus === "-"){
            this.setState({plus: "", minus: "=", multiply: "", divide: "", operation: "-"})
        }
        else if(this.state.minus === "="){
            this.setState({
                minus: "C",
                sum: ((parseInt(this.state.x)) - (parseInt(this.state.y))),
                equals: "="
            })
        }
        else if(this.state.minus === "C"){
            this.setState({
                plus: "+", minus: "-", multiply: "*", divide: "/",
                operation: "",
                equals: "",
                sum: "0",
                x: "",
                y: ""
            })
        }
    }

    multiplyHandler = () => {
        if(this.state.multiply === "*"){
            this.setState({plus: "", minus: "", multiply: "=", divide: "", operation: "*"})
        }
        else if(this.state.multiply === "="){
            this.setState({
                multiply: "C",
                sum: ((parseInt(this.state.x)) * (parseInt(this.state.y))),
                equals: "="
            })
        }
        else if(this.state.multiply === "C"){
            this.setState({
                plus: "+", minus: "-", multiply: "*", divide: "/",
                operation: "",
                equals: "",
                sum: "0",
                x: "",
                y: ""
            })
        }
    }

    divideHandler = () => {
        if(this.state.divide === "/"){
            this.setState({plus: "", minus: "", multiply: "", divide: "=", operation: "/"})
        }
        else if(this.state.divide === "="){
            this.setState({
                divide: "C",
                sum: Math.round((((parseInt(this.state.x)) / (parseInt(this.state.y))) + Number.EPSILON)*100) / 100,
                equals: "="
            })
        }
        else if(this.state.divide === "C"){
            this.setState({
                plus: "+", minus: "-", multiply: "*", divide: "/",
                operation: "",
                equals: "",
                sum: "0",
                x: "",
                y: ""
            })
        }
    }

    render(){
        return (
            <div className="calculator-container">
                <div>
                    <h1>Calculator</h1>
                </div>
                <div className="calculator-display">
                    <div className="calculator-display-header">
                        <p>{this.state.x} {this.state.operation} {this.state.y} {this.state.equals} {this.state.sum}</p>
                    </div>
                    <div className="calculator-display-body">
                        <button onClick={() => this.numberHandler(1)}>1</button>
                        <button onClick={() => this.numberHandler(2)}>2</button>
                        <button onClick={() => this.numberHandler(3)}>3</button>
                        <button onClick={this.plusHandler}>{this.state.plus}</button>
                        <button onClick={() => this.numberHandler(4)}>4</button>
                        <button onClick={() => this.numberHandler(5)}>5</button>
                        <button onClick={() => this.numberHandler(6)}>6</button>
                        <button onClick={this.minusHandler}>{this.state.minus}</button>
                        <button onClick={() => this.numberHandler(7)}>7</button>
                        <button onClick={() => this.numberHandler(8)}>8</button>
                        <button onClick={() => this.numberHandler(9)}>9</button>
                        <button onClick={this.multiplyHandler}>{this.state.multiply}</button>
                        <button></button>
                        <button onClick={() => this.numberHandler(0)}>0</button>
                        <button></button>
                        <button onClick={this.divideHandler}>{this.state.divide}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator
