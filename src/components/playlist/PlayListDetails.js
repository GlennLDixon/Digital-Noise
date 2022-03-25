import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrackById, getPlayLists, getPlayListById } from "../../modules/PlayListManager.js";
import {ExploreSongCard} from '../explore/ExploreSongCard'
import { PlayListSongCard } from "./PlayListSongCard.js";


export const PlayListDetails = () => {
    const [playList, setPlayList] = useState({tracks:[]})
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams();
    
    
    useEffect(() => {
        
        getPlayListById(id).then((list) => {
            console.log(list);
            setPlayList(list);
        });
        setIsLoading(false);
    }, []);

    
    console.log(playList.tracks)
    return (
        <>
        <div className="playListContainer">
            {playList.tracks.map((track) =>
            <PlayListSongCard
                    key={track.id}    
                    tracks={track}
                />
            )}
            
        </div>
        </>
    )
}
// useEffect(() => {
//     getPlayLists().then(list =>{
//         setPlayLists(list)
//     })
// }, [])

// const dummyData = {
//     "title": "NewPlayList",
//     "CreatorName": "Glenn Dixon",
//     "activeUserId": 1,
//     "DateCreated": "3/20/2022",
//     "tracks": [],
//     "id": 2
// };



// const test = async (id) => {
//     const list = await getPlayListById(id);
//     console.log('RETURNED FROM DB: ', list);
//     setPlayList(list);
//     console.log('Playlist: ', playList);
//     setIsLoading(false);
// }



// playList.tracks.map((track) => {
//                     <ExploreSongCard
//                         key={track.id}    
//                         trackId={track.idTrack}
//                         albumArt={track.strTrackThumb}
//                         trackTitle={track.strTrack}
//                         albumTitle={track.strAlbum}
//                         trackDuration={track.intDuration}
//                     />
//                 })



// isLoading ? (<p>Loading...</p>) : (<>{playList.tracks.map((track) => {
    //     <ExploreSongCard
                //         key={track.id}    
                //         trackId={track.idTrack}
                //         albumArt={track.strTrackThumb}
                //         trackTitle={track.strTrack}
                //         albumTitle={track.strAlbum}
                //         trackDuration={track.intDuration}
                //     />
                // })}</>)