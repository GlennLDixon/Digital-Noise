import React from "react"

export const PlayListSongCard = ({tracks}) => { 
return (
    <div>
        <div className="SongList-checkmark"></div>
        <img className="SongList-albumArt"src={tracks.strTrackThumb} />
        <div className="SongList-trackTitle">{tracks.strTrack}</div>
        <div className="SongList-albumTitle">{tracks.strAlbum}</div>
        <div className="SongList-trackDuration">{tracks.intDuration}</div> {/** Convert to mins and secs*/}
    </div>
    )
}