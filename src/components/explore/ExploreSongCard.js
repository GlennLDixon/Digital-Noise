import React from "react"
// import "./ExploreSongCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCircleStop} from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'


export const ExploreSongCard = ({trackId, albumArt,trackTitle, albumTitle, trackDuration}) => { 
return (
    <section key={trackId} className="SongCard">
        <div className="SongCard-checkmark"></div>
        <img className="SongCard-albumArt"src={albumArt} />
        <div className="SongCard-text">
            <FontAwesomeIcon className="SongCard-play" icon={faCirclePlay} />
            <FontAwesomeIcon icon={faTwitter} />
            {/* <FontAwesomeIcon className="SongCard-play" icon={faCircleStop} /> */}
            <h1 className="SongCard-trackTitle">Song: <span>{trackTitle}</span></h1>
            <h2 className="SongCard-albumTitle">Album: <span>{albumTitle}</span></h2>
            <p className="SongCard-trackDuration">Time: <span>{trackDuration}</span></p> {/** Convert to mins and secs*/}
        </div>
    </section>
    )
}