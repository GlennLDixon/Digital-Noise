import React from "react"

export const PlayListSongCard = ({trackId, albumArt,trackTitle, albumTitle, trackDuration}) => { 
return (
    <div key={trackId}>
        <div className="SongList-checkmark"></div>
        <img className="SongList-albumArt"src={albumArt} />
        <div className="SongList-trackTitle">{trackTitle}</div>
        <div className="SongList-albumTitle">{albumTitle}</div>
        <div className="SongList-trackDuration">{trackDuration}</div> {/** Convert to mins and secs*/}
    </div>
    )
}