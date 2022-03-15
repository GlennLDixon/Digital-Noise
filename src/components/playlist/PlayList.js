import React, { useEffect, useState } from "react";
import { getTracks, getTracksByArtistAndSong } from "../../modules/PlayListManager.js";

export const PlayList = () => {
    const [lists, setList] = useState([]);
    // const [search, setSearch] = useState({ artist: 'wale', song: 'bad'});
    const [tracks, setSearchTracks] = useState('bad');
    // const [artists, setSearchArtists] = useState('Wale');
    const [isLoading, setIsLoading] = useState(true);

    // const getSearchedData = () => {
    //     getPlayList().then((res) => {
    //         console.log(res);
    //         setList(res.track);
    // });
    // };

    // const getTheTracks = () => {
    //     getTracks().then((res) => {
    //         console.log(res)
    //         setTracks(res)
    //     })
    // }

    console.log(tracks)


    useEffect(() => {
        getTracksByArtistAndSong(artistName, trackName)
        .then(tracks => {
            setSearchTracks(tracks);
            setIsLoading(false);
        })
    }, []);

    return (
    <>
        <div className="container">{lists}</div>
    </>
);
};