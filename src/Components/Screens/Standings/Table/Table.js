import React from 'react'

const Table = (props) => {
    return (
        <div className="standings-table-container">
            <td id="short">{props.number}</td>
            <td id="long">{props.name}</td>
            <td id="long">{props.home}</td>
            <td id="long">{props.coach}</td>
            <td id="long">{props.captain}</td> 
        </div>
    )
}

export default Table
