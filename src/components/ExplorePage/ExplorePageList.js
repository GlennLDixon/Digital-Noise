import React, {useEffect, useState} from 'react';
import {getTracksByArtistAndSong } from "../../modules/PlayListManager.js";

export const ExplorePageList = () => {
    const [tracks, setSearchTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
        getTracksByArtistAndSong('kendrick_lamar', 'dna.')
        .then(tracks => {
            setSearchTracks(tracks);
            setIsLoading(false);
        })
    }, []);
 
return (
    <div className="SongList-container">
        {tracks.map((track) => (
            // Break this out into its own component because it will be used repeatedly in the list.
            <div key={track.idTrack}>
                <div className="SongList-checkmark"></div>
                <img className="SongList-albumArt"src={track.strTrackThumb} />
                <div className="SongList-trackTitle">{track.strTrack}</div>
                <div className="SongList-albumTitle">{track.strAlbum}</div>
                <div className="SongList-trackDuration">{track.intDuration}</div> {/** Convert to mins and secs*/}
            </div>
        ))}
    </div>
)
}