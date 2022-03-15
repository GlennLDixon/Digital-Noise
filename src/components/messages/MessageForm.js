import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addMessage, getUsers } from '../../modules/MessageManager';
// import './MessageForm.css'

export const MessageForm = () => {
	// State will contain both location data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [message, setMessage] = useState({
		senderName: JSON.parse(sessionStorage.getItem("digital_user")).name,
		receiverId: JSON.parse(sessionStorage.getItem("digital_user")).id,
		title: "",
		message: "",
		activeUserId: JSON.parse(sessionStorage.getItem("digital_user")).id
	});
	const [friends, setFriends] = useState([])

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the sManager and LocationsManager to complete this section

	const navigate = useNavigate();
	
	// This  
	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newMessage = { ...message }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Message is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newMessage[event.target.id] = selectedVal
		// update state
		setMessage(newMessage)
	}


    useEffect(() => {
		//load friends data and setState
		getUsers().then(setFriends)
	}, []);

	const handleClickSaveMessage = (event) => {
		event.preventDefault() //Prevents the browser from submitting the for

        if (message.message === "") {
			window.alert("Please Select")
		} else {
        addMessage(message)
            .then(() => navigate("/messages"))
        }
	}
	

	return (
		<form className="messageForm">
			<h2 className="messageForm__title">New Message</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Receiver name:</label>
					<select value={friends.id} name="activeUserId" id="receiverId" onChange={handleControlledInputChange}>
						<option value="0">Select friend</option>
						{friends.map(r => (
							<option key={r.id} value={r.id}>
								{r.name}
							</option>
						))}
					</select>
				</div>
			<div className="form-group">
					<label htmlFor="title">Message title:</label>
					<input type="text" id="title" onChange={handleControlledInputChange} autoFocus className="form-control" placeholder="Message Title" value={message.title} />
				</div>
				<div className="form-group">
					<label htmlFor="message">Message:</label>
					<textarea type="text" id="message" onChange={handleControlledInputChange} autoFocus className="form-control" placeholder="Message" value={message.message}></textarea>
				</div>
			</fieldset>
			
			<button className="btn btn-primary"
				onClick={handleClickSaveMessage}>
				Save Message
        </button>
		</form>
	)
};