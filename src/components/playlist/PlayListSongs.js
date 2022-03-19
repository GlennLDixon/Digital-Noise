import React, { useEffect, useState } from "react";
// import { getTracks, getTracksByArtistAndSong } from "../../modules/PlayListManager.js";

export const PlayListSongs = () => {
    const [lists, setList] = useState([]);

    return (
    <>
        <div className="container">{lists}</div>
    </>
);
};