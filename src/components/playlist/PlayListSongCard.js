import React from "react"

export const PlayListSongCard = ({track}) => { 
return (
    <div>
        <div className="SongList-checkmark"></div>
        <img className="SongList-albumArt"src={track.strTrackThumb} />
        <div className="SongList-trackTitle">{track.strTrack}</div>
        <div className="SongList-albumTitle">{track.strAlbum}</div>
        <div className="SongList-trackDuration">{track.intDuration}</div> {/** Convert to mins and secs*/}
    </div>
    )
}