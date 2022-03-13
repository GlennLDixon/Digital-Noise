import React, {useEffect, useState} from 'react';
import {getTracksByArtistAndSong } from "../../modules/PlayListManager.js";
import { ExploreSongCard } from './ExploreSongCard.js';

const ExploreSongList = ({tracks}) => {


    const defaultScreen = <h1>
        No songs found
    </h1>

    return (
        <>
            {/* Container that returns a new array of the searched data into the songCard component */}
            <div className="SongList-container">
                {defaultScreen && tracks.map((track) => (
                    // Break this out into its own component because it will be used repeatedly in the list.
                    <ExploreSongCard
                        key={track.idTrack}    
                        trackId={track.idTrack}
                        albumArt={track.strTrackThumb}
                        trackTitle={track.strTrack}
                        albumTitle={track.strAlbum}
                        trackDuration={track.intDuration}
                    />
                ))}
            </div>
        </>
    )
}

export default ExploreSongList;