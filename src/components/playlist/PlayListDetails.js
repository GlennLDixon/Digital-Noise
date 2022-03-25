import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlayListTracksById } from "../../modules/PlayListManager.js";

import { PlayListSongCard } from "./PlayListSongCard.js";


export const PlayListDetails = () => {
    const [playList, setPlayList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [tracks, setTracks] = useState([]);

    const { id } = useParams();
    
    useEffect(() => {
        getPlayListTracksById(id).then((tracks) => {
            console.log(tracks);
            setPlayList(tracks);
        });
        setIsLoading(false);
    }, []);

    console.log(playList)
    
    return (
        <>
        <div className="playListContainer">
            {isLoading ? (<h3>Loading...</h3>) : (playList.map((track) =>
            <PlayListSongCard
                    key={track.id}    
                    track={track}
                />
            ))}
            
        </div>
        </>
    )
}