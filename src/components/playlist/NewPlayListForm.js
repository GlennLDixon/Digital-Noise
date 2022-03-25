import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {addPlayList } from '../../modules/ProfileManager';
// import './PlaylistForm.css'

export const PlayListForm = () => {
	// State will contain both location data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [playlist, setPlayList] = useState({
		title: "",
		CreatorName: JSON.parse(sessionStorage.getItem("digital_user")).name,
		activeUserId: JSON.parse(sessionStorage.getItem("digital_user")).id,
		DateCreated: new Date().toLocaleDateString(),
		tracks: []
	});

	// const navigate = useNavigate();
	
	// This  
	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newPlayList = { ...playlist }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Message is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newPlayList[event.target.id] = selectedVal
		// update state
		setPlayList(newPlayList)
	}


    // useEffect(() => {
	// load friends data and setState
	// 	getUsers().then(setFriends)
	// }, []);

	const handleClickSavePlaylist = (event) => {
		event.preventDefault() //Prevents the browser from submitting the for
        
        if (playlist.title === "") {
            window.alert("Please Select")
            } else {
            addPlayList(playlist)
            // .then(() => navigate("/playlists"))
        }
	}
	

	return (
		<form className="playlistForm">
			<h2 className="playlistForm__title">Create Playlist</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="playlist">playlist:</label>
					<textarea name="activeUserId" type="text" id="title" onChange={handleControlledInputChange} autoFocus className="form-control" placeholder="playlist" value={playlist.title}></textarea>
				</div>
			</fieldset>
			
			<button className="btn btn-primary"
				onClick={handleClickSavePlaylist}>
				Save Playlist
        </button>
		</form>
	)
};