import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrackById, getPlayLists, getPlayListById } from "../../modules/PlayListManager.js";
import {ExploreSongCard} from '../explore/ExploreSongCard'
import { PlayListSongCard } from "./PlayListSongCard.js";

// const dummyData = {
//     "title": "NewPlayList",
//     "CreatorName": "Glenn Dixon",
//     "activeUserId": 1,
//     "DateCreated": "3/20/2022",
//     "tracks": [],
//     "id": 2
// };

export const PlayListDetails = () => {
    const [returnedTrackId, setReturnedTrackId] = useState('')
    const [playList, setPlayList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams();

    // const test = async (id) => {
    //     const list = await getPlayListById(id);
    //     console.log('RETURNED FROM DB: ', list);
    //     setPlayList(list);
    //     console.log('Playlist: ', playList);
    //     setIsLoading(false);
    // }

    useEffect(() => {
        
        getPlayListById(id).then((list) => {
            console.log(list);
            setPlayList(list);
        });
        setIsLoading(false);
        // getTrackById().then(apiTrackId => {
        //     setReturnedTrackId(apiTrackId)
        // })
    }, []);

    // useEffect(() => {
    //     getPlayLists().then(list =>{
    //         setPlayLists(list)
    //     })
    // }, [])

    // useEffect(() => {
    //     //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    //     console.log("useEffect", animalId)
    //     getAnimalById(animalId)
    //     .then(animal => {
    //         setAnimal(animal);
    //         setIsLoading(false)
    //     });
    // }, [playlistId]);
    console.log(playList.tracks)
    return (
        <>
        <div className="container">
            {playList.tracks.map((track) => {
                    <PlayListSongCard
                        key={track.id}    
                        tracks={track}
                    />
                })}
            
            {/* {
                isLoading ? (<p>Loading...</p>) : (<>{playList.tracks.map((track) => {
                    <ExploreSongCard
                        key={track.id}    
                        trackId={track.idTrack}
                        albumArt={track.strTrackThumb}
                        trackTitle={track.strTrack}
                        albumTitle={track.strAlbum}
                        trackDuration={track.intDuration}
                    />
                })}</>)
            } */}
        </div>
        </>
    )
}

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