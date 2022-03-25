import React, { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom';
// import "./ExploreSongCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCircleStop} from '@fortawesome/free-solid-svg-icons'
import { getPlayLists } from '../../modules/PlayListManager'
import { addTrack } from "../../modules/PlayListManager"

export const ExploreSongCard = ({trackId, albumArt,trackTitle, albumTitle, trackDuration, trackArtist}) => { 
    const [track, setTrack] = useState({
        playlistsId: 0,
        idTrack: trackId,
        strTrack: trackTitle,
        strAlbum: albumTitle,
        strArtist: trackArtist,
        strTrackThumb: albumArt,
        intDuration: trackDuration
	});
    const [playLists, setPlayLists] = useState([]);
    // const [selected, setSelected] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the sManager and LocationsManager to complete this section

    useEffect(() => {
        getPlayLists().then(playlists => {
            setPlayLists(playlists)
        })
    }, [])


	const navigate = useNavigate();

    console.log(playLists)

    
	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newTrack = { ...track }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Track is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newTrack[event.target.id] = selectedVal
		// update state
		setTrack(newTrack)
	}
    
    
    const handleClickSaveTrack = (event) => {
        event.preventDefault() //Prevents the browser from submitting the for
        
        if (track.track === "") {
			window.alert("Please Select")
        } else {
            addTrack(track)
                .then(() => navigate("/Explore"))
            }
	}
    return (
    <>
    <section key={trackId} className="SongCard">
        <div className="SongCard-checkmark"></div>
        <img className="SongCard-albumArt" src={albumArt} />
        <div className="SongCard-text">
            <FontAwesomeIcon className="SongCard-play" icon={faCirclePlay} />
            {/* <FontAwesomeIcon className="SongCard-play" icon={faCircleStop} /> */}
            <h1 className="SongCard-trackTitle" >Song: <span>{trackTitle}</span></h1>
            <h2 className="SongCard-albumTitle" >Album: <span>{albumTitle}</span></h2>
            <p className="SongCard-trackDuration" >Time: <span>{trackDuration}</span></p> {/** Convert to mins and secs*/}
        </div>
        <form className="playListForm">
            <fieldset>
                    <div className="form-group">
                        <select value={track.playlistsId} name="playListName" id="playlistsId" onChange={handleControlledInputChange}>
                            <option value="0">Select Playlist</option>
                            {playLists.map(r => (
                                <option key={r.id} value={r.id}>
                                    {r.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    </fieldset>
			
			<button className="btn btn-primary"
				onClick={handleClickSaveTrack}>
				Save Song
            </button>
        </form>
    </section>
    </>
    )
}