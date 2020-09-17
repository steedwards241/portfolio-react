import React, { Component } from 'react'

import './ClickGame.scss'

class ClickGame extends Component {

    constructor(){
        super()
        this.state = {
            totalClicks: 0,
            currentClicks: 0,
            xp: 0,
            level: 1,
            borderColor: "black",
            randomNum: 1,
            fontFamily: "",
            fontSize: "50px",
            marginTop: "40px"
        }
    }

    render() {
        const borderColors = ["none", "black", "red", "blue", "yellow", "green", "purple", "pink", "brown", "grey"]

        const styles = {
            borderColor: this.state.borderColor,
            borderStyle: "solid",
            borderWidth: "10px",
            cursor: "pointer",
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            width: "60%",
        }

        const clickerStyles = {
            marginTop: this.state.marginTop
        }

        const clickHandler = () => {
            this.setState({
                totalClicks: this.state.totalClicks + 1,
                currentClicks: this.state.currentClicks + 1,
                xp: this.state.xp + (this.state.level * 1)
            })
            if(this.state.currentClicks === 9){
                this.setState({
                    level: this.state.level + 1,
                    currentClicks: 0,
                    randomNum: (Math.floor(Math.random() * 10) + 1),
                    borderColor: borderColors[this.state.randomNum]
                })
            }
        }

        const storePurchaseHandler = (font) => {
            if(this.state.xp > 49){
                this.setState({
                    fontFamily: font,
                    xp: this.state.xp - 50
                })
            }            
        }

        const mouseDownHandler = () => {
            this.setState({ fontSize: "100px" , marginTop: "20px"})
        }

        const mouseUpHandler = () => {
            this.setState({ fontSize: "50px", marginTop: "40px" })
        }

        return (
            <div className="click-game-container">
                <div onClick={clickHandler} style={styles} onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} className="clicker-div">
                    <p style={clickerStyles}>Click</p>
                </div>
                <div className="click-game-info">
                    <div className="click-game-info-header">
                        <p>Total Clicks</p>
                        <p>XP</p>
                        <p>Level</p>
                    </div>
                    <div className="click-game-info-state">
                        <p>{this.state.totalClicks}</p>
                        <p>{this.state.xp}</p>
                        <p>{this.state.level}</p>
                    </div>
                </div>
                <div className="store-container">
                    <h2>Store</h2>
                    <p className="store-items" id="impact" onClick={() => storePurchaseHandler("Impact")}>Impact: 50xp</p>
                    <p className="store-items" id="georgia" onClick={() => storePurchaseHandler("Georgia")}>Georgia: 50xp</p>
                    <p className="store-items" id="verdana" onClick={() => storePurchaseHandler("Verdana")}>Verdana: 50xp</p>
                    <p className="store-items" onClick={() => storePurchaseHandler("")}>Default: 50xp</p>
                </div>
            </div>
        )
    }
}

export default ClickGame