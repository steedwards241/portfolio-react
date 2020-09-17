import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import './CustomButton.scss';

class CustomButton extends Component {
    constructor(){
        super()
        this.state = {
            buttonColour: "none",
            buttonShape: "square",
            buttonBorderStyle: "solid",
            buttonBorderColour: "grey",
            textFont: "inherit",
            textColour: "inherit",
            submitReset: "Submit",
            copyText: "",
            displayText: "",
            copyTextButton: <div></div>
        }
    }

    render() {

        const styles = {
            height: "50px",
            width: "150px",
            backgroundColor: this.state.buttonColour,
            borderRadius: this.state.buttonShape,
            borderStyle: this.state.buttonBorderStyle,
            borderColor: this.state.buttonBorderColour,
            fontFamily: this.state.textFont,
            color: this.state.textColour
        }

        const submitButtonHandler = () => {
            if(this.state.submitReset === "Submit"){
                this.setState({
                    submitReset: "Reset",
                    copyText: 
                        "button{height: 50px;width: 150px;background-color: " 
                        + this.state.buttonColour 
                        + ";border-radius: " 
                        + this.state.buttonShape 
                        + ";border-style: "
                        + this.state.buttonBorderStyle
                        + ";border-color: "
                        + this.state.buttonBorderColour
                        + ";font-family: "
                        + this.state.textFont
                        + ";color: "
                        + this.state.textColour,
                    displayText:
                        "height: 50px;width: 150px;background-color: " 
                        + this.state.buttonColour 
                        + ";border-radius: " 
                        + this.state.buttonShape 
                        + ";border-style: "
                        + this.state.buttonBorderStyle
                        + ";border-color: "
                        + this.state.buttonBorderColour
                        + ";font-family: "
                        + this.state.textFont
                        + ";color: "
                        + this.state.textColour,
                    copyTextButton: <button>Copy code</button>
                })

            }
            else if(this.state.submitReset === "Reset"){
                this.setState({
                    submitReset: "Submit",
                    copyText: "",
                    displayText: "",
                    copyTextButton: <div></div>
                })
            }
        }

        const buttonColourHandler = (colour) => {
            this.setState({
                buttonColour: colour
            })
        }

        const buttonShapeHandler = (shape) => {
            this.setState({
                buttonShape: shape
            })
        }

        const buttonBorderStyleHandler = (borderStyle) => {
            this.setState({
                buttonBorderStyle: borderStyle
            })
        }

        const buttonBorderColourHandler = (borderColour) => {
            this.setState({
                buttonBorderColour: borderColour
            })
        }

        const buttonTextFontHandler = (font) => {
            this.setState({
                textFont: font
            })
        }

        const buttonTextColourHandler = (textColour) => {
            this.setState({
                textColour: textColour
            })
        }

        return(
            <div className="custom-button-container">
                <div>
                    <button style={styles} onClick={submitButtonHandler}>{this.state.submitReset}</button>
                </div>
                <div className="button-colours">
                    <div className="div black" onClick={() => buttonColourHandler("black")}></div>
                    <div className="div red" onClick={() => buttonColourHandler("red")}></div>
                    <div className="div blue" onClick={() => buttonColourHandler("blue")}></div>
                    <div className="div yellow" onClick={() => buttonColourHandler("yellow")}></div>
                    <div className="div white" onClick={() => buttonColourHandler("white")}></div>
                </div>
                <div className="button-shape">
                    <p onClick={() => buttonShapeHandler("8px")}>Round</p>
                    <p onClick={() => buttonShapeHandler("0px")}>Square</p>
                </div>
                <div className="button-border-colour">
                    <div className="div black" onClick={() => buttonBorderColourHandler("black")}></div>
                    <div className="div red" onClick={() => buttonBorderColourHandler("red")}></div>
                    <div className="div blue" onClick={() => buttonBorderColourHandler("blue")}></div>
                    <div className="div yellow" onClick={() => buttonBorderColourHandler("yellow")}></div>
                    <div className="div white" onClick={() => buttonBorderColourHandler("white")}></div>
                </div>
                <div className="button-border-style">
                    <p onClick={() => buttonBorderStyleHandler("solid")}>Solid</p>
                    <p onClick={() => buttonBorderStyleHandler("dashed")}>Dashed</p>
                </div>
                <div className="button-text-colour">
                    <div className="div black" onClick={() => buttonTextColourHandler("black")}></div>
                    <div className="div red" onClick={() => buttonTextColourHandler("red")}></div>
                    <div className="div blue" onClick={() => buttonTextColourHandler("blue")}></div>
                    <div className="div yellow" onClick={() => buttonTextColourHandler("yellow")}></div>
                    <div className="div white" onClick={() => buttonTextColourHandler("white")}></div>
                </div>
                <div className="button-text-font">
                    <p className="verdana" onClick={() => buttonTextFontHandler("Verdana, Geneva, Tahoma, sans-serif")}>Verdana</p>
                    <p className="georgia" onClick={() => buttonTextFontHandler("Georgia, 'Times New Roman', Times, serif")}>Georgia</p>
                    <p className="impact" onClick={() => buttonTextFontHandler("Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif")}>Impact</p>
                </div>
                <div>
                    <CopyToClipboard text={this.state.copyText}>
                        {this.state.copyTextButton}
                    </CopyToClipboard>
                    <p className="copyText-container">
                        height: 50px<br></br>
                        width: 150px<br></br>
                        background-color: {this.state.buttonColour}<br></br>
                        border-radius: {this.state.buttonShape}<br></br>
                        border-style: {this.state.buttonBorderStyle}<br></br>
                        border-color: {this.state.buttonBorderColour}<br></br>
                        font-family: {this.state.textFont}<br></br>
                        color: {this.state.textColour}
                    </p>
                </div>
            </div>
        )
    }
 
}

export default CustomButton