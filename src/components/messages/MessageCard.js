import React from "react"
import { Link } from "react-router-dom"
// import "./Message.css"

export const MessageCard = ({message, handleDeleteMessage}) => {
    console.log(message)

    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-sendername">
                </span></h3>
                <p></p>
                {message.name}
                <h3>Body</h3>
                <h4>{message.title}</h4>
                <p>
                {message.message} 
                    {/* Breed: {animal.breed} */}
                </p>
                <button type="button" onClick={() => handleDeleteMessage(message.id)}>X</button>
            </div>
        </div>
    )
}