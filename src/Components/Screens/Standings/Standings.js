import React, { Component } from 'react';
import Table from './Table/Table';
import './Standings.scss';

class Standings extends Component {

    constructor(){
        super()
        this.state = {
            no: 1,
            team: "",
            stadium: "",
            squadSize: "",
            manager: "",
            captain: "",
            table: [],
            previewTable:
                <Table 
                    number="1"
                    name="New Team"
                    home="Generic Arena"
                    coach="New Coach"
                    captain="New Captain"
                />
            
        }
    }

    addNewTeamHandler = () => {
        this.setState({
            table: [...this.state.table, 
                <Table 
                number={this.state.no}
                name={this.state.team}
                home={this.state.stadium}
                players={this.state.squadSize}
                coach={this.state.manager}
                captain={this.state.captain}
                />
            ],
            no: this.state.no + 1,
            previewTable: ""
        })
    }

    teamInputHandler = (event) => {
        this.setState({
            team: (event.target.value)
        })
    }

    stadiumInputHandler = (event) => {
        this.setState({
            stadium: (event.target.value)
        })
    }

    squadSizeInputHandler = (event) => {
        this.setState({
            squadSize: (event.target.value)
        })
    }

    managerInputHandler = (event) => {
        this.setState({
            manager: (event.target.value)
        })
    }

    captainInputHandler = (event) => {
        this.setState({
            captain: (event.target.value)
        })
    }

    render(){
        return (
            <div className="standings-container">
                <h1>Standings</h1>
                <h1>{this.state.name}</h1>
                <div>
                    <input placeholder="Team Name" onChange={this.teamInputHandler}></input>
                    <input placeholder="Stadium" onChange={this.stadiumInputHandler}></input>
                    <input placeholder="Manager" onChange={this.managerInputHandler}></input>
                    <input placeholder="Captain" onChange={this.captainInputHandler}></input>
                </div>
                <button onClick={this.addNewTeamHandler}>Add New Team</button>
                <div className="table-container">
                    <table className="table-header">
                        <tr>
                            <th id="short">No.</th>
                            <th id="long">Team</th>
                            <th id="long">Stadium</th>
                            <th id="long">Manager</th>
                            <th id="long">Captain</th>
                        </tr>
                    </table>
                    {this.state.previewTable}
                    <div>{this.state.table}</div>
                    </div>    
            </div>
        )
    }
}

export default Standings